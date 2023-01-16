import "../styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "../layouts/Layout";
import { LazyMotion } from "framer-motion";
// import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
