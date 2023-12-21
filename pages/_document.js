import Document, { Html, Head, Main, NextScript } from "next/document";
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>nada.bot</title>
          <meta
            name="description"
            content="Making your contracts human compatible"
          />
          <meta property="og:title" content="nada.bot" />
          <meta
            property="og:description"
            content="Making sure your users are not bot, built on NEAR"
          />
          <meta
            property="og:image"
            content="https://ipfs.near.social/ipfs/bafkreianlsqm4fvjk57uzhodrtzwaqg7gbw2kvgq37sqs5cre343zcvdce"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n\n  ",
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="shortcut icon"
            href="/potlockemojiicon.png"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
