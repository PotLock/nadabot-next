import * as nearAPI from "near-api-js";
import { NextResponse } from "next/server";

const { keyStores, connect, Contract } = nearAPI;

export const config = {
  api: {
    externalResolver: true,
  },
};

const getStatus = async () => {
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
  console.log(statsData);

  return statsData;
};

export default async function GET(req, res) {
  const data = await getStatus();
  res.status(200).json(data);
}
