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
} from "@chakra-ui/react";
import { Nav } from "..";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

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
    role: "Co-Founder",
    image: "/assets/team/igor-old-cropped.png",
    linkedinUrl: "https://www.linkedin.com/in/igorbershadsky/",
    imageWidth: 210,
    imageHeight: 208,
  },
  {
    id: "05",
    name: "Guillermo Guimaraes",
    role: "Co-Founder",
    image: "/assets/team/guillermo-crop.png",
    linkedinUrl: "https://www.linkedin.com/in/guillermoguimaraes/",
    imageWidth: 170,
    imageHeight: 230,
  },
  {
    id: "07",
    name: "Sander Görtjes",
    role: "Advisor",
    image: "/assets/team/sander-gortjes.png",
    linkedinUrl: "https://www.linkedin.com/in/sandergortjes/",
    imageWidth: 240,
    imageHeight: 200,
  },
  {
    id: "07",
    name: "Nikita Sachdev",
    role: "Advisor",
    image: "/assets/team/nikita-sachdev.png",
    linkedinUrl: "https://www.linkedin.com/in/nikitasachdev/",
    imageWidth: 240,
    imageHeight: 200,
  },
  {
    id: "10",
    name: "Vitalii Yatskiv",
    role: "CTO",
    image: "/assets/team/vitalii-yatskiv.png",
    linkedinUrl: "https://www.linkedin.com/in/vitalii-yatskiv/",
    imageWidth: 250,
    imageHeight: 230,
  },
  {
    id: "02",
    name: "Adel Elmessiry, Ph.D.",
    role: "Leading AI Advisor",
    image: "/assets/team/adel-crop.png",
    linkedinUrl: "https://www.linkedin.com/in/adelelmessiry/",
    imageWidth: 180,
    imageHeight: 220,
  },
  {
    id: "03",
    name: "Dr Stylianos Kampakis, CStat",
    role: "Tokenomics Advisor",
    image: "/assets/team/stylianos-crop.png",
    linkedinUrl:
      "https://www.linkedin.com/in/dr-stylianos-kampakis-ai-data-science-tokenomics/",
    imageWidth: 250,
    imageHeight: 230,
  },
  {
    id: "06",
    name: "Noah J.",
    role: "Chief Security Officer",
    image: "/assets/team/noah-crop.png",
    linkedinUrl: "https://www.linkedin.com/in/njelich/",
    imageWidth: 200,
    imageHeight: 220,
  },
  {
    id: "07",
    name: "Rehan Shams",
    role: "Head of Development",
    image: "/assets/team/rehan-crop.png",
    linkedinUrl: "https://www.linkedin.com/in/rehanshamas/",
    imageWidth: 190,
    imageHeight: 240,
  },
  {
    id: "07",
    name: "Egor Sukhorukov",
    role: "Social Media / Community Manager",
    image: "/assets/team/egor-sukhorukov.png",
    // linkedinUrl: "https://www.linkedin.com/in/rehanshamas/",
    imageWidth: 180,
    imageHeight: 200,
  },
];

export default function Team() {
  return (
    <Box
      backgroundImage="/assets/new-background.png"
      bgPos="center"
      bgSize="cover"
    >
      <Nav />
      <Container maxW="1460px" pt={{ base: "30px", md: "160px" }} pb="100px">
        <Fade bottom>
          <Text textAlign="center" fontSize="3xl" fontWeight={300} opacity=".8">
            Phron AI
          </Text>
          <Text
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", "3000px": "7xl" }}
            lineHeight={{ base: "40px", md: "60px", "3000px": "70px" }}
            fontWeight={300}
            mb={{ base: "1", "3000px": "3" }}
            textAlign="center"
            textTransform="uppercase"
          >
            Team
          </Text>
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
                  bgImage="/assets/team/background.png"
                  backgroundSize="100% 100%"
                  rounded="2xl"
                  minH={{ base: "300px", sm: "250px" }}
                  maxW="430px"
                  overflow="hidden"
                  display="flex"
                  // justifyContent={i === 7 ? "flex-end" : "flex-start"}
                >
                  <Image
                    src={member.image}
                    alt={member.name + " image "}
                    width={member.imageWidth}
                    height={member.imageHeight}
                    style={{
                      position: "absolute",
                      bottom: "0px",
                    }}
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
                    <Text fontSize="lg" textTransform="uppercase">
                      {member.name}
                    </Text>
                    <Text color="#777" maxW="200px">
                      {member.role}
                    </Text>
                  </VStack>

                  {member.linkedinUrl ? (
                    <Text
                      as={Link}
                      href={member.linkedinUrl}
                      target="_blank"
                      position="absolute"
                      bottom={{ base: "4", md: "2", lg: "4" }}
                      right="4"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="1px"
                      borderColor="rgba(169, 76, 203, .3)"
                      rounded="full"
                      px="5"
                      py="2"
                      _hover={{
                        background: "rgba(169, 76, 203, .3)",
                      }}
                    >
                      <Text as="span" fontSize="sm" fontWeight={700}>
                        Linked
                      </Text>{" "}
                      <FaLinkedin fontSize="16px" />{" "}
                      <BsArrowRightCircleFill
                        fontSize="18px"
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

        <VStack>
          {/* <Button
            // variant="primary"
            rounded="full"
            px="10"
            py="10"
            as={CLink}
            href={`mailto:${PHRON_INFO_EMAIL}`}
            backgroundImage="linear-gradient(90deg, rgba(169, 76, 203, 1) 20%, rgba(78, 60, 141, 1) 80%)"
            color="#fff"
            position="relative"
            _after={{
              content: `' '`,
              bgColor: "#03020b",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              rounded: "full",
            }}
          >
            <Text
              as="span"
              position="relative"
              zIndex="10"
              textTransform="uppercase"
              fontSize="2xl"
            >
              Contact Us
            </Text>
          </Button> */}

          <a className="btn" href="mailto:info@phron.ai">
            {/* Contact Us Button */}
          </a>
        </VStack>

        {/* <VStack mt="20">
          <Box mb="4">
            <Image
              src="/assets/phronzero-logo-2.png"
              alt="phronzero logo"
              width={300}
              height={400}
            />
          </Box>

          <Text
            as="h2"
            fontSize="2xl"
            textTransform="uppercase"
            letterSpacing="1px"
            fontWeight={300}
            mb="5"
          >
            SignUp For The Portal Newsletter
          </Text>

          <Stack
            // bgImage="/assets/phronzero/input-bg.png"
            // bgSize="cover"
            // bgPos="center"
            px="2"
            py="2"
            bgColor="rgba(21, 9, 44, .5)"
            rounded={{ base: "12px", sm: "full" }}
            border="1px"
            borderColor="rgba(75, 66, 97, .5)"
            w="full"
            maxW="400px"
            h={{ sm: "45px" }}
            direction={{ base: "column", sm: "row" }}
            alignItems={{ sm: "center" }}
          >
            <Input
              border="0px"
              _focus={{
                boxShadow: "none",
              }}
              placeholder="EMAIL"
              _placeholder={{
                color: "#4b4261",
              }}
              fontFamily="inherit"
              bg="transparent"
              type="email"
            />
            <Button
              // as={CLink}
              // href="https://phron.ai/whitepaper.pdf"
              // target="_blank"
              variant="primary"
              px="6"
              py="3"
              rounded="full"
              rightIcon={<FaArrowRightLong />}
              fontWeight={400}
              size="sm"
            >
              <Text as="span" pr="2">
                Sign Up
              </Text>
            </Button>
          </Stack>
        </VStack> */}
      </Container>
    </Box>
  );
}
