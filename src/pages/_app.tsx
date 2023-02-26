import AppLayout from "@/components/AppLayout";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
);

export default appWithTranslation(App);
