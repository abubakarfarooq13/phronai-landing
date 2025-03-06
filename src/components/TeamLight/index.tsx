import {
  Box,
  Container,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const teamMembers = [
  {
    id: "04",
    name: "Igor Bershadsky",
    role: "Co-Founder",
    image: "/assets/team-new-images/igore.png",
    linkedinUrl: "https://www.linkedin.com/in/igorbershadsky/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "block", xl: "none" },
  },
  {
    id: "07",
    name: "Guillermo Guimaraes",
    role: "Co-Founder",
    image: "/assets/team-new-images/guillermo.png",

    linkedinUrl: "https://www.linkedin.com/in/guillermoguimaraes/",
    imageWidth: 220,
    imageHeight: 220,
  },
  {
    id: "05",
    name: "Myrtle Anne",
    role: "COO",
    image: "/assets/team-new-images/myrtle.png",
    linkedinUrl: "https://www.linkedin.com/in/myrtleology/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "block", xl: "none" },
  },
  {
    id: "02",
    name: "Sander Görtjes",
    linkedinUrl: "https://www.linkedin.com/in/sandergortjes/",
    role: "Co-Founder",
    image: "/assets/team-new-images/sanders.png",

    imageWidth: 220,
    imageHeight: 220,
  },

  {
    id: "10",
    name: "Adel Elmessiry, Ph.D.",
    role: "Leading AI Advisor",
    image: "/assets/team-new-images/adel.png",
    linkedinUrl: "https://www.linkedin.com/in/adelelmessiry/",
    imageWidth: 220,
    imageHeight: 220,
  },
  {
    id: "10",
    name: "Vitalii Yatskiv",
    role: "CTO",
    image: "/assets/team-new-images/vitali.png",
    linkedinUrl: "https://www.linkedin.com/in/vitalii-yatskiv/",
    imageWidth: 220,
    imageHeight: 220,
  },
  {
    id: "03",
    name: "Dr Stylianos Kampakis, CSTAT",
    role: "Tokenomics Advisor",
    image: "/assets/team-new-images/stylianos.png",
    linkedinUrl:
      "https://www.linkedin.com/in/dr-stylianos-kampakis-ai-data-science-tokenomics/",
    imageWidth: 220,
    imageHeight: 220,
  },

  {
    id: "06",
    name: "Noah J.",
    role: "Chief Security Officer",
    image: "/assets/team-new-images/noah.png",
    linkedinUrl: "https://www.linkedin.com/in/njelich/",
    imageWidth: 160,
    imageHeight: 190,
  },
  {
    id: "07",
    name: "Rehan Shams",
    role: "Head of Development",
    image: "/assets/team-new-images/rehan.png",
    linkedinUrl: "https://www.linkedin.com/in/rehanshamas/",
    imageWidth: 220,
    imageHeight: 220,
  },
  {
    id: "07",
    name: "Egor Sukhorukov",
    role: "Social Media / Community Manager",
    image: "/assets/team-new-images/egor.png",
    linkedinUrl: "#",
    imageWidth: 480,
    imageHeight: 400,
  },
];

export const drMarwan = [
  {
    id: "10",
    name: "Dr. Marwan Alzarouni",
    role: "Advisor - CEO of AI of Dubai Department of Economy and Tourism CEO of Dubai Blockchain Center",
    image: "/assets/team-new-images/marwan.png",
    linkedinUrl: "https://www.linkedin.com/in/drmarwan/",
    imageWidth: 1020,
    imageHeight: 1020,
  },
];

export const advisors = [
  {
    id: "12",
    name: "Dominic Longman",
    role: "Advisor - Ex Senior Executive Officer - Binance Abu Dhabi",
    image: "/assets/team-new-images/dominic.png",
    linkedinUrl: "https://www.linkedin.com/in/dom-longman/",
    imageWidth: 220,
    imageHeight: 220,
    maxWidth: "228px",
    maxWidthM: "135px",
    // display: { base: "block", xl: "none" },
  },
  {
    id: "07",
    name: "Nikita Sachdev",
    role: "Advisor - Founder/CEO Luna Media Corporation",
    image: "/assets/team-new-images/nikita.png",
    linkedinUrl: "https://www.linkedin.com/in/nikitasachdev/",
    imageWidth: 240,
    imageHeight: 240,
    // display: { base: "block", xl: "none" },
  },
  {
    id: "10",
    name: "Dyma Budorin",
    role: "CEO of Hacken - Advisor for Blockchain Security and Ethical AI Standards",
    image: "/assets/team-new-images/dyma.png",
    linkedinUrl:
      "https://www.linkedin.com/in/dyma-budorin-acca-ccssa-56a98035/",
    imageWidth: 420,
    imageHeight: 420,
    maxWidth: "233px",
    maxWidthM: "135px",
  },

  {
    id: "11",
    name: "Dariia Vasylieva, Ph.D",
    role: "Advisor - Founder/CEO FD Capital",
    image: "/assets/team-new-images/dariia.png",
    linkedinUrl: "https://www.linkedin.com/in/dvasylieva/",
    imageWidth: 220,
    imageHeight: 220,
  },
];

const Fade = require("react-reveal/Fade");

export default function OurTeam() {
  return (
    <Box
      py="50px"
      bgImage="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(232,239,252,1) 20%)"
    >
      <Container maxW="1240px" mb="50px">
        <Fade bottom>
          <Text
            as="h2"
            color="#321b7a"
            textAlign="center"
            fontWeight="bold"
            fontSize={{ base: "30px", md: "40px" }}
          >
            Our Team
          </Text>

          <Text
            fontSize={{ base: "18px", md: "24px" }}
            as="h3"
            mb="6"
            textAlign="center"
            color="#321b7a"
          >
            Meet the Minds Behind PhronAI - Innovators, Builders, & AI Experts
          </Text>
        </Fade>

        <Fade bottom>
          <Wrap justify="center" spacing="6" w="full">
            {teamMembers.map((member) => (
              <WrapItem
                key={member.id}
                maxW={{
                  base: "140px",
                  xl: "220px",
                }}
                w="full"
                _hover={{
                  transform: "translateY(-8px)",
                }}
                transition="all .3s"
              >
                <>
                  <Box
                    as={Link}
                    href={member.linkedinUrl}
                    display="block"
                    target="_blank"
                    w="full"
                  >
                    <Box
                      position="relative"
                      rounded="20px"
                      overflow="hidden"
                      _after={{
                        content: `''`,
                        position: "absolute",
                        top: "0px",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name + " image"}
                        width={member.imageWidth}
                        height={member.imageWidth}
                        style={{ width: "100%" }}
                      />
                    </Box>
                    <Text
                      fontSize="16px"
                      textAlign="center"
                      fontWeight={600}
                      pt="4"
                    >
                      {member.name}
                    </Text>
                    <Text fontSize="14px" textAlign="center" color="#8a8a8a">
                      {member.role}
                    </Text>
                  </Box>
                </>
              </WrapItem>
            ))}
          </Wrap>
        </Fade>

        <Fade bottom>
          <Text
            fontSize={{ base: "lg", md: "24px" }}
            letterSpacing="2px"
            as="h3"
            mb="6"
            textAlign="center"
            mt="16"
            fontWeight={600}
            color="#321b7a"
          >
            Advisors
          </Text>
        </Fade>

        <Fade bottom>
          <Wrap justify="center" spacing="6" w="full" pb="10">
            {drMarwan.map((member) => (
              <WrapItem
                key={member.id}
                maxW={{
                  base: "140px",
                  xl: "220px",
                }}
                w="full"
                _hover={{
                  transform: "translateY(-10px)",
                }}
                transition="all .3s"
              >
                <Box
                  as={Link}
                  href={member.linkedinUrl}
                  display="block"
                  target="_blank"
                  w="full"
                  textAlign="center"
                >
                  <Box
                    // bgColor="#fff"
                    // px={
                    //   member.name === "Dyma Budorin"
                    //     ? { base: "1px", md: "2px" }
                    //     : ""
                    // }
                    rounded="20px"
                    overflow="hidden"
                    position="relative"
                    _after={{
                      content: `''`,
                      position: "absolute",
                      top: "0px",
                      bottom: "0px",
                      left: "0px",
                      right: "0px",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name + " image"}
                      width={member.imageWidth}
                      height={member.imageWidth}
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Text fontSize="16px" fontWeight={600} pt="4" color="#321b7a">
                    {member.name}
                  </Text>
                  <Text fontSize="14px" color="#321b7a">
                    {member.role}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Fade>
        <Fade bottom>
          <Wrap justify="center" spacing="6" w="full">
            {advisors.map((member) => (
              <WrapItem
                key={member.id}
                maxW={{
                  base: member.maxWidthM ? member.maxWidthM : "140px",
                  xl: member.maxWidth ? member.maxWidth : "240px",
                }}
                w="full"
                _hover={{
                  transform: "translateY(-10px)",
                }}
                transition="all .3s"
              >
                <Box
                  as={Link}
                  href={member.linkedinUrl}
                  display="block"
                  target="_blank"
                  w="full"
                  textAlign="center"
                >
                  <Box
                    // bgColor="#fff"
                    // px={
                    //   member.name === "Dyma Budorin"
                    //     ? { base: "1px", md: "2px" }
                    //     : ""
                    // }
                    rounded="20px"
                    overflow="hidden"
                    position="relative"
                    _after={{
                      content: `''`,
                      position: "absolute",
                      top: "0px",
                      bottom: "0px",
                      left: "0px",
                      right: "0px",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name + " image"}
                      width={member.imageWidth}
                      height={member.imageWidth}
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Text
                    whiteSpace={
                      member.name === "Dominic Longman" ? "nowrap" : "normal"
                    }
                    fontSize="16px"
                    fontWeight={600}
                    pt="4"
                    color="#321b7a"
                  >
                    {member.name}
                  </Text>
                  <Text fontSize="14px" color="#321b7a">
                    {member.role}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Fade>
      </Container>
    </Box>
  );
}
