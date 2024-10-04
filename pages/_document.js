import Document, { Html, Head, Main, NextScript } from "next/document";
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add a title tag */}
          <title>Nada Bot - Making Contracts Human Compatible on NEAR</title>

          {/* Update and expand meta description */}
          <meta
            name="description"
            content="Nada Bot: A protocol for configuring identity systems, making your contracts human compatible. Built on NEAR blockchain for enhanced security and user verification."
          />

          {/* Add more relevant meta tags */}
          <meta name="keywords" content="Nada Bot, NEAR blockchain, identity systems, smart contracts, user verification, idOS, Reclaim Protocol, NEAR Protocol, Gitcoin Passport, Farcaster, Lens, Not A Bot, nadabot, Potlock, Potluck Labs, Cheddar Farm, Anti-bot, KYC Tooling, AML Tools, Airdrop Protection" />
          <meta name="author" content="POTLOCK" />

          {/* Update Open Graph tags */}
          <meta property="og:title" content="Nada Bot - Identity Systems on NEAR" />
          <meta
            property="og:description"
            content="Nada Bot: Ensuring your users are not bots. Configure secure identity systems built on NEAR blockchain."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nada.bot" />

          {/* Update Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Nada Bot - Identity Systems on NEAR" />
          <meta name="twitter:description" content="Secure identity systems and user verification built on NEAR blockchain." />
          <meta name="twitter:image" content="https://nada.bot/preview.png" />

          {/* Update image URLs to be absolute */}
          <meta name="image" content="https://nada.bot/preview.png" />
          <meta property="og:image" content="https://nada.bot/preview.png" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta charSet="utf-8"></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oi&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.cdnfonts.com/css/mona-sans"
            rel="stylesheet"
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                "</noscript><!--This is the head section-->\n<!-- <style> ... </style> --><noscript>",
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<!-- Your body code here -->\n<!-- <script type=\"text/javascript\"> ... </script> --> \n    <script data-section-id='navbar' src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>",
            }}
          ></div>
        </body>
      </Html>
    );
  }
}
export default CustomDocument;
