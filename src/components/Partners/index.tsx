import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { Footer, Nav } from "..";
import PartnerCard from "./PartnerCard";

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
    imageSrc: "/assets/partners/dexe.png",
    description:
      "An infrastructure for creating and governing DAOs. 50+ smart-contracts for your web-3 product.",
    twitterUrl: "https://twitter.com/DexeNetwork",
    websiteUrl: "https://www.dexe.network/",
  },
  {
    id: 2,
    name: "Hacken",
    imageSrc: "/assets/partners/hacken-logo.jpg",
    description:
      "Web3 Security Auditor • We make Web3 a safer place by protecting projects from getting hacked.",
    twitterUrl: "https://x.com/hackenclub",
    websiteUrl: "https://hacken.io/",
    style: {
      borderRadius: "100%",
    },
  },
  {
    id: 3,
    name: "Kredly",
    imageSrc: "/assets/partners/kredly-logo.svg",
    description:
      "AI-powered adjustments for rock-solid security. Dynamic fees, rewards & insurance keep the platform smooth & protected!",
    twitterUrl: "https://x.com/kredlyAI",
    websiteUrl: "https://kredly.ai/",
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
    imageSrc: "/assets/partners/solid-proof.png",
    description:
      "Smart Contract Audits · KYC Services · Development · Consulting",

    twitterUrl: "https://twitter.com/SolidProof_io",
    websiteUrl: "https://solidproof.io/",
    category: "Blockchain Security",
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
    logoWidth: 25,
    logoHeight: 25,
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
    id: 11,
    name: "Metakraft AI",
    imageSrc: "/assets/partners/metakraft-ai.png",
    description: "Generative Tools & Platform for Creative Professionals.",
    twitterUrl: "https://twitter.com/TheMetakraft",
    websiteUrl: "https://www.metakraft.ai/",
    category: "LLM",
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
    id: 14,
    name: "Way Network",
    imageSrc: "/assets/partners/way.png",
    description: "Zero-Knowledge Omnichain Interoperation Protocol.",
    twitterUrl: "https://twitter.com/WayNetwork_Labs",
    websiteUrl: "https://way.network/",
    category: "Infrastructure",
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
    id: 15,
    name: "zkgrok",
    imageSrc: "/assets/partners/zkgrok.png",
    description: "$ZKGROK is the hottest AI meme on zkSync in 2024",
    twitterUrl: "https://twitter.com/zkgrok",
    websiteUrl: "https://www.zkgrok.meme/",
    category: "Meme",
  },
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
    id: 16,
    name: "GPTPlus",
    imageSrc: "/assets/partners/gptplus.png",
    description:
      "Embark on a Transformative Journey, Turning Visionary Ideas into Intelligent, Blockchain-Backed Solutions. Powered By $GPTPlus Token",
    twitterUrl: "https://twitter.com/GPTPlusAI",
    websiteUrl: "https://gpt-plus.io/",
    category: "LLM",
  },
  {
    id: 17,
    name: "openname",
    imageSrc: "/assets/partners/openname.png",
    description:
      "Omnichain Name Service for 1 Billion Users. Powered by LayerZero_Labs.",
    twitterUrl: "https://twitter.com/OpenNameProject",
    websiteUrl: "https://open.name/",
    category: "DNS",
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
    id: 20,
    name: "VPS AI",
    imageSrc: "/assets/partners/vpsai-logo.png",
    description:
      "Revolutionizing cloud computing for #AI and #Blockchain with GPU-enabled VPS. A new era of decentralized  infrastructure, made accessible through $VPS.",
    websiteUrl: "https://vpsai.io/",
    twitterUrl: "https://x.com/VPS_AI",
    category: "Cloud Computing",
  },
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
    id: 30,
    name: "SuperString - Decentralized AI",
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
    imageSrc: "/assets/partners/dsc-logo.jpg",
    description:
      "Motivate users'GPU/CPU computing power and match AI computing power application needs.",
    websiteUrl: "https://dsclab.io/",
    twitterUrl: "https://x.com/dsc_lab",
    style: {
      borderRadius: "100%",
    },
    category: "DAO",
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
    imageSrc: "/assets/partners/haya-logo.jpg",
    description:
      "Haya utilizes #DeFi and #ZK technologies to provide safe, on-chain #ETF for long-term investments tailored to ordinary investors and digital nomads.",
    websiteUrl: "https://haya.finance/",
    twitterUrl: "https://x.com/haya_finance",
    style: {
      borderRadius: "100%",
    },
    category: "DeFi",
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
  {
    id: 38,
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
  return (
    <Box
      backgroundImage="/assets/new-background.png"
      bgPos="center"
      bgSize="cover"
    >
      <Nav />

      <Container
        maxW="1260px"
        pt={{ base: "40px", sm: "180px" }}
        position="relative"
        pb="96px"
      >
        <Fade bottom>
          <Text
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight={500}
            textAlign="center"
            letterSpacing="1px"
            mb="16"
          >
            Our VIP PartnerShips
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
            color="#c1c1c1"
            textAlign="center"
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
            textAlign="center"
            letterSpacing="1px"
            mb="16"
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

          <HStack>
            {categories.map((category, i) => (
              <Button key={i}>{category}</Button>
            ))}
          </HStack>

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
            color="#c1c1c1"
            textAlign="center"
            mt="20"
          >
            ...and much more coming soon
          </Text>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
