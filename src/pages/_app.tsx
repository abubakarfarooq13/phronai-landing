import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { PageLoadingIndicator } from "../components";
import "@/styles/globals.css";
import localFont from "next/font/local";

const ruberoidFont = localFont({
  src: [
    {
      path: "../assets/fonts/ruberoid/Ruberoid-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/ruberoid/Ruberoid-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/ruberoid/Ruberoid-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/ruberoid/Ruberoid-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ruberoid",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ruberoidFont.variable}`}>
      <ChakraProvider theme={theme}>
        <PageLoadingIndicator />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}
