import Document, { Html, Head, Main, NextScript } from "next/document";
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Making your contracts human compatible"
          />
          <meta property="og:title" content="nada.bot" />
          <meta
            property="og:description"
            content="Making sure your users are not a bot, built on NEAR"
          />
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta name="image" content="/preview.png" />
          <meta property="og:image" content="/preview.png" />
          <link rel="icon" href="/favicon.ico" sizes="32x32" />

          <meta charSet="utf-8"></meta>
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
