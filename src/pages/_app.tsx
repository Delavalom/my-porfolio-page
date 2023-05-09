import { Provider as ReactWrapBalancerProvider } from "react-wrap-balancer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RootLayout } from "~/components/RootLayout";
import { NavigationProvider } from "~/Context/NavigationContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactWrapBalancerProvider>
      <NavigationProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </NavigationProvider>
    </ReactWrapBalancerProvider>
  );
}
