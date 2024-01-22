import { useEffect } from "react";

const RedirectLinks = {
  "/twitter": "https://twitter.com/nadabots",
  "/linkedin": "https://www.linkedin.com/company/nada-bot/",
  "/bos":
    "https://near.social/mob.near/widget/ProfilePage?accountId=nadabot.near",
  "/telegram": "https://t.me/+eBl5J1sCHaU3ODVh",
  "/support": "https://t.me/+eBl5J1sCHaU3ODVh",
  "/potlock":
    "https://near.social/potlock.near/widget/Index?tab=project&projectId=nadabot.near",
  "/app": "https://app.nada.bot/",
  "/docs": "https://docs.nada.bot",
  "/contract": "https://github.com/PotLock/core/tree/main/contracts/sybil",
  "/near": "https://near.social/mob.near/widget/MyPage?accountId=nadabot.near",
  "/bot": "https://docs.nada.bot/",
  "/docs-repo": "https://github.com/nadabots/nadabot-docs",
  "/backlog": "https://github.com/orgs/PotLock/projects/5/views/2",
  "feedback": "https://github.com/PotLock/nadabot-app/issues/new/choose",
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
