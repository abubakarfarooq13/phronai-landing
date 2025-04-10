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
import Head from "next/head";

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
    {
      path: "../assets/fonts/Ruberoid/Ruberoid-ExtraBold.otf",
      weight: "800",
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
    <>
      <Head>
        {/* Basic SEO */}
        <title>AI-Powered for Builders. One Prompt for Everyone.</title>
        <meta
          name="description"
          content="Train AI models and earn from the network. Launch L1s, deploy smart contract,leverage AI Agents to manage your contract, and create AI-powered Oracles. All with&nbsp;just&nbsp;a&nbsp;promt."
        />
        <meta
          name="keywords"
          content="openPhron, Phron AI, AI Agents, smart contracts, dApps, blockchain, decentralized AI, AI Oracles"
        />
        <meta name="author" content="PhronAI" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://phron.ai/" />
        {/* Standard Favicons  */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Apple Touch Icon  */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Android Chrome Icons  */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://phron.ai/" />
        <meta
          property="og:title"
          content="AI-Powered for Builders. One Prompt for Everyone."
        />
        <meta
          property="og:description"
          content="Train AI models and earn from the network. Launch L1s, deploy smart contract,leverage AI Agents to manage your contract, and create AI-powered Oracles. All with&nbsp;just&nbsp;a&nbsp;promt."
        />
        <meta
          property="og:image"
          content="https://phron.ai/assets/cover.jpeg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://phron.ai/" />
        <meta
          name="twitter:title"
          content="AI-Powered for Builders. One Prompt for Everyone."
        />
        <meta
          name="twitter:description"
          content="Train AI models and earn from the network. Launch L1s, deploy smart contract,leverage AI Agents to manage your contract, and create AI-powered Oracles. All with&nbsp;just&nbsp;a&nbsp;promt."
        />
        <meta
          name="twitter:image"
          content="https://phron.ai/assets/cover.jpeg"
        />
      </Head>
      <div className={`${ruberoidFont.variable}`}>
        <ChakraProvider theme={theme}>
          <PageLoadingIndicator />
          <Web3ModalProvider initialState={initialState}>
            <Component {...pageProps} />
          </Web3ModalProvider>
        </ChakraProvider>
      </div>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  return {
    cookies: appContext.ctx.req?.headers.cookie,
  };
};
