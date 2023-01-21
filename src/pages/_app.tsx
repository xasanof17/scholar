import "../styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "../layouts/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </>
  );
}

export default MyApp;
