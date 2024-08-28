import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Image as CImage,
  Stack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { Footer, Nav } from "..";
import LightNav from "../Shared/Nav/LightNav";
import LightFooter from "../Shared/Footer/LightFooter";
import PartnerCard from "./PartnerCard";
import Whitepapers from "../LightHome/WhitePapers/";
import Trustedby from "../LightHome/TrustedBySection/";
import OurTeam from "../RoadMapLight/OurTeam/";
import CategoryPartners from "./CategoryPartners";

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

const nft = [
  {
    id: 7,
    name: "Open Gate",
    imageSrc: "/assets/partners/opengate.png",
    description:
      "Unlocking the Gateway to Web3: Your Portal to Decentralized Possibilities and Boundless Connectivity.",
    twitterUrl: "https://twitter.com/OpenGateLab",
    websiteUrl: "https://fil.opengatenft.com/",
    category: "NFT",
    width: 70,
    height: 70,
  },
  {
    id: 39,
    name: "Just Read It",
    imageSrc: "/assets/partners/jri.jpg",
    description:
      "JUST READ IT aims to build a revolutionary blockchain-based crowdfunding platform where JRI Contract holders can apply for funding for their business ideas.",
    // websiteUrl: "https://www.chroniclesofwarcraft.com/",
    twitterUrl: "https://x.com/jri_justreadit",
    style: {
      borderRadius: "100%",
    },
    category: "NFT",
  },
];

const rwa = [
  {
    id: 21,
    name: "Sky Hause",
    imageSrc: "/assets/partners/sky-hause-logo.jpg",
    description:
      "Revolutionizing cloud computing for #AI and #Blockchain with GPU-enabled VPS. A new era of decentralized  infrastructure, made accessible through $VPS.",
    websiteUrl: "https://skyhause.xyz/",
    twitterUrl: "https://x.com/hause_ly",
    category: "RWA",
  },
];

const dao = [
  {
    id: 30,
    name: "SuperString AI",
    imageSrc: "/assets/partners/superstring-logo.jpg",
    description:
      "Decentralized computing power eliminates uncertainty in the world",
    websiteUrl: "https://superstring.app/",
    twitterUrl: "https://x.com/superstring_bot",
    style: {
      borderRadius: "100%",
    },
    category: "DAO",
  },
  {
    id: 31,
    name: "DSCLAB",
    imageSrc: "/assets/partners/ringai-logo.jpg",
    description:
      "An advanced AI platform that revolutionizes customer support & sales through autonomous, phone-based agents. Powered by $RING token.",
    websiteUrl: "https://www.tryring.ai/",
    twitterUrl: "https://x.com/dsc_lab",
    style: {
      borderRadius: "100%",
    },
    category: "DAO",
  },
  {
    id: 32,
    name: "DSCLAB",
    imageSrc: "/assets/partners/dsc-logo.jpg",
    description:
      "An advanced AI platform that revolutionizes customer support & sales through autonomous, phone-based agents. Powered by $RING token.",
    websiteUrl: "https://dsclab.io/",
    twitterUrl: "https://x.com/TryRingAI",
    style: {
      borderRadius: "100%",
    },
    category: "DAO",
  },
];

const blockchainSecurity = [
  {
    id: 2,
    name: "Solid Proof",
    imageSrc: "/assets/partners/solid-proof-black.png",
    description:
      "Smart Contract Audits · KYC Services · Development · Consulting",

    twitterUrl: "https://twitter.com/SolidProof_io",
    websiteUrl: "https://solidproof.io/",
    category: "Blockchain Security",
  },
  {
    id: 2,
    name: "Hacken",
    imageSrc: "/assets/partners/hacken-logo.png",
    description:
      "Web3 Security Auditor • We make Web3 a safer place by protecting projects from getting hacked.",
    twitterUrl: "https://x.com/hackenclub",
    websiteUrl: "https://hacken.io/",
    category: "Blockchain Security",
    logoWidth: 50,
    logoHeight: 50,
  },
];

const cloudComputing = [
  {
    id: 20,
    name: "VPS AI",
    imageSrc: "/assets/partners/vpsai-logo.png",
    description:
      "Revolutionizing cloud computing for #AI and #Blockchain with GPU-enabled VPS. A new era of decentralized  infrastructure, made accessible through $VPS.",
    websiteUrl: "https://vpsai.io/",
    twitterUrl: "https://x.com/VPS_AI",
    category: "Cloud Computing",
  },
];

const dataFi = [
  {
    id: 16,
    name: "orbler",
    imageSrc: "/assets/partners/orbler.png",
    description:
      "Empowering communities through innovation: Unveiling our cosmic revamp! 🚀✨ 'From Community, For Community'",
    twitterUrl: "https://twitter.com/Orbler1",
    websiteUrl: "https://orbler.io/",
    category: "DataFi",
  },
  {
    id: 18,
    name: "gemx crypto",
    imageSrc: "/assets/partners/gemx-crypto.png",
    description:
      "GemX is a Web3 platform designed to built for mass adoption, providing timely news updates and insights into the latest trends in the crypto world",
    twitterUrl: "https://twitter.com/gemx_crypto",
    websiteUrl: "https://gemx.io/",
    category: "DataFi",
  },
  {
    id: 19,
    name: "x-alpha",
    imageSrc: "/assets/partners/x-alpha.png",
    description:
      "Take Smarter Trades With X-ALPHA.AI | Real-time Crypto Analytics On Your Twitter Feed | Powered By $XALPHA",
    websiteUrl: "https://x-alpha.ai/x-alpha",
    twitterUrl: "https://twitter.com/XAlphaAI_Team",
    category: "DataFi",
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
      borderRadius: "100%",
    },
    category: "DataFi",
  },
  {
    id: 32,
    name: "Collably Network",
    imageSrc: "/assets/partners/collably-network-logo.png",
    description:
      "🤝 Collably Network: Connecting Projects with Perfect Partners. Your bridge to successful collaborations. 🚀",
    websiteUrl: "https://collably.network/",
    twitterUrl: "https://x.com/CollablyNetwork",
    category: "DataFi",
  },
];

const defi = [
  {
    id: 1,
    name: "Dexe Protocol",
    imageSrc: "/assets/partners/dexe-black.png",
    description:
      "An infrastructure for creating and governing DAOs. 50+ smart-contracts for your web-3 product.",
    twitterUrl: "https://twitter.com/DexeNetwork",
    websiteUrl: "https://www.dexe.network/",
    category: "DeFi",
  },
  {
    id: 3,
    name: "Volu Mint",
    imageSrc: "/assets/partners/volu-mint.png",
    description:
      "Empowering Crypto Projects with AI Automated CEX/DEX decentralised Market Solutions",
    twitterUrl: "https://twitter.com/VoluMint",
    websiteUrl: "https://volumint.io/",
    category: "DeFi",
    logoWidth: 40,
    logoHeight: 40,
  },
  {
    id: 4,
    name: "Agnus AI Blockchain",
    imageSrc: "/assets/partners/agnus-ai-blockchain.png",
    description:
      "Layer 1 AI-Driven Blockchain. Experience unparalleled trust, high speed and security . EVM Compatible (PoA) + ( PBFT ) Consensus Mechanism.",
    twitterUrl: "https://twitter.com/AgnusAIChain",
    websiteUrl: "https://www.agnuschain.ai/",
    category: "DeFi",
  },
  {
    id: 8,
    name: "Filescriptions",
    imageSrc: "/assets/partners/filscriptions.png",
    description:
      "The First Inscription Aggregation Trading Platform on #Filecoin",
    twitterUrl: "https://twitter.com/filscriptions",
    websiteUrl: "https://www.filscriptions.market/",
    category: "DeFi",
  },
  {
    id: 10,
    name: "hambit",
    imageSrc: "/assets/partners/hambit.png",
    description:
      "Your on-chain PayPal, HamBit effortlessly solves all your payment needs!",
    twitterUrl: "https://twitter.com/HamBit_Official",
    websiteUrl: "https://www.hambit.io/",
    category: "DeFi",
  },
  {
    id: 12,
    name: "$notif AI",
    imageSrc: "/assets/partners/$notif-ai.png",
    description: "DeFi Notifications Made Simple.",
    twitterUrl: "https://twitter.com/NotifaiToken",
    websiteUrl: "https://notifai.trade/",
    category: "DeFi",
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
    category: "DeFi",
  },

  {
    id: 15,
    name: "Send Token",
    imageSrc: "/assets/partners/send-tokens.png",
    description: "Crypto made easy. Send & receive with usernames (.send).",
    twitterUrl: "https://twitter.com/sendtokens",
    websiteUrl: "https://www.sendtokens.xyz/",
    category: "DeFi",
  },
  {
    id: 22,
    name: "BUNNY | Ukraine",
    imageSrc: "/assets/partners/bunny-ukraine-logo.png",
    description:
      "$SKYH - Hello, I'm Bunny! I believe that football will bring strong connections and relieve the stress of war.",
    websiteUrl: "https://bunnychz.com/",
    twitterUrl: "https://x.com/BunnyChiliz",
    category: "DeFi",
  },
  {
    id: 27,
    name: "Bitgert - $BRISE",
    imageSrc: "/assets/partners/bitgert-logo.png",
    description:
      "Bitgert is a rapidly expanding crypto project that boasts a gas fee-free  blockchain, CEX and a lot more!.",
    websiteUrl: "http://www.bitgert.com/",
    twitterUrl: "https://x.com/bitgertbrise",
    category: "DeFi",
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
      borderRadius: "100%",
    },
    category: "DeFi",
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
      borderRadius: "100%",
    },
    category: "DeFi",
  },

  {
    id: 33,
    name: "Agent Layer",
    imageSrc: "/assets/partners/agent-layer-logo.png",
    description:
      "AgentLayer - A Decentralized Autonomous AI Agent Blockchain and Network",
    websiteUrl: "https://agentlayer.xyz/",
    twitterUrl: "https://x.com/Agent_Layer",
    category: "DeFi",
  },
  {
    id: 33,
    name: "Haya Finance",
    imageSrc: "/assets/partners/haya-logo.png",
    description:
      "Haya utilizes #DeFi and #ZK technologies to provide safe, on-chain #ETF for long-term investments tailored to ordinary investors and digital nomads.",
    websiteUrl: "https://haya.finance/",
    twitterUrl: "https://x.com/haya_finance",
    category: "DeFi",
    logoWidth: 35,
    logoHeight: 30,
  },
  {
    id: 34,
    name: "Ottochain",
    imageSrc: "/assets/partners/ottochain-logo.jpg",
    description:
      "1st consumer chain on NEAR launched by @OmnityNetwork that adopts Oct 2.0 Interchain security built on the Cosmos SDK.Compatibility & Interoperability with EVM.",
    websiteUrl: "https://www.ottochain.io/",
    twitterUrl: "https://x.com/ottochain_",
    style: {
      borderRadius: "100%",
    },
    category: "DeFi",
  },
  {
    id: 35,
    name: "Synbo Protocol",
    imageSrc: "/assets/partners/ottochain-logo.jpg",
    description:
      "The Community Capital Protocol, Consensus Matching by Position of Proof, and CCO (Community Consensus Offering).",
    websiteUrl: "https://synbo.org/",
    twitterUrl: "https://x.com/ottochain_",
    style: {
      borderRadius: "100%",
    },
    category: "DeFi",
  },
  {
    id: 3,
    name: "Kredly",
    imageSrc: "/assets/partners/kredly-logo.svg",
    description:
      "AI-powered adjustments for rock-solid security. Dynamic fees, rewards & insurance keep the platform smooth & protected!",
    twitterUrl: "https://x.com/kredlyAI",
    websiteUrl: "https://kredly.ai/",
    category: "DeFi",
  },
];

const socialFi = [
  {
    id: 5,
    name: "Paal AI",
    imageSrc: "/assets/partners/paal-ai.png",
    description:
      "Powerful AI ecosystem built using Custom Data Feed and LLMs. Personalize your AI & share across all web platforms.",
    twitterUrl: "https://twitter.com/PaalMind",
    websiteUrl: "https://www.paal.ai/",
    category: "SocialFi",
  },
  {
    id: 6,
    name: "Social Data Analytics",
    imageSrc: "/assets/partners/social-data-analytics.png",
    description:
      "Panoptes, Nemesis, Themis, Prometheus, and Social Data Analytics unite for a holistic, swift, wise, and fair crypto solution.",
    twitterUrl: "https://twitter.com/SDataAnalytics",
    websiteUrl: "https://socialdatanalytics.com/",
    category: "SocialFi",
  },
  {
    id: 7,
    name: "Open Gate",
    imageSrc: "/assets/partners/opengate.png",
    description:
      "Unlocking the Gateway to Web3: Your Portal to Decentralized Possibilities and Boundless Connectivity.",
    twitterUrl: "https://twitter.com/OpenGateLab",
    websiteUrl: "https://fil.opengatenft.com/",
    category: "SocialFi",
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
      borderRadius: "100%",
    },
    category: "SocialFi",
  },
];

const llm = [
  {
    id: 11,
    name: "Metakraft AI",
    imageSrc: "/assets/partners/metakraft-ai.png",
    description: "Generative Tools & Platform for Creative Professionals.",
    twitterUrl: "https://twitter.com/TheMetakraft",
    websiteUrl: "https://www.metakraft.ai/",
    category: "LLM",
  },
  {
    id: 16,
    name: "GPTPlus",
    imageSrc: "/assets/partners/gptplus.png",
    description:
      "Embark on a Transformative Journey, Turning Visionary Ideas into Intelligent, Blockchain-Backed Solutions. Powered By $GPTPlus Token",
    twitterUrl: "https://twitter.com/GPTPlusAI",
    websiteUrl: "https://gpt-plus.io/",
    category: "LLM",
  },
];

const meme = [
  {
    id: 15,
    name: "zkgrok",
    imageSrc: "/assets/partners/zkgrok-black.png",
    description: "$ZKGROK is the hottest AI meme on zkSync in 2024",
    twitterUrl: "https://twitter.com/zkgrok",
    websiteUrl: "https://www.zkgrok.meme/",
    category: "Meme",
  },
];

const dns = [
  {
    id: 17,
    name: "openname",
    imageSrc: "/assets/partners/openname-black.png",
    description:
      "Omnichain Name Service for 1 Billion Users. Powered by LayerZero_Labs.",
    twitterUrl: "https://twitter.com/OpenNameProject",
    websiteUrl: "https://open.name/",
    category: "DNS",
  },
];

const gameFi = [
  {
    id: 36,
    name: "Tokenwars",
    imageSrc: "/assets/partners/tokenwars-logo.png",
    description:
      "SocialFi meets real-world token stakes in a gamified crypto battleground. Tap to earn BIG ⚔️",
    websiteUrl: "https://tokenwars.io/",
    twitterUrl: "https://x.com/tokenwars_io",
    style: {
      borderRadius: "100%",
    },
    category: "GameFi",
  },
  {
    id: 37,
    name: "Chronicles Of Warcraft",
    imageSrc: "/assets/partners/chronicles-of-warcraft-logo.jpg",
    description: "A web3 game based on token economy 3.0, Freedom for gamers.",
    websiteUrl: "https://www.chroniclesofwarcraft.com/",
    twitterUrl: "https://x.com/COWGameFi",
    style: {
      borderRadius: "100%",
    },
    category: "GameFi",
  },
  {
    id: 37,
    name: "Youflix",
    imageSrc: "/assets/partners/youflix-logo.jpg",
    description:
      "Watch & upload memes—videos, images, GIFs on Solana's first decentralized media platform with @poconsol.",
    websiteUrl: "https://www.chroniclesofwarcraft.com/",
    twitterUrl: "https://x.com/PocoYouflix",
    style: {
      borderRadius: "100%",
    },
    category: "GameFi",
  },
];

const infrastructure = [
  {
    id: 23,
    name: "ZERO Labs",
    imageSrc: "/assets/partners/zero-labs-logo.jpg",
    description:
      "Unlocking real-world value for DeFi through zk-powered omnichain identity, solvency aggregation and attestation. Powered by @hyperlane",
    websiteUrl: "https://0xzero.org/",
    twitterUrl: "https://x.com/0xZeroOrg",
    style: {
      borderRadius: "100%",
    },
    category: "Infrastructure",
  },
  {
    id: 14,
    name: "Way Network",
    imageSrc: "/assets/partners/way.png",
    description: "Zero-Knowledge Omnichain Interoperation Protocol.",
    twitterUrl: "https://twitter.com/WayNetwork_Labs",
    websiteUrl: "https://way.network/",
    category: "Infrastructure",
  },
];

const categories = [
  "Blockchain Security",
  "Cloud Computing",
  "DAO",
  "DataFi",
  "DeFi",
  "DNS",
  "GameFi",
  "Infrastructure",
  "LLM",
  "Meme",
  "NFT",
  "RWA",
  "SocialFi",
];

const Fade = require("react-reveal/Fade");

export default function CPartners() {
  const [currentCategory, setCurrentCategory] = useState("Blockchain Security");

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
          {/* <CImage
            width={"100%"}
            height={{ base: "50vh", md: "70vh", lg: "100%" }}
            bgSize={"cover"}
            bgPos={"center"}
            src={"/assets/partnerslight/partnersbg.png"}
            alt="BG"
          /> */}
        </Box>
        <Container
          maxW="1240px"
          pt={{ base: "40px", sm: "180px" }}
          position="relative"
          pb="96px"
        >
          <Fade bottom>
            <Stack
              // bgGradient={"linear(to-r,#d5dbfc,#f2e8fd,#d5dbfc)"}
              // height={{ base: "full", lg: "70vh" }}
              direction={{ base: "column", lg: "row" }}
              alignItems="center"
              pb={{ base: "20px", md: "70px" }}
            >
              <Box
                textAlign={{ base: "center", lg: "left" }}
                style={{ zIndex: "1" }}
              >
                <Text
                  as="h1"
                  fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
                  fontWeight={500}
                  letterSpacing="1px"
                >
                  Our
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
              <Image
                width={800}
                height={700}
                src="/assets/partnerslight/partners.png"
                alt="PhronAI"
              />
            </Stack>
          </Fade>

          <Stack
            direction="row"
            justifyContent="center"
            flexWrap="wrap"
            gap="3"
          >
            <CategoryPartners
              category="Blockchain Security"
              partners={blockchainSecurity}
            />
            <CategoryPartners
              category="Cloud Computing"
              partners={cloudComputing}
            />
            <CategoryPartners category="Dao" partners={dao} />
            <CategoryPartners category="DataFi" partners={dataFi} />
            <CategoryPartners category="DeFi" partners={defi} />
            <CategoryPartners category="DNS" partners={dns} />
            <CategoryPartners category="GameFi" partners={gameFi} />
            <CategoryPartners
              category="Infratructure"
              partners={infrastructure}
            />
            <CategoryPartners category="LLM" partners={llm} />
            <CategoryPartners category="Meme" partners={meme} />
            <CategoryPartners category="NFT" partners={nft} />
            <CategoryPartners category="RWA" partners={rwa} />
            <CategoryPartners category="SocialFi" partners={socialFi} />
          </Stack>

          {/* <Box position="relative" maxW="1290px" mx="auto"> */}
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

          {/* <Grid
              gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap="5"
            >
              {VIPPartners.map((partner, i) => (
                <GridItem key={partner.id}>
                  <PartnerCard
                    description={partner.description}
                    logoUrl={partner.imageSrc}
                    name={partner.name}
                    twitterUrl={partner.twitterUrl}
                    websiteUrl={partner.websiteUrl}
                    style={partner.style}
                  />
                </GridItem>
              ))}
            </Grid> */}

          {/* <Text
              // position="absolute"
              // right="0"
              // bottom="100px"
              fontSize="22px"
              color="#464545"
              // textAlign="center"
              mt="20"
            >
              ...and much more coming soon
            </Text> */}
          {/* </Box> */}
        </Container>

        <Container maxW="1240px" position="relative" pb="140px">
          {/* <Fade bottom>
            <Text
              as="h1"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight={500}
              // textAlign="center"
              letterSpacing="1px"
              mb="8"
              color="#000"
            >
              Other PartnerShips
            </Text>
          </Fade> */}

          {/* <HStack mb="7">
            {categories.map((category, i) => (
              <Button
                onClick={() => {
                  setCurrentCategory(category);
                }}
                size="sm"
                variant={
                  currentCategory === category
                    ? "primary-purple"
                    : "purple-outline"
                }
                key={i}
              >
                {category}
              </Button>
            ))}
          </HStack> */}

          {/* <Box position="relative" maxW="1290px" mx="auto"> */}
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

          {/* <Grid
              gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap="5"
            >
              {partners
                .filter((p) => p.category === currentCategory)
                .map((partner, i) => (
                  <GridItem key={partner.id}>
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
                  </GridItem>
                ))}
            </Grid> */}
          {/* </Box> */}
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
