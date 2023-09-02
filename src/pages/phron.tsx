import Head from "next/head";
import localFont from "next/font/local";
import { CPhron } from "@/components";

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

export default function Phron() {
  return (
    <>
      <Head>
        <title>Phronesis PHRON</title>
        <meta
          name="description"
          content="Fastest EVM Layer 1 Blockchain in the World. The main fuel for Phron. Buy games, transfer In-game items, make a simple transaction, and so on."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo_black.png" />
      </Head>
      <main className={FormularFont.className}>
        <CPhron />
      </main>
    </>
  );
}
