import * as nearAPI from "near-api-js";

const { keyStores, connect, Contract } = nearAPI;

const shuffleArray = (array) => {
  const newArray = array.slice(); // Create a copy of the original array
  let currentIndex = newArray.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element, if it's not the original position
    if (currentIndex !== randomIndex) {
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
  }

  return newArray;
};

export const shuffleMultiDimensionalArray = (array) => {
  const flattened = array.flat(); // Flatten the multi-dimensional array
  const shuffled = shuffleArray(flattened); // Shuffle the flattened array

  let index = 0;
  const result = [];

  // Reconstruct the shuffled multi-dimensional array
  array.forEach((subArray) => {
    const newArray = [];
    subArray.forEach(() => {
      newArray.push(shuffled[index]);
      index++;
    });
    result.push(newArray);
  });

  return result;
};

export const getStatus = async () => {
  const myKeyStore = new keyStores.InMemoryKeyStore();

  const connectionConfig = {
    networkId: "mainnet",
    keyStore: myKeyStore,
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org",
  };

  // connect to NEAR
  const nearConnection = await connect(connectionConfig);
  const account = await nearConnection.account();
  const contract = new Contract(account, "v1.nadabot.near", {
    viewMethods: ["get_providers", "get_users_for_stamp", "is_human"],
  });

  //   get Total Checks
  const providers = await contract.get_providers();
  let totalStamps = 0;
  providers.forEach((provider) => (totalStamps += provider.stamp_count));

  //   get Humans Verified

  // Get All Users

  const totalUsersPromise = providers.map((provider) =>
    contract.get_users_for_stamp({
      provider_id: provider.provider_id,
    }),
  );

  const totalUsersResult = await Promise.all(totalUsersPromise);

  let totalUsers = [].concat(...totalUsersResult);

  totalUsers = [...new Set(totalUsers)];

  // Verify Users
  let humanVerified = 0;
  const usersCheck = totalUsers.map((user) =>
    contract.is_human({
      account_id: user,
    }),
  );
  const usersCheckResults = await Promise.all(usersCheck);
  usersCheckResults.forEach((isHuman) => {
    if (isHuman) humanVerified += 1;
  });

  const activeProviders = providers.filter(
    (provider) => provider.status === "Active",
  );

  const statsData = {
    verified_providers: activeProviders.length,
    total_checks: totalStamps,
    verified_humans: humanVerified,
  };

  return statsData;
};
