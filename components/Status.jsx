import { useState, useEffect } from "react";
import Big from "big.js";
import * as nearAPI from "near-api-js";

const { keyStores, connect, Contract } = nearAPI;

const Status = () => {
  const [statsData, setStatsData] = useState({
    verified_providers: "-",
    total_checks: "-",
    verified_humans: "-",
  });
  useEffect(() => {
    (async function () {
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

      //   get Active Provdiers
      const activeProviders = await contract.get_providers({
        status: "Active",
      });

      //   get Total Checks
      const providers = await contract.get_providers();
      let totalStamps = 0;
      providers.forEach((provider) => (totalStamps += provider.stamp_count));

      //   get Humans Verified

      // Get All Users
      let totalUsers = [];
      for (const provider of providers) {
        const users = await contract.get_users_for_stamp({
          provider_id: provider.provider_id,
        });
        totalUsers.push(...users);
      }
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

      const statsData = {
        verified_providers: activeProviders.length,
        total_checks: totalStamps,
        verified_humans: humanVerified,
      };
      setStatsData(statsData);
    })();
  }, []);
  return (
    <div className="mt-14 flex w-full justify-center bg-[#F0F0F0] px-10 py-10 max-md:px-5">
      <div className="container grid grid-cols-3 max-md:grid-cols-1">
        <div className="flex flex-col items-center gap-3 text-[#292929] max-md:py-4">
          <div className="text-7xl font-extrabold">
            {statsData.verified_humans}
          </div>
          <div className="text-2xl font-medium">Humans Verified</div>
        </div>
        <div className="flex flex-col items-center gap-3 border-x border-[#A6A6A6] text-[#292929] max-md:border-x-0 max-md:border-y max-md:py-4">
          <div className="text-7xl font-extrabold">
            {statsData.verified_providers}
          </div>
          <div className="text-2xl font-medium">Verified Providers</div>
        </div>
        <div className="flex flex-col items-center gap-3 text-[#292929] max-md:py-4">
          <div className="text-7xl font-extrabold">
            {statsData.total_checks}
          </div>
          <div className="text-2xl font-medium">Total Checks</div>
        </div>
      </div>
    </div>
  );
};

export default Status;
