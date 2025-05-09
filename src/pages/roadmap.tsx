import React from "react";
import Head from "next/head";
import localFont from "next/font/local";
import { CRoadMap, Footer, Nav } from "@/components";
import RoadMapLight from "../components/RoadMapLight";
import { Box } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { interFont } from "@/components/fonts";
import WhitePapers from "../components/LightHome/WhitePapers";
import TrustedBySection from "../components/LightHome/TrustedBySection";
import OurTeam from "../components/RoadMapLight/OurTeam";
import FooterLighter from "../components/Shared/Footer/LightFooter";
import LightNav from "../components/Shared/Nav/LightNav";
import Background from "../components/RoadMapLight/RoadMapBg/Background";
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
        <title>Phron AI Roadmap</title>
        <meta name="description" content="Phron AI Road Map and Vision." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <LightNav />
      <Box>
        <main id="roadmap-page" style={interFont.style}>
          <Background />
          <RoadMapLight />
        </main>
      </Box>
      <Box color={"#000"} bg={"#fff"}>
        <FooterLighter />
      </Box>
    </>
  );
}
