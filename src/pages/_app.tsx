import { Provider as ReactWrapBalancerProvider } from "react-wrap-balancer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RootLayout } from "~/components/RootLayout";
import { NavigationProvider } from "~/Context/NavigationContext";
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactWrapBalancerProvider>
      <NavigationProvider>
        <RootLayout className={`${manrope.variable} font-sans`}>
          <Component {...pageProps} />
        </RootLayout>
      </NavigationProvider>
    </ReactWrapBalancerProvider>
  );
}
