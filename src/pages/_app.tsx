import type { AppContext, AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { PageLoadingIndicator } from "../components";
import "@/styles/globals.css";
import localFont from "next/font/local";
// import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import cookies from "next-cookies";

const ruberoidFont = localFont({
  src: [
    {
      path: "../assets/fonts/Ruberoid/Ruberoid-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Ruberoid/Ruberoid-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Ruberoid/Ruberoid-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Ruberoid/Ruberoid-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ruberoid",
});

interface MyAppProps extends AppProps {
  cookies: any;
}

export default function App({ Component, pageProps, cookies }: MyAppProps) {
  const initialState = cookieToInitialState(config, cookies);

  return (
    <div className={`${ruberoidFont.variable}`}>
      <ChakraProvider theme={theme}>
        <PageLoadingIndicator />
        <Web3ModalProvider initialState={initialState}>
          <Component {...pageProps} />
        </Web3ModalProvider>
      </ChakraProvider>
    </div>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  return {
    cookies: appContext.ctx.req?.headers.cookie,
  };
};
