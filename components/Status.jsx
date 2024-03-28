import { useState, useEffect } from "react";

const Status = () => {
  const [statsData, setStatsData] = useState({
    verified_providers: "-",
    total_checks: "-",
    verified_humans: "-",
  });
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch("/api/statusData", {
          next: { revalidate: 3600 },
        });
        const data = await res.json();
        console.log(data);
        if (data) {
          setStatsData(data);
        }
      } catch (err) {
        console.log(err);
      }
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
