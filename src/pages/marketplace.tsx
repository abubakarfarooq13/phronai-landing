import Head from "next/head";
import localFont from "next/font/local";
import { CHome, Ecosystem, NftMarketPlace } from "@/components";

const FormularFont = localFont({
  src: [
    {
      path: "../assets/fonts/Formular-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Formular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Formular-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Formular-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta
          name="description"
          content="By owning your NFTs, you decide. Keep them, trade them, sell them. Everything you want in the same place."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo_black.png" />
      </Head>
      <main className={FormularFont.className}>
        <NftMarketPlace />
      </main>
    </>
  );
}
