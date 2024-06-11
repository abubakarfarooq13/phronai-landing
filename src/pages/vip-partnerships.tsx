import Head from "next/head";
import { Box } from "@chakra-ui/react";
import VIPPartners from "@/components/VIPPartners";
import { Inter } from "next/font/google";
import { interFont } from "@/components/fonts";

export default function VIPPartnersPage() {
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
        <title>Our VIP PartnerShips</title>
        <meta name="description" content="Phron AI VIP partnerships." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        // pt={{ base: "70px", "1350px": "160px" }}
        bgColor="#03020b"
        color="#fff"
      >
        <main id="vip-partners-page" style={interFont.style}>
          <VIPPartners />
        </main>
      </Box>
    </>
  );
}
