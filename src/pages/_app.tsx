import { Provider as ReactWrapBalancerProvider } from "react-wrap-balancer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RootLayout } from "~/components/RootLayout";
import { NavigationProvider } from "~/Context/NavigationContext";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactWrapBalancerProvider>
      <NavigationProvider>
        <RootLayout className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </RootLayout>
      </NavigationProvider>
    </ReactWrapBalancerProvider>
  );
}
