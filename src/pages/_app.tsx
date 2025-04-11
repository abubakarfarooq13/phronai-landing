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
// import { Metadata } from "next";

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

// export const metadata: Metadata = {
//   metadataBase: new URL("https://phronai.vercel.app/"), // base URL for generating absolute URLs
//   title: "AI-Powered for Builders. One Prompt for Everyone.",
//   description:
//     "Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt.",
//   keywords: [
//     "openPhron",
//     "PhronAI",
//     "AI Agents",
//     "smart contracts",
//     "dApps",
//     "blockchain",
//     "decentralized AI",
//     "AI Oracles",
//   ],
//   authors: [{ name: "PhronAI" }],
//   robots: {
//     index: true,
//     follow: true,
//   },
//   alternates: {
//     canonical: "https://phronai.vercel.app/",
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://phronai.vercel.app/",
//     siteName: "PhronAI",
//     title: "AI-Powered for Builders. One Prompt for Everyone.",
//     description:
//       "Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt.",
//     images: [
//       {
//         url: "https://phronai.vercel.app/assets/cover.png",
//         width: 1200,
//         height: 630,
//         alt: "PhronAI Cover",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@Phron_ai",
//     creator: "@Phron_ai",
//     title: "AI-Powered for Builders. One Prompt for Everyone.",
//     description:
//       "Train AI models and earn from the network. Launch L1s, deploy smart contracts, leverage AI Agents to manage your contracts, and create AI-powered Oracles — all with just a prompt.",
//     images: ["https://phronai.vercel.app/assets/cover.png"],
//   },
//   icons: {
//     icon: [
//       {
//         url: "https://phronai.vercel.app/favicon-32x32.png",
//         sizes: "32x32",
//         type: "image/png",
//       },
//       {
//         url: "https://phronai.vercel.app/favicon-16x16.png",
//         sizes: "16x16",
//         type: "image/png",
//       },
//     ],
//     apple: [
//       {
//         url: "https://phronai.vercel.app/apple-touch-icon.png",
//         sizes: "180x180",
//         type: "image/png",
//       },
//     ],
//   },
//   themeColor: "#000000",
// };

export default function App({ Component, pageProps, cookies }: MyAppProps) {
  const initialState = cookieToInitialState(config, cookies);

  return (
    <>
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
