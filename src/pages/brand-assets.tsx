import Head from "next/head";
import localFont from "next/font/local";
import { Box } from "@chakra-ui/react";
import Script from "next/script";
import NewPhronZero from "@/components/NewPhronZero";
import { Footer, Nav } from "@/components";
import CBrandAssets from "@/components/BrandAssets";

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B3SKQRMJ1F"
      ></Script>
      <Script
        id="google-tags"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
      
              gtag('config', 'G-B3SKQRMJ1F');
              `,
        }}
      ></Script>
      <Head>
        <title>Brand Assets | Phron AI</title>
        <meta name="description" content="Phron AI Brand Assets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Box
        // pt={{ base: "70px", "1350px": "80px" }}
        bgColor="#000"
        color="#fff"
        as="main"
        minH="100vh"
        className={FormularFont.className}
      >
        <CBrandAssets />
      </Box>
      <Footer />
    </>
  );
}
