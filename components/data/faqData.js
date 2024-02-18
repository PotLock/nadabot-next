export const faqData = [
  {
    id: "1",
    qa: "How do you determine who is a human?",
    an: "Their is a set human minimum score and points and rules for each check. When our contract is called it adds up current points for and an account and see if it past the human threshold. Weights, rules, and minium score may change as we detect different bot behaviors across the ecoystem.",
  },
  {
    id: "2",
    qa: "What if my submitted check isn’t showing? ",
    an: "Try refreshing the page. We are using NEAR API JS to fetch checks from on chain data",
  },
  {
    id: "3",
    qa: "Can I use your contract outside of NEAR?",
    an: "Currently nada.bot is a contract based aggregator on NEAR. We will be posting our proofs to idOS by Fractal to be used chain-agnostically through thier SDK",
  },
  {
    id: "4",
    qa: "Do I need gas to pay for my checks as a user?",
    an: "Yes after you confirm with 3rd party checks / sybil providers, we check the other contract and require users pay a small 0.01 N storage fee to add their check to the nada.bot contract",
  },
  {
    id: "5",
    qa: "How do I integrate nada.bot into my contracts?",
    an: "Check out our docs. All you need to do is check the v1..nadabot.near contract isHuman to use our human threshold score.",
  },
];
