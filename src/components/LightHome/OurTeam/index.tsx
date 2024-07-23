import { Box, Container, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const topBar = [
  {
    id: "04",
    name: "Igor Bershadsky",
    role: "Co-Founder",
    image: "/assets/light-theme-home/igor-bershadsky.png",
    linkedinUrl: "https://www.linkedin.com/in/igorbershadsky/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "none", xl: "block" },
  },
  {
    id: "05",
    name: "Guillermo Guimaraes",
    role: "Co-Founder",
    image: "/assets/light-theme-home/guillermo.png",
    linkedinUrl: "https://www.linkedin.com/in/guillermoguimaraes/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "none", xl: "block" },
  },
  {
    id: "07",
    name: "Nikita Sachdev",
    role: "Advisor",
    image: "/assets/light-theme-home/nikita-sachdev.png",
    linkedinUrl: "https://www.linkedin.com/in/nikitasachdev/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "none", xl: "block" },
  },
];

export const team = [
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
    id: "07",
    name: "Nikita Sachdev",
    role: "Advisor",
    image: "/assets/light-theme-home/nikita-sachdev.png",
    linkedinUrl: "https://www.linkedin.com/in/nikitasachdev/",
    imageWidth: 240,
    imageHeight: 240,
    display: { base: "block", xl: "none" },
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
    id: "02",
    name: "Adel Elmessiry, Ph.D.",
    role: "Leading AI Advisor",
    image: "/assets/light-theme-home/adel.png",
    linkedinUrl: "https://www.linkedin.com/in/adelelmessiry/",
    imageWidth: 220,
    imageHeight: 220,
  },
  {
    id: "07",
    name: "Sander Görtjes",
    role: "Advisor",
    image: "/assets/light-theme-home/sander.png",
    linkedinUrl: "https://www.linkedin.com/in/sandergortjes/",
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
    imageWidth: 220,
    imageHeight: 220,
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
    image: "/assets/light-theme-home/egor-sukhorukov.png",
    // linkedinUrl: "https://www.linkedin.com/in/rehanshamas/",
    imageWidth: 220,
    imageHeight: 220,
  },
];

export default function OurTeam() {
  return (
    <Box
      py="50px"
      bgImage="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(232,239,252,1) 20%)"
    >
      <Container maxW="1240px">
        <Text as="h2" fontSize="3xl" textAlign="center" pb="50px">
          Our Team
        </Text>

        <Wrap justify="center" spacing="6" mb="6">
          {topBar.map((member) => (
            <WrapItem key={member.id} display={member.display}>
              <Box>
                <Image
                  src={member.image}
                  alt={member.name + " image"}
                  width={member.imageWidth}
                  height={member.imageWidth}
                />
                <Text fontSize="16px" fontWeight={600} pt="4">
                  {member.name}
                </Text>
                <Text fontSize="14px" color="#8a8a8a" pt="2">
                  {member.role}
                </Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>

        <Wrap justify="center" spacing="6">
          {team.map((member) => (
            <WrapItem
              key={member.id}
              display={member.display}
              maxW={{ base: "180px", xl: "240px" }}
            >
              <Box>
                <Image
                  src={member.image}
                  alt={member.name + " image"}
                  width={member.imageWidth}
                  height={member.imageWidth}
                />
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

        <VStack mt="10">
          <Text as={Link} href="/team" className="btn-grad">
            Meet all members
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
