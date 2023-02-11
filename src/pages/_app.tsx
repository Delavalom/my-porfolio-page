import { Provider } from "react-wrap-balancer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
