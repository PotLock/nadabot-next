import Head from "next/head";
import "./style.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

import React from "react";
export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (
    <>
      <Head>
        <title>nada.bot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics trackPageViews gaMeasurementId="G-KNW8YJS0Q5" />
    </>
  );
}
