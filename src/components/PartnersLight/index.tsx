import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Image as CImage,
} from "@chakra-ui/react";
import Image from "next/image";
import { Footer, Nav } from "..";
import LightNav from "../Shared/Nav/LightNav";
import LightFooter from "../Shared/Footer/LightFooter";
import PartnerCard from "./PartnerCard";
import Whitepapers from "../LightHome/WhitePapers/";
import Trustedby from "../LightHome/TrustedBySection/";
import OurTeam from "../RoadMapLight/OurTeam/";

// const partners = [
//   {
//     id: 1,
//     name: "Dexe",
//     imageSrc: "/assets/partners/dexe-logo.png",
//   },
//   {
//     id: 2,
//     name: "Solid Proof",
//     imageSrc: "/assets/partners/solid-proof-logo.png",
//   },
//   {
//     id: 3,
//     name: "Volu Mint",
//     imageSrc: "/assets/partners/volu-mint-logo.png",
//   },
//   {
//     id: 4,
//     name: "Agnus AI Blockchain",
//     imageSrc: "/assets/partners/agnus-ai-blockchain-logo.png",
//   },
//   {
//     id: 5,
//     name: "Paal AI",
//     imageSrc: "/assets/partners/paal-ai-logo.png",
//   },
//   {
//     id: 6,
//     name: "Social Data Analytics",
//     imageSrc: "/assets/partners/social-data-analytics-logo.png",
//   },
//   {
//     id: 7,
//     name: "Open Gate",
//     imageSrc: "/assets/partners/opengate-logo.png",
//   },
//   {
//     id: 8,
//     name: "filcriptions",
//     imageSrc: "/assets/partners/filcriptions-logo.png",
//   },
//   {
//     id: 10,
//     name: "hambit",
//     imageSrc: "/assets/partners/hambit-logo.png",
//   },
//   {
//     id: 11,
//     name: "Metakraft AI",
//     imageSrc: "/assets/partners/metakraft-ai-logo.png",
//   },
//   {
//     id: 12,
//     name: "$notif AI",
//     imageSrc: "/assets/partners/$notif-ai-logo.png",
//   },
//   {
//     id: 13,
//     name: "Satochain",
//     imageSrc: "/assets/partners/sato-chain-logo.png",
//   },
//   {
//     id: 14,
//     name: "WAY",
//     imageSrc: "/assets/partners/way-logo.png",
//   },
//   {
//     id: 15,
//     name: "Send Token",
//     imageSrc: "/assets/partners/send-tokens-logo.png",
//   },
//   {
//     id: 15,
//     name: "zkgrok",
//     imageSrc: "/assets/partners/zkgrok-logo.png",
//   },
//   {
//     id: 16,
//     name: "orbler",
//     imageSrc: "/assets/partners/orbler-logo.png",
//   },
//   {
//     id: 16,
//     name: "GPTPlus",
//     imageSrc: "/assets/partners/gptplus-logo.png",
//   },
//   {
//     id: 17,
//     name: "openname",
//     imageSrc: "/assets/partners/openname-logo.png",
//   },
//   {
//     id: 18,
//     name: "gemx crypto",
//     imageSrc: "/assets/partners/gemx-crypto-logo.png",
//   },
//   {
//     id: 19,
//     name: "x-alpha",
//     imageSrc: "/assets/partners/x-alpha-logo.png",
//   },
// ];

const VIPPartners = [
  {
    id: 1,
    name: "Dexe Protocol",
    imageSrc: "/assets/partnerslight/dexe.png",
    description:
      "An infrastructure for creating and governing DAOs. 50+ smart-contracts for your web-3 product.",
    twitterUrl: "https://twitter.com/DexeNetwork",
    websiteUrl: "https://www.dexe.network/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "8px 6px 8px 6px",
    },
  },
  {
    id: 2,
    name: "Hacken",
    imageSrc: "/assets/partnerslight/hacken-logo.png",
    description:
      "Web3 Security Auditor • We make Web3 a safer place by protecting projects from getting hacked.",
    twitterUrl: "https://x.com/hackenclub",
    websiteUrl: "https://hacken.io/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "8px 10px 8px 10px",
    },
  },
  {
    id: 3,
    name: "Kredly",
    imageSrc: "/assets/partnerslight/kredly-logo.png",
    description:
      "AI-powered adjustments for rock-solid security. Dynamic fees, rewards & insurance keep the platform smooth & protected!",
    twitterUrl: "https://x.com/kredlyAI",
    websiteUrl: "https://kredly.ai/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "13px 6px 13px 6px",
    },
  },
];

const partners = [
  // {
  //   id: 1,
  //   name: "Dexe Protocol",
  //   imageSrc: "/assets/partners/dexe.png",
  //   description:
  //     "An infrastructure for creating and governing DAOs. 50+ smart-contracts for your web-3 product.",
  //   twitterUrl: "https://twitter.com/DexeNetwork",
  //   websiteUrl: "https://www.dexe.network/",
  // },
  {
    id: 2,
    name: "Solid Proof",
    imageSrc: "/assets/partnerslight/solid-proof.png",
    description:
      "Smart Contract Audits · KYC Services · Development · Consulting",

    twitterUrl: "https://twitter.com/SolidProof_io",
    websiteUrl: "https://solidproof.io/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 10px",
    },
  },
  {
    id: 3,
    name: "Volu Mint",
    imageSrc: "/assets/partnerslight/volu-mint.png",
    description:
      "Empowering Crypto Projects with AI Automated CEX/DEX decentralised Market Solutions",
    twitterUrl: "https://twitter.com/VoluMint",
    websiteUrl: "https://volumint.io/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "15px 8px",
    },
  },
  {
    id: 4,
    name: "Agnus AI Blockchain",
    imageSrc: "/assets/partners/agnus-ai-blockchain.png",
    description:
      "Layer 1 AI-Driven Blockchain. Experience unparalleled trust, high speed and security . EVM Compatible (PoA) + ( PBFT ) Consensus Mechanism.",
    twitterUrl: "https://twitter.com/AgnusAIChain",
    websiteUrl: "https://www.agnuschain.ai/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 5,
    name: "Paal AI",
    imageSrc: "/assets/partners/paal-ai.png",
    description:
      "Powerful AI ecosystem built using Custom Data Feed and LLMs. Personalize your AI & share across all web platforms.",
    twitterUrl: "https://twitter.com/PaalMind",
    websiteUrl: "https://www.paal.ai/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 6,
    name: "Social Data Analytics",
    imageSrc: "/assets/partners/social-data-analytics.png",
    description:
      "Panoptes, Nemesis, Themis, Prometheus, and Social Data Analytics unite for a holistic, swift, wise, and fair crypto solution.",
    twitterUrl: "https://twitter.com/SDataAnalytics",
    websiteUrl: "https://socialdatanalytics.com/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 7,
    name: "Open Gate",
    imageSrc: "/assets/partners/opengate.png",
    description:
      "Unlocking the Gateway to Web3: Your Portal to Decentralized Possibilities and Boundless Connectivity.",
    twitterUrl: "https://twitter.com/OpenGateLab",
    websiteUrl: "https://fil.opengatenft.com/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 8,
    name: "filscriptions",
    imageSrc: "/assets/partners/filscriptions.png",
    description:
      "The First Inscription Aggregation Trading Platform on #Filecoin",
    twitterUrl: "https://twitter.com/filscriptions",
    websiteUrl: "https://www.filscriptions.market/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 10,
    name: "hambit",
    imageSrc: "/assets/partners/hambit.png",
    description:
      "Your on-chain PayPal, HamBit effortlessly solves all your payment needs!",
    twitterUrl: "https://twitter.com/HamBit_Official",
    websiteUrl: "https://www.hambit.io/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 11,
    name: "Metakraft AI",
    imageSrc: "/assets/partners/metakraft-ai.png",
    description: "Generative Tools & Platform for Creative Professionals.",
    twitterUrl: "https://twitter.com/TheMetakraft",
    websiteUrl: "https://www.metakraft.ai/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 12,
    name: "$notif AI",
    imageSrc: "/assets/partners/$notif-ai.png",
    description: "DeFi Notifications Made Simple.",
    twitterUrl: "https://twitter.com/NotifaiToken",
    websiteUrl: "https://notifai.trade/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 13,
    name: "Satochain",
    imageSrc: "/assets/partners/sato-chain.png",
    description: "The first Optimistic Rollup for Bitcoin Layer2",
    twitterUrl: "https://twitter.com/SatochainL2",
    websiteUrl: "https://www.satochain.io/",
    logoWidth: 30,
    logoHeight: 30,
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 14,
    name: "Way Network",
    imageSrc: "/assets/partners/way.png",
    description: "Zero-Knowledge Omnichain Interoperation Protocol.",
    twitterUrl: "https://twitter.com/WayNetwork_Labs",
    websiteUrl: "https://way.network/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 15,
    name: "Send Token",
    imageSrc: "/assets/partners/send-tokens.png",
    description: "Crypto made easy. Send & receive with usernames (.send).",
    twitterUrl: "https://twitter.com/sendtokens",
    websiteUrl: "https://www.sendtokens.xyz/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 15,
    name: "zkgrok",
    imageSrc: "/assets/partners/zkgrok.png",
    description: "$ZKGROK is the hottest AI meme on zkSync in 2024",
    twitterUrl: "https://twitter.com/zkgrok",
    websiteUrl: "https://www.zkgrok.meme/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 16,
    name: "orbler",
    imageSrc: "/assets/partners/orbler.png",
    description:
      "Empowering communities through innovation: Unveiling our cosmic revamp! 🚀✨ 'From Community, For Community'",
    twitterUrl: "https://twitter.com/Orbler1",
    websiteUrl: "https://orbler.io/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 16,
    name: "GPTPlus",
    imageSrc: "/assets/partners/gptplus.png",
    description:
      "Embark on a Transformative Journey, Turning Visionary Ideas into Intelligent, Blockchain-Backed Solutions. Powered By $GPTPlus Token",
    twitterUrl: "https://twitter.com/GPTPlusAI",
    websiteUrl: "https://gpt-plus.io/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 17,
    name: "openname",
    imageSrc: "/assets/partners/openname.png",
    description:
      "Omnichain Name Service for 1 Billion Users. Powered by LayerZero_Labs.",
    twitterUrl: "https://twitter.com/OpenNameProject",
    websiteUrl: "https://open.name/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 18,
    name: "gemx crypto",
    imageSrc: "/assets/partners/gemx-crypto.png",
    description:
      "GemX is a Web3 platform designed to built for mass adoption, providing timely news updates and insights into the latest trends in the crypto world",
    twitterUrl: "https://twitter.com/gemx_crypto",
    websiteUrl: "https://gemx.io/",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 19,
    name: "x-alpha",
    imageSrc: "/assets/partners/x-alpha.png",
    description:
      "Take Smarter Trades With X-ALPHA.AI | Real-time Crypto Analytics On Your Twitter Feed | Powered By $XALPHA",
    websiteUrl: "https://x-alpha.ai/x-alpha",
    twitterUrl: "https://twitter.com/XAlphaAI_Team",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 20,
    name: "VPS AI",
    imageSrc: "/assets/partners/vpsai-logo.png",
    description:
      "$SKYH - Tokenizing Real World Assets. Invest in diverse tangible assets on the Blockchain. Powered by Solana. Join us",
    websiteUrl: "https://vpsai.io/",
    twitterUrl: "https://x.com/VPS_AI",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 21,
    name: "Sky Hause",
    imageSrc: "/assets/partners/sky-hause-logo.jpg",
    description:
      "$SKYH - Tokenizing Real World Assets. Invest in diverse tangible assets on the Blockchain. Powered by Solana. Join us",
    websiteUrl: "https://skyhause.xyz/",
    twitterUrl: "https://x.com/hause_ly",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 22,
    name: "BUNNY | Ukraine",
    imageSrc: "/assets/partners/bunny-ukraine-logo.png",
    description:
      "$SKYH - Hello, I'm Bunny! I believe that football will bring strong connections and relieve the stress of war.",
    websiteUrl: "https://bunnychz.com/",
    twitterUrl: "https://x.com/BunnyChiliz",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 23,
    name: "ZERO Labs",
    imageSrc: "/assets/partners/zero-labs-logo.jpg",
    description:
      "Unlocking real-world value for DeFi through zk-powered omnichain identity, solvency aggregation and attestation. Powered by @hyperlane",
    websiteUrl: "https://0xzero.org/",
    twitterUrl: "https://x.com/0xZeroOrg",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 24,
    name: "XeroAI",
    imageSrc: "/assets/partners/xero-ai-logo.jpg",
    description:
      "A New Era in Text to Video and Voice to Video using new #ARBP ML model.",
    websiteUrl: "https://www.xeroai.io/",
    twitterUrl: "https://x.com/xeroai_erc",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 25,
    name: "BuddyAI",
    imageSrc: "/assets/partners/buddy-ai-logo.jpg",
    description:
      "Introducing Buddy AI: An Evolving AI-driven Telegram bot designed to moderate communities, foster active engagement, provide real-time blockchain data.",
    websiteUrl: "https://buddyai.services/",
    twitterUrl: "https://x.com/BuddyAIERC",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 26,
    name: "XEI AI",
    imageSrc: "/assets/partners/xei-ai-logo.jpg",
    description:
      "Introducing Buddy AI: An Evolving AI-driven Telegram bot designed to moderate communities, foster active engagement, provide real-time blockchain data.",
    websiteUrl: "https://xei.ai/",
    twitterUrl: "https://x.com/xei_official",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 27,
    name: "Bitgert - $BRISE",
    imageSrc: "/assets/partners/bitgert-logo.png",
    description:
      "Bitgert is a rapidly expanding crypto project that boasts a gas fee-free  blockchain, CEX and a lot more!.",
    websiteUrl: "http://www.bitgert.com/",
    twitterUrl: "https://x.com/bitgertbrise",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 28,
    name: "Voice AI",
    imageSrc: "/assets/partners/voice-ai.jpg",
    description:
      "Voice AI, an Ethereum-based token, redefines digital interaction with voice assistants, AMA sessions, voice cloning, music studio, and streamlined crypto swap.",
    websiteUrl: "https://voiceai.live/",
    twitterUrl: "https://x.com/VoiceAIERC",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 29,
    name: "XallyAI",
    imageSrc: "/assets/partners/xally-logo.jpg",
    description:
      "Xally ecosystem simplifies AI application development by providing cutting-edge AI models and pre-built modules, making your ideas a reality.",
    websiteUrl: "https://xally.ai/",
    twitterUrl: "https://x.com/xallyai",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 30,
    name: "SuperString - Decentralized AI",
    imageSrc: "/assets/partners/superstring-logo.jpg",
    description:
      "Decentralized computing power eliminates uncertainty in the world",
    websiteUrl: "https://superstring.app/",
    twitterUrl: "https://x.com/superstring_bot",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 31,
    name: "DSCLAB",
    imageSrc: "/assets/partners/dsc-logo.jpg",
    description:
      "Motivate users'GPU/CPU computing power and match AI computing power application needs.",
    websiteUrl: "https://dsclab.io/",
    twitterUrl: "https://x.com/dsc_lab",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 32,
    name: "Collably Network",
    imageSrc: "/assets/partners/collably-network-logo.png",
    description:
      "🤝 Collably Network: Connecting Projects with Perfect Partners. Your bridge to successful collaborations. 🚀",
    websiteUrl: "https://collably.network/",
    twitterUrl: "https://x.com/CollablyNetwork",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 33,
    name: "Agent Layer",
    imageSrc: "/assets/partners/agent-layer-logo.png",
    description:
      "AgentLayer - A Decentralized Autonomous AI Agent Blockchain and Network",
    websiteUrl: "https://agentlayer.xyz/",
    twitterUrl: "https://x.com/Agent_Layer",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
  {
    id: 33,
    name: "Haya Finance",
    imageSrc: "/assets/partners/haya-logo.jpg",
    description:
      "Haya utilizes #DeFi and #ZK technologies to provide safe, on-chain #ETF for long-term investments tailored to ordinary investors and digital nomads.",
    websiteUrl: "https://haya.finance/",
    twitterUrl: "https://x.com/haya_finance",
    style: {
      background: "#f0f2ff",
      borderRadius: "7px",
      height: "56px",
      width: "55px",
      padding: "10px 8px",
    },
  },
];

const Fade = require("react-reveal/Fade");

export default function CPartners() {
  return (
    <>
      <Box
        // backgroundImage="/assets/new-background.png"
        // bgPos="center"
        // bgSize="cover"
        // bg={"blue.50"}
        bgGradient={[
          "linear(to-tr, #d5dbfc, #d5dbfc)",
          "linear(to-t, #d5dbfc, #d5dbfc)",
          "linear(to-b, #eff1fe, #eff1fe)",
        ]}
        color={"#000"}
        overflowX={"hidden"}
      >
        {/* <Nav /> */}
        <LightNav />
        <Box
          width={"100%"}
          position={"absolute"}
          mt={{ base: "0px", lg: "85px" }}
        >
          <CImage
            width={"100%"}
            height={{ base: "50vh", md: "70vh", lg: "100%" }}
            bgSize={"cover"}
            bgPos={"center"}
            src={"/assets/partnerslight/partnersbg.png"}
            alt="BG"
          />
        </Box>
        <Container
          maxW="1260px"
          pt={{ base: "40px", sm: "180px" }}
          position="relative"
          pb="96px"
        >
          <Fade bottom>
            <Flex
              // bgGradient={"linear(to-r,#d5dbfc,#f2e8fd,#d5dbfc)"}
              height={{ base: "full", lg: "70vh" }}
              width={"full"}
            >
              <Box
                width={"full"}
                display={"flex"}
                color={"#000"}
                // flexDir={"column"}
                // justifyContent={"center"}
                // alignItems={"start"}
              >
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                  // bgGradient={"linear(to-r,#d5dbfc,#f2e8fd,#d5dbfc)"}
                  style={{ zIndex: "1" }}
                >
                  <Text
                    as="h1"
                    fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
                    fontWeight={500}
                    letterSpacing="1px"
                  >
                    OurVIP
                  </Text>
                  <Text
                    as="h1"
                    fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                    fontWeight={500}
                    letterSpacing="1px"
                  >
                    PartnerShips
                  </Text>
                </Box>
                <CImage
                  mt={{
                    base: "10px",
                    md: "80px",
                    lg: "30px",
                    // // xl: "100px",
                    // "2xl": "0px",
                    // "3xl": "100px",
                  }}
                  ml={{
                    base: "-180px",
                    md: "-150px",
                    lg: "-30px",
                    "3xl": "-60px",
                  }}
                  style={{
                    zIndex: "",
                  }}
                  width={{ md: "full", lg: "800px", "3xl": "900px" }}
                  height={{
                    base: "80%",
                    md: "65%",
                    lg: "80%",
                    // xl: "60%",
                    // "3xl": "60%",
                  }}
                  src={"/assets/partnerslight/partners.png"}
                  alt="PhronAI"
                />
              </Box>
              {/* <Box pos={"relative"}>
               
              </Box> */}
            </Flex>
          </Fade>

          <Box position="relative" maxW="1290px" mx="auto">
            {/* <Wrap justify="center" spacing="10">
            {partners.map((logo) => (
              <WrapItem
                key={logo.id}
                transition="all .3s"
                _hover={{
                  transform: "translateY(-10px)",
                }}
              >
                <Fade bottom delay={logo.id * 50}>
                  <Image
                    src={logo.imageSrc}
                    alt={logo.name + " logo"}
                    width={130}
                    height={150}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Fade>
              </WrapItem>
            ))}
          </Wrap> */}

            <Grid
              gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap="5"
            >
              {VIPPartners.map((partner, i) => (
                <GridItem key={partner.id}>
                  {/* <Fade bottom delay={i * 50}> */}
                  <PartnerCard
                    description={partner.description}
                    logoUrl={partner.imageSrc}
                    name={partner.name}
                    twitterUrl={partner.twitterUrl}
                    websiteUrl={partner.websiteUrl}
                    style={partner.style}
                  />
                  {/* </Fade> */}
                </GridItem>
              ))}
            </Grid>

            <Text
              // position="absolute"
              // right="0"
              // bottom="100px"
              fontSize="22px"
              color="#464545"
              // textAlign="center"
              mt="20"
            >
              ...and much more coming soon
            </Text>
          </Box>
        </Container>

        <Container maxW="1260px" position="relative" pb="96px">
          <Fade bottom>
            <Text
              as="h1"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight={500}
              // textAlign="center"
              letterSpacing="1px"
              mb="16"
              color={"#000"}
            >
              Other PartnerShips
            </Text>
          </Fade>

          <Box position="relative" maxW="1290px" mx="auto">
            {/* <Wrap justify="center" spacing="10">
            {partners.map((logo) => (
              <WrapItem
                key={logo.id}
                transition="all .3s"
                _hover={{
                  transform: "translateY(-10px)",
                }}
              >
                <Fade bottom delay={logo.id * 50}>
                  <Image
                    src={logo.imageSrc}
                    alt={logo.name + " logo"}
                    width={130}
                    height={150}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Fade>
              </WrapItem>
            ))}
          </Wrap> */}

            <Grid
              gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap="5"
            >
              {partners.map((partner, i) => (
                <GridItem key={partner.id}>
                  {/* <Fade bottom delay={i * 50}> */}
                  <PartnerCard
                    description={partner.description}
                    logoUrl={partner.imageSrc}
                    name={partner.name}
                    twitterUrl={partner.twitterUrl}
                    websiteUrl={partner.websiteUrl}
                    logoHeight={partner.logoHeight}
                    logoWidth={partner.logoWidth}
                    style={partner.style}
                  />
                  {/* </Fade> */}
                </GridItem>
              ))}
            </Grid>

            <Text
              // position="absolute"
              // right="0"
              // bottom="100px"
              fontSize="22px"
              color="#464545"
              // textAlign="center"
              mt="20"
            >
              ...and much more coming soon
            </Text>
          </Box>
        </Container>
        {/* <Whitepapers />
        <Trustedby />
        <OurTeam /> */}
        <LightFooter />
        {/* <Footer /> */}
      </Box>{" "}
    </>
  );
}
