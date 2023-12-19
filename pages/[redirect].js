import { useEffect } from "react";

const RedirectLinks = {
  "/twitter": "https://twitter.com/potlock_",
  "/app": "https://near.social/potlock.near/widget/Index",
  "/social": "https://potlock.near.social",
  "/telegram": "https://NEAReFi.org/telegram",
  "/gigs": "https://near.org/nearhorizon.near/widget/Index?tab=project&content=requests&accountId=potlock.near",
  "/figma": "https://www.figma.com/file/ckixqGfuRKZ63tTvdJzi6j/Potlock-(Copy)?type=design&node-id=0%3A1&mode=design&t=YrvRnKk89U1WrXfA-1",
  "/github": "https://github.com/PotLock",
  "/bos": "https://near.org/potlock.near/widget/potlock.home.main1",
  "/waitlist": "",
  "/miro": "https://miro.com/app/board/uXjVM3l0FPM=/",
  "/backlog": "https://github.com/orgs/PotLock/projects/1/views/2",
  "/deck": "https://pitch.com/public/1d98f5ba-7702-474c-857f-b4b24adb83cb",
  "/docs": "https://docs.potlock.io",
  "/pitch-video": "",
  "/uml": "https://lucid.app/lucidchart/7eedeea1-4b5e-40cd-95db-72b7a8eea297/edit?viewport_loc=-2727%2C188%2C2574%2C1518%2C0_0&invitationId=inv_29522f71-44f3-4716-8382-423f270e5f3e",
  "/kanban": "https://github.com/orgs/PotLock/projects/1/views/2",
  "/volunteer-call": "https://calendly.com/minorityprogrammers/potlock-onboarding",
  "/volunteer": "https://forms.gle/Eh27E7DVNFziREcx6",
  "/forum": "https://github.com/orgs/PotLock/discussions",
  "/roadmap": "https://www.figma.com/file/J4QXhEBq1fXwjhhHQk1zYN/PotLock-Roadmp?type=whiteboard&node-id=5%3A165&t=IxnF0J5TnK2WAx8w-1",
  "/democracy": "https://www.democracylab.org/projects/1349",
  "/linkedin": "https://www.linkedin.com/company/potlock",
  "/core": "https://github.com/PotLock/core",
  "/mp-dao": "https://docs.google.com/document/d/1LtwKtUaEWdqdjkebHf8-9LzwKislK9hv_vEeZ-dlaY0/edit?usp=sharing",
  "/mp-refi": "https://docs.google.com/document/d/14-NGyvyYaUkNChKFaNUvHyXDI88RgpOEC7-k0YNFb9o/edit?usp=sharing",
  "/persona": "https://docs.google.com/forms/d/e/1FAIpQLSeE0_N1fqA_M067InVb8vLWtlAYj-SMWTVgrSyR0E1zq32Nmw/viewform?usp=sf_link",
  "/register": "https://near.social/potlock.near/widget/Index?tab=createproject",
  "/feedback": "https://github.com/PotLock/bos-app/issues/new/choose",
  "/okr": "https://docs.google.com/spreadsheets/d/1-UkBIUN6qLfiMgqL68Rgm8nRnKUooia-rWi5i7aplgk/edit?usp=sharing",
  "/snapshot": "https://snapshot.org/#/potlock.eth",
  "/project-guidelines": "https://docs.google.com/document/d/1FPyE8wef92Eji_wpYol627Rud-0OgGkA8Zvp7wCcSoE/edit?usp=sharing",
  "/brand": "https://www.figma.com/file/ckixqGfuRKZ63tTvdJzi6j/Potlock?type=design&node-id=1088-1827&mode=design&t=7KtzlKKhtXmGIPPw-0",
  "/explore": "https://near.social/potlock.near/widget/Index",
  "/feed": "https://near.social/potlock.near/widget/Index?tab=feed",
  "/canva": "https://www.canva.com/design/DAF0QWKTXsE/yxFR-xhzsuv0pV1ggUICMw/edit?utm_content=DAF0QWKTXsE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  "/gitcoin": "https://explorer.gitcoin.co/#/round/424/0xd4cc0dd193c7dc1d665ae244ce12d7fab337a008/0xd4cc0dd193c7dc1d665ae244ce12d7fab337a008-148",
  "/dappradar": "https://dappradar.com/dapp/potlock",
  "/potluck": "https://banyan-collective.notion.site/PotLock-PotLucks-Guide-83e01585efd34b11b4ca52eca2995071?pvs=4",
  "/volunteer-book": "https://calendly.com/minorityprogrammers/potlock-onboarding",
  "/pitch": "https://docs.google.com/presentation/d/1MnD0SbNUOBsgHr3zPU20oBHg8XgnzEAas191yVfNxs0/edit?usp=sharing",
  "/sybil": "https://docs.google.com/document/d/1Q1ztqLjBixxZTh6PUNlGcogVyRb69WR1zD45fD1SX6s/edit?usp=sharing",
  "/learnnearclub": "https://learnnear.club/near-ecosystem/potlock/#",
  "/youtube": "https://www.youtube.com/@PotLock",
  "/tutorials": "https://youtube.com/playlist?list=PLJxhkGinB9L-7x-frtiWYPx9AaxSwA5nl&si=6mbZ2ZLdrzUlvha6",
  "/tutorial": "https://youtube.com/playlist?list=PLJxhkGinB9L-7x-frtiWYPx9AaxSwA5nl&si=6mbZ2ZLdrzUlvha6",
  "/sybil-contract": "https://github.com/PotLock/core/tree/sybil/contracts/sybil/src",
  "/legos": "https://miro.com/app/board/uXjVNDpOlJU=/?share_link_id=594332426234",
  "/legos-guide": "https://banyan-collective.notion.site/PotLock-Public-Goods-Legos-065c8e6af6ea47bf9ab960f1106c1293?pvs=4",



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
