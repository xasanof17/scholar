import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
// import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      {/* <Provider store={store}> */}
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      {/* </Provider> */}
    </>
  );
}

export default MyApp;
