import { useEffect } from "react";

const RedirectLinks = {
  "/twitter": "https://twitter.com/nadabots",
  "/bos":
    "https://near.social/mob.near/widget/ProfilePage?accountId=nadabot.near",
  "/telegram": "https://t.me/+eBl5J1sCHaU3ODVh",
  "/support": "https://t.me/+eBl5J1sCHaU3ODVh",
  "/potlock":
    "https://near.social/potlock.near/widget/Index?tab=project&projectId=nadabot.near",
  "/app": "https://near.social/potlock.near/widget/Index",
  "/docs": "https://docs.potlock.io/contracts/sybil-contract-wip",
  "/contract": "https://github.com/PotLock/core/tree/main/contracts/sybil",
};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }, []);

  return <></>;
};
export default Redirect;
