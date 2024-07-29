import React from "react";
import Image from "next/image";
import {
  Box,
  Text,
  Container,
  VStack,
  Button,
  Link as CLink,
  WrapItem,
  Wrap,
  Stack,
  Input,
  position,
} from "@chakra-ui/react";
// import { Nav } from "..";
import NavLight from "../Shared/Nav/LightNav";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import FooterLighter from "../Shared/Footer/LightFooter";

const Fade = require("react-reveal/Fade");

export const team = [
  // {
  //   id: "01",
  //   name: "Marwan Alzarouni",
  //   role: "Strategic Partner and Advisor",
  //   image: "/assets/team/marwan.png",
  //   linkedinUrl: "https://www.linkedin.com/in/drmarwan/",
  //   imageWidth: 180,
  //   imageHeight: 208,
  // },
  {
    id: "04",
    name: "Igor Bershadsky",
    role: "Chief of Business Development",
    image: "/assets/teamlight/igor-old-cropped.png",
    linkedinUrl: "https://www.linkedin.com/in/igorbershadsky/",
    imageWidth: 210,
    imageHeight: 208,
    style: {
      position: "absolute",
      bottom: "-20px",
      left: "0px",
    },
  },
  {
    id: "05",
    name: "Guillermo Guimaraes",
    role: "Co-Founder",
    image: "/assets/teamlight/guillermo-crop.png",
    linkedinUrl: "https://www.linkedin.com/in/guillermoguimaraes/",
    imageWidth: 190,
    imageHeight: 230,
    style: {
      position: "absolute",
      bottom: "-40px",
      left: "-15px",
    },
  },
  {
    id: "07",
    name: "Nikita Sachdev",
    role: "Advisor",
    image: "/assets/teamlight/nikita-sachdev.png",
    linkedinUrl: "https://www.linkedin.com/in/nikitasachdev/",
    imageWidth: 245,
    imageHeight: 200,
    style: {
      position: "absolute",
      bottom: "-80px",
      left: "-10px",
    },
  },
  {
    id: "10",
    name: "Vitalii Yatskiv",
    role: "CTO",
    image: "/assets/teamlight/vitalii-yatskiv.png",
    linkedinUrl: "https://www.linkedin.com/in/vitalii-yatskiv/",
    imageWidth: 415,
    imageHeight: 300,
    style: {
      position: "absolute",
      bottom: "-80px",
      left: "-20px",
    },
  },
  {
    id: "02",
    name: "Adel Elmessiry, Ph.D.",
    role: "Leading AI Advisor",
    image: "/assets/teamlight/adel-crop.png",
    linkedinUrl: "https://www.linkedin.com/in/adelelmessiry/",
    imageWidth: 450,
    imageHeight: 400,
    style: {
      position: "absolute",
      bottom: "-140px",
      left: "-90px",
    },
  },
  {
    id: "07",
    name: "Sander Görtjes",
    role: "Advisor",
    image: "/assets/teamlight/sander-gortjes.png",
    linkedinUrl: "https://www.linkedin.com/in/sandergortjes/",
    imageWidth: 390,
    imageHeight: 200,
    style: {
      position: "absolute",
      bottom: "-70px",
      left: "-50px",
    },
  },
  {
    id: "03",
    name: "Dr Stylianos Kampakis, CStat",
    role: "Tokenomics Advisor",
    image: "/assets/teamlight/stylianos-crop.png",
    linkedinUrl:
      "https://www.linkedin.com/in/dr-stylianos-kampakis-ai-data-science-tokenomics/",
    imageWidth: 390,
    imageHeight: 230,
    style: {
      position: "absolute",
      bottom: "-50px",
      left: "-50px",
    },
  },
  {
    id: "06",
    name: "Noah J.",
    role: "Chief of Security",
    image: "/assets/teamlight/noah-crop.png",
    linkedinUrl: "https://www.linkedin.com/in/njelich/",
    imageWidth: 430,
    imageHeight: 220,
    style: {
      position: "absolute",
      bottom: "-60px",
      left: "-130px",
    },
  },
  {
    id: "07",
    name: "Rehan Shams",
    role: "Head of Solidity",
    image: "/assets/teamlight/rehan-crop.png",
    linkedinUrl: "https://www.linkedin.com/in/rehanshamas/",
    imageWidth: 390,
    imageHeight: 240,
    style: {
      position: "absolute",
      bottom: "-80px",
      left: "-60px",
    },
  },
  // {
  //   id: "07",
  //   name: "Egor Sukhorukov",
  //   role: "Social Media / Community Manager",
  //   image: "/assets/team/egor-sukhorukov.png",
  // linkedinUrl: "https://www.linkedin.com/in/rehanshamas/",
  //   imageWidth: 180,
  //   imageHeight: 200,
  // },
];

export default function Team() {
  return (
    <Box bg={"#fff"} color={"#000"}>
      <NavLight />
      <Container maxW={"1240px"} pt={{ base: "30px", md: "160px" }} pb="100px">
        <Fade bottom>
          <Box>
            <Text
              // ml={"2.5%"}
              pt={{ md: "10px", lg: "10px" }}
              as="h1"
              fontSize={{ base: "4xl", md: "5xl", "3000px": "7xl" }}
              lineHeight={{ base: "40px", md: "60px", "3000px": "70px" }}
              fontWeight={300}
              mb={{ base: "1", "3000px": "3" }}
            >
              Team
            </Text>{" "}
          </Box>
        </Fade>
        <Wrap mt="10" mb="20" spacing="8" justify="center">
          {team.map((member, i) => (
            <WrapItem
              maxW={{ base: "430px", md: "350px", lg: "430px" }}
              position="relative"
              w="full"
              rounded="xl"
              key={member.id}
              minH={{ base: "300px", sm: "250px" }}
              mb="5"
              overflow="hidden"
              transition="transform .3s"
              _hover={{
                transform: "translateY(-10px)",
              }}
            >
              <Fade bottom delay={i * 100}>
                <Box
                  transition="all .3s"
                  bgImage="/assets/teamlight/teambg.png"
                  // backgroundSize="100% 100%"
                  bgSize={"cover"}
                  bgPos={"center"}
                  rounded="2xl"
                  minH={{ base: "300px", sm: "250px" }}
                  maxW="430px"
                  maxH={"250px"}
                  overflow="hidden"
                  display="flex"
                >
                  <Image
                    src={member.image}
                    alt={member.name + " image "}
                    width={member.imageWidth}
                    height={member.imageHeight}
                    style={member.style}
                  />

                  <VStack
                    position="absolute"
                    top={{ base: "28%", sm: "40%", md: "30%", lg: "43%" }}
                    left="210px"
                    align="flex-start"
                    spacing="2"
                    mt="-50px"
                    pr="5"
                  >
                    <Image
                      src="/assets/team/text-logo.png"
                      alt="text logo"
                      width={80}
                      height={40}
                      style={{
                        marginBottom: "10px",
                      }}
                    />
                    <Text fontSize="lg" fontWeight={600}>
                      {member.name}
                    </Text>
                    <Text color="#777" maxW="200px">
                      {member.role}
                    </Text>
                  </VStack>

                  {member.linkedinUrl ? (
                    <Text
                      bg={"#fff"}
                      as={Link}
                      href={member.linkedinUrl}
                      target="_blank"
                      position="absolute"
                      bottom={{ base: "4", md: "2", lg: "4" }}
                      right="4"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="full"
                      px="5"
                      py="2"
                      _hover={{
                        background: "#f1f1f1",
                      }}
                    >
                      <Text as="span" fontSize="sm" fontWeight={700}>
                        Linked
                      </Text>{" "}
                      <FaLinkedin fontSize="16px" />{" "}
                      <IoArrowForwardCircleOutline
                        fontSize="22px"
                        style={{
                          marginLeft: "10px",
                        }}
                      />
                    </Text>
                  ) : null}
                </Box>
              </Fade>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
      <FooterLighter />
    </Box>
  );
}
