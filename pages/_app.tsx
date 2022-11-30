import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/layout/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
