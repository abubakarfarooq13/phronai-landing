import React from "react";
import { Box, Container, Text, Image as CImage } from "@chakra-ui/react";
import RoadMapCard from "./RoadMapCard";

const Fade = require("react-reveal/Fade");

export default function RoadMap() {
  return (
    <Box
      bgImage="/assets/roadmap/background.jpg"
      bgSize={{ base: "cover", md: "100% 100%" }}
      bgPos="center"
      bgRepeat="no-repeat"
      pt={{ base: "40px", md: "160px" }}
      pb={{ base: "50px", md: "100px" }}
    >
      <Container maxW="1160px" pb={{ base: "60px", md: "0px" }}>
        <Fade bottom>
          <Text
            as="h1"
            textAlign={{ base: "center", md: "left" }}
            fontSize="5xl"
            fontWeight={500}
          >
            Road Map
          </Text>
        </Fade>
      </Container>
      <Container maxW="1160px" pb="70px" pos="relative">
        <CImage
          display={{ base: "none", md: "block" }}
          src="/assets/roadmap/arrow-new-1.png"
          alt="arrow 1"
          pos="absolute"
          w="100px"
          left="50%"
          top="-200px"
          transform="translateX(-50%)"
        />
        <CImage
          display={{ base: "none", md: "block" }}
          src="/assets/roadmap/arrow-new-2.png"
          alt="arrow 1"
          pos="absolute"
          w="100px"
          left="50%"
          top={{ md: "120px", lg: "75px" }}
          transform="translateX(-50%)"
        />
        <CImage
          display={{ base: "none", md: "block" }}
          src="/assets/roadmap/arrow-new-3.png"
          alt="arrow 1"
          pos="absolute"
          w="100px"
          left="50%"
          top={{ md: "580px", lg: "520px" }}
          transform="translateX(-50%)"
        />
        <CImage
          display={{ base: "none", md: "block" }}
          src="/assets/roadmap/arrow-new-4.png"
          alt="arrow 1"
          pos="absolute"
          w="100px"
          left="50%"
          top={{ md: "985px", lg: "950px" }}
          transform="translateX(-50%)"
        />
        <CImage
          display={{ base: "none", md: "block" }}
          src="/assets/roadmap/arrow-new-5.png"
          alt="arrow 1"
          pos="absolute"
          w="100px"
          left="50%"
          top={{ md: "1485px", lg: "1450px" }}
          transform="translateX(-50%)"
        />
        <Fade left>
          <RoadMapCard
            mt={{ md: "150px" }}
            bgImageUrl="/assets/roadmap/1.png"
            title="Q4 2023 / Q1 2024"
          >
            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Theoretical Process
              </Text>

              <Text fontSize="13px" opacity=".7" mb="4">
                Initiation of the theoretical analysis of applying multiple
                types of nodes in a single blockchain.
              </Text>
              <Text fontSize="13px" opacity=".7">
                Applying multiple types of nodes required implementing an
                additional Artificial Intelligence tool. This tool would connect
                directly to the consensus algorithm to analyze and categorize
                the behavior of the nodes and their communication with each
                other.
              </Text>
            </Box>

            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Brand Identity
              </Text>

              <Text fontSize="13px" opacity=".7">
                Alongside the product decided to tackle, the corporate image and
                legal entities were constituted in order to provide a
                professional image for the public.
              </Text>
            </Box>

            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Development Process: <br /> Phron AI - Layer 1
              </Text>

              <Text fontSize="13px" opacity=".7">
                The first case study for a blockchain consensus algorithm
                integrated with the initial state of the AI Composition (Machine
                Learning) is integrated to begin checking the practical behavior
                of the Machine Learning system throughout the Node testing for
                the different types in current existence.
              </Text>
            </Box>
          </RoadMapCard>
        </Fade>

        <Fade right>
          <RoadMapCard
            float={{ md: "right" }}
            bgImageUrl="/assets/roadmap/2.png"
            title="Q2 2024"
            mt={{ md: "-350px" }}
          >
            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Practical Process: Testnet V1.0
              </Text>

              <Text fontSize="13px" opacity=".7" mb="4">
                The first version of the Testnet for Phron AI Layer 1 is
                implemented. This will provide real data from transactions and
                usage from the public to check the system&apos;s efficiency
                through Telemetry.
              </Text>
              <Text fontSize="13px" opacity=".7" mb="4">
                This process helps gather data from the inputs and outputs of
                the Machine Learning system to evolve into an Encoder-Decoder
                Convolutional Neural Network (CNN) with fine-tuned parameters.
              </Text>
            </Box>

            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Ecosystem Development
              </Text>

              <Text fontSize="13px" opacity=".7" mb="4">
                Appliances for the chain are deployed into Testnet V1.0. The
                current ones integrated into the ecosystem are Decentralized
                Wallet, Decentralized Exchange, Cross-Chain Bridge, NFT
                Marketplace, and Chain Explorer.
              </Text>
              <Text fontSize="13px" opacity=".7">
                This conglomerate helps with the transactional study process of
                the three types of nodes, alongside providing more testing
                subjects regarding smart contracts deployment, NFT behavior, and
                Cross-Chain Security.
              </Text>
            </Box>
          </RoadMapCard>
        </Fade>

        <Fade left>
          <RoadMapCard
            mt={{ md: "100px" }}
            bgImageUrl="/assets/roadmap/3.png"
            title="Q3 2024"
          >
            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Data implementation to CNN
              </Text>

              <Text fontSize="13px" opacity=".7">
                Using the data gathered across the different types of
                transactions and deployments that trained the Machine Learning
                initial code, parameters are tuned into the Encoder-Decoder CNN
                while implementing new inputs and outputs.
              </Text>
            </Box>

            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Practical Process: Testnet V2.0
              </Text>

              <Text fontSize="13px" opacity=".7" mb="4">
                After training of the CNN is completed, Testnet V2.0 is
                launched. This process proves the completion of the technology
                applied through the Phronesis Protocol in terms of the Consensus
                Mechanism.
              </Text>
              <Text fontSize="13px" opacity=".7">
                This version of Testnet is the pre-release to the Mainnet
                Version.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Audit Process for Testnet V2.0
              </Text>

              <Text fontSize="13px" opacity=".7">
                After our team and community do Testnet V2.0 Training and
                Testing, we begin an auditing process with a very reputable
                crypto cybersecurity company to check compliance for penetration
                tests, flooding attacks, malicious nodes, and other technical
                points that could potentially threaten the network in the
                future.
              </Text>
            </Box>
          </RoadMapCard>
        </Fade>

        <Fade right>
          <RoadMapCard
            float={{ md: "right" }}
            mt={{ md: "-360px", lg: "-250px" }}
            bgImageUrl="/assets/roadmap/4.png"
            title="Q4 2024"
          >
            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                Phron AI: Layer 1 Mainnet Launch
              </Text>

              <Text fontSize="13px" opacity=".7">
                After receiving the approval of the Auditing Company regarding
                the threat levels and the solution of possible vulnerabilities
                of the chain, Mainnet will be launched.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                $PHRON Launch
              </Text>

              <Text fontSize="13px" opacity=".7">
                By having available Mainnet, the official version of the PHRON
                token in Phron AI: Layer 1 is publicly launched and made
                available to the public to work transactions, smart contract
                development, and NFT Mints, among others.
              </Text>
            </Box>
          </RoadMapCard>
        </Fade>

        <Fade left>
          <RoadMapCard
            mt={{ md: "50px", lg: "200px" }}
            bgImageUrl="/assets/roadmap/5.png"
            title="Q1 2025"
            noBottomMargin
          >
            <Box>
              <Text
                fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                as="h3"
                fontWeight={500}
                mb="4"
                opacity=".9"
              >
                PhronZero: The beginnings
              </Text>

              <Text fontSize="13px" opacity=".7" mb="4">
                Having the reliability and efficiency provided in our
                Proof-of-Concept, the technology created will be migrated to
                create a second layer of nodes, IntraNodes, that will manage the
                communication between the different Zerochains that will be on
                top of PhronZero.
              </Text>
              <Text fontSize="13px" opacity=".7">
                This concept integrates a second layer of complexity, having 2+
                layers of CNN connections that will constitute the IntraNodes
                and the ZeroNodes of each subsequent Zerochain.
              </Text>
            </Box>
          </RoadMapCard>
        </Fade>
      </Container>

      <Text textAlign="center" fontSize="2xl" color="#350175" fontWeight={500}>
        soon
      </Text>
    </Box>
  );
}
