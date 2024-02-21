import { useEffect } from "react";

const RedirectLinks = {
  "/twitter": "https://twitter.com/nadabots",
  "/linkedin": "https://www.linkedin.com/company/nada-bot/",
  "/bos":
    "https://near.social/mob.near/widget/ProfilePage?accountId=nadabot.near",
    "/integrate": "https://docs.nada.bot/guides/for-applications",
    "/verify": "https://app.nada.bot",
    "/submit": "https://app.nada.bot/add-stamp",
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
  "/backlog": "https://github.com/orgs/PotLock/projects/8/views/15",
  "/feedback": "https://github.com/PotLock/nadabot-app/issues/new/choose",
  "/changelog": "https://github.com/PotLock/core/releases",
  "/staging": "https://staging.nada.bot",
  "/testnet": "https://testnet.nada.bot",
  "/repo": "https://github.com/PotLock/nadabot-app",
  "/requests": "https://github.com/orgs/PotLock/projects/6/views/1",
  "/request-stamp": "https://github.com/PotLock/nadabot-stamps/issues/new?assignees=&labels=stamp-request&projects=&template=request-for-stamp.md&title=%5B%E2%9C%85+STAMP+REQUEST%5D",
  "/tutorials": "https://youtube.com/playlist?list=PLJxhkGinB9L98Gfw8684hBWKwSB9OYoi6&si=ZajNf_LjfJyzjgx0",
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
