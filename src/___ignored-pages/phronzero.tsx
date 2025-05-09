import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import localFont from "next/font/local";
import { Nav, Footer, CPhronZero } from "@/components";
import LightNav from "@/components/Shared/Nav/LightNav";
import LightFooter from "@/components/Shared/Footer/LightFooter";
import { Inter } from "next/font/google";
import { interFont } from "@/components/fonts";
import NewPhronZero from "@/components/NewPhronZero";

// const FormularFont = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Formular-Light.woff",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Formular.woff",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Formular-Medium.woff",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Formular-Bold.woff",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Formular-Black.woff",
//       weight: "900",
//       style: "normal",
//     },
//   ],
// });

export default function PhronZero() {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B3SKQRMJ1F"
        ></script>
        <script
          id="google-tags"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-B3SKQRMJ1F');
            `,
          }}
        ></script>
        <title>Phron AI PhronZero</title>
        <meta
          name="description"
          content="From static to dynamic. One step beyond."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <LightNav /> */}

      <Box bgColor="#000" color="#fff">
        <main id="phron-page" style={interFont.style}>
          {/* <CPhronZero /> */}
          <NewPhronZero />
        </main>
      </Box>

      {/* <Footer /> */}
    </>
  );
}
