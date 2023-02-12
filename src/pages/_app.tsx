import { Provider } from "react-wrap-balancer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { NavigationProvider } from "@/Context/NavigationContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <NavigationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NavigationProvider>
    </Provider>
  );
}
