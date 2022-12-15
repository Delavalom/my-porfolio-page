import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/layout/Navbar";
import { Layout } from "components/layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Luis Angel Arvelo">
      <Component {...pageProps} />
    </Layout>
  );
}
