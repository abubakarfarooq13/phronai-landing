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

// const topBar = [
//   {
//     id: "04",
//     name: "Igor Bershadsky",
//     role: "Co-Founder",
//     image: "/assets/light-theme-home/igor-bershadsky.png",
//     linkedinUrl: "https://www.linkedin.com/in/igorbershadsky/",
//     imageWidth: 240,
//     imageHeight: 240,
//     display: { base: "none", xl: "block" },
//   },
//   {
//     id: "05",
//     name: "Guillermo Guimaraes",
//     role: "Co-Founder",
//     image: "/assets/light-theme-home/guillermo.png",
//     linkedinUrl: "https://www.linkedin.com/in/guillermoguimaraes/",
//     imageWidth: 240,
//     imageHeight: 240,
//     display: { base: "none", xl: "block" },
//   },
//   {
//     id: "07",
//     name: "Nikita Sachdev",
//     role: "Advisor",
//     image: "/assets/light-theme-home/nikita-sachdev.png",
//     linkedinUrl: "https://www.linkedin.com/in/nikitasachdev/",
//     imageWidth: 240,
//     imageHeight: 240,
//     display: { base: "none", xl: "block" },
//   },
// ];

export const teamMembers = [
  {
    id: "04",
    name: "Igor Bershadsky",
    role: "Co-Founder",
    image: "/assets/light-theme-home/igor-bershadsky.png",
    linkedinUrl: "https://www.linkedin.com/in/igorbershadsky/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "block", xl: "none" },
  },
  {
    id: "05",
    name: "Guillermo Guimaraes",
    role: "Co-Founder",
    image: "/assets/light-theme-home/guillermo.png",
    linkedinUrl: "https://www.linkedin.com/in/guillermoguimaraes/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "block", xl: "none" },
  },

  {
    id: "02",
    name: "Adel Elmessiry, Ph.D.",
    role: "Leading AI Advisor",
    image: "/assets/light-theme-home/adel.png",
    linkedinUrl: "https://www.linkedin.com/in/adelelmessiry/",
    imageWidth: 220,
    imageHeight: 220,
  },

  {
    id: "10",
    name: "Vitalii Yatskiv",
    role: "CTO",
    image: "/assets/light-theme-home/vitalii.png",
    linkedinUrl: "https://www.linkedin.com/in/vitalii-yatskiv/",
    imageWidth: 220,
    imageHeight: 220,
  },
  {
    id: "03",
    name: "Dr Stylianos Kampakis, CStat",
    role: "Tokenomics Advisor",
    image: "/assets/light-theme-home/stylianos.png",
    linkedinUrl:
      "https://www.linkedin.com/in/dr-stylianos-kampakis-ai-data-science-tokenomics/",
    imageWidth: 220,
    imageHeight: 220,
  },

  {
    id: "06",
    name: "Noah J.",
    role: "Chief Security Officer",
    image: "/assets/light-theme-home/noah.png",
    linkedinUrl: "https://www.linkedin.com/in/njelich/",
    imageWidth: 160,
    imageHeight: 190,
  },
  {
    id: "07",
    name: "Rehan Shams",
    role: "Head of Development",
    image: "/assets/light-theme-home/rehan.png",
    linkedinUrl: "https://www.linkedin.com/in/rehanshamas/",
    imageWidth: 220,
    imageHeight: 220,
  },
  {
    id: "07",
    name: "Egor Sukhorukov",
    role: "Social Media / Community Manager",
    image: "/assets/light-theme-home/egor.png",
    linkedinUrl: "#",
    imageWidth: 180,
    imageHeight: 200,
  },
];

export const advisors = [
  {
    id: "07",
    name: "Nikita Sachdev",
    role: "Advisor - Founder/CEO Luna Media Corporation",
    image: "/assets/light-theme-home/nikita-sachdev.png",
    linkedinUrl: "https://www.linkedin.com/in/nikitasachdev/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "block", xl: "none" },
  },
  {
    id: "10",
    name: "Dyma Budorin",
    role: "Advisor for Blockchain Security and Ethical AI Standards",
    image: "/assets/light-theme-home/dyma-budorin.png",
    linkedinUrl:
      "https://www.linkedin.com/in/dyma-budorin-acca-ccssa-56a98035/",
    imageWidth: 220,
    imageHeight: 220,
    maxWidth: "233px",
  },
  {
    id: "07",
    name: "Sander Görtjes",
    role: "Advisor - Co-Owner HELLO Labs",
    image: "/assets/light-theme-home/sander.png",
    linkedinUrl: "https://www.linkedin.com/in/sandergortjes/",
    imageWidth: 220,
    imageHeight: 220,
  },
  {
    id: "10",
    name: "Dariia Vasylieva, Ph.D",
    role: "Advisor - Founder/CEO FD Capital",
    image: "/assets/light-theme-home/dariia.png",
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
          <Text as="h2" textAlign="center" fontSize="3xl" pb="50px">
            Team
          </Text>

          <Text
            fontSize={{ base: "lg", "2340px": "30px" }}
            letterSpacing="2px"
            as="h3"
            mb="6"
            textAlign="center"
            fontWeight={700}
          >
            Team Members
          </Text>
        </Fade>

        <Fade bottom>
          <Wrap justify="center" spacing="6" w="full">
            {teamMembers.map((member) => (
              <WrapItem
                key={member.id}
                // display={member.display}
                maxW={{
                  base: "140px",
                  xl: "240px",
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
                      bgColor="#FEFEFE"
                      position="relative"
                      px={
                        member.name === "Egor Sukhorukov" ||
                        member.name === "Dyma Budorin"
                          ? { base: "1px", md: "2px" }
                          : ""
                      }
                      rounded="20px"
                      overflow="hidden"
                      _after={{
                        content: `''`,
                        position: "absolute",
                        top: "0px",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        backgroundImage:
                          member.name === "Egor Sukhorukov" ||
                          member.name === "Dyma Budorin"
                            ? "linear-gradient(180deg, rgba(0,0,0,0) 80%, rgba(255,255,255,1) 100%)"
                            : "",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name + " image"}
                        width={member.imageWidth}
                        height={member.imageWidth}
                        style={{ width: "100%", filter: "grayscale(100%)" }}
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
            fontSize={{ base: "lg", "2340px": "30px" }}
            letterSpacing="2px"
            as="h3"
            mb="6"
            textAlign="center"
            mt="16"
            fontWeight={700}
          >
            Advisors
          </Text>
        </Fade>

        <Fade bottom>
          <Wrap justify="center" spacing="6" w="full">
            {advisors.map((member) => (
              // <WrapItem
              //   key={member.id}
              //   maxW={{
              //     base: "140px",
              //     xl: member.maxWidth ? member.maxWidth : "240px",
              //   }}
              //   w="full"
              //   textAlign="center"
              //   _hover={{
              //     transform: "translateY(-8px)",
              //   }}
              //   transition="all .3s"
              // >
              //   <>
              //     <Box
              //       as={Link}
              //       href={member.linkedinUrl}
              //       display="block"
              //       target="_blank"
              //       w="full"
              //     >
              //       <Image
              //         src={member.image}
              //         alt={member.name + " image"}
              //         width={member.imageWidth}
              //         height={member.imageWidth}
              //         style={{ width: "100%" }}
              //       />
              //       <Text fontSize="16px" fontWeight={600} pt="4">
              //         {member.name}
              //       </Text>
              //       <Text fontSize="14px" color="#8a8a8a">
              //         {member.role}
              //       </Text>
              //     </Box>
              //   </>
              // </WrapItem>
              <WrapItem
                key={member.id}
                maxW={{
                  base: "140px",
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
                    bgColor="#fff"
                    px={
                      member.name === "Dyma Budorin"
                        ? { base: "1px", md: "2px" }
                        : ""
                    }
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
                      backgroundImage:
                        member.name === "Dyma Budorin"
                          ? "linear-gradient(180deg, rgba(0,0,0,0) 80%, rgba(255,255,255,1) 100%)"
                          : "",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name + " image"}
                      width={member.imageWidth}
                      height={member.imageWidth}
                      style={{ width: "100%", filter: "grayscale(1)" }}
                    />
                  </Box>
                  <Text fontSize="16px" fontWeight={600} pt="4">
                    {member.name}
                  </Text>
                  <Text fontSize="14px" color="#8a8a8a">
                    {member.role}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Fade>

        {/* <Fade bottom>
          <VStack mt="10">
            <Text as={Link} color='#fff' href="/team" className="btn-grad">
              Meet all members
            </Text>
          </VStack>
        </Fade> */}
      </Container>
    </Box>
  );
}
