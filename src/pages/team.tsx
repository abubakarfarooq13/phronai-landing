import React from "react";
import Head from "next/head";
import localFont from "next/font/local";
// import { CRoadMap, CTeam, Footer, Nav } from "@/components";
// import CTeam from "@/components/TeamLight/index";
import { Box } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { interFont } from "@/components/fonts";
import Team from '@/components/TeamLight'
import Navlight from '@/components/Shared/Nav/LightNav'
import FooterLight from '@/components/Shared/Footer/LightFooter'
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

export default function RoadMap() {
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
        <title>PhronAI Team</title>
        <meta name="description" content="Meet our PhronAI team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <Nav /> */}
      <Navlight/>

      <Box 
      mt={{md:'150px',lg:'120px'}}
       >
        <main id="phron-page"  style={interFont.style}>
          {/* <CTeam /> */}
          <Team/>
        </main>
      </Box>
<FooterLight/>
      {/* <Footer /> */}
    </>
  );
}
