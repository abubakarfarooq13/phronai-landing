import Head from "next/head";
import localFont from "next/font/local";
import { CPhron } from "@/components";
import { Box } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { interFont } from "@/components/fonts";

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
//   ],
// });

export default function Phron() {
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
        <title>Phron AI PHRON</title>
        <meta
          name="description"
          content="Phron AI introduces a new proprietary consensus layer alongside Machine Learning Algorithms that aims to push blockchain technology to a point of having no barriers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box pt="30px" bgColor="#000" color="#fff">
        <main id="phron-page" style={interFont.style}>
          <CPhron />
        </main>
      </Box>
    </>
  );
}
