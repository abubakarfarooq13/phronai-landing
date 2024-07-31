import React from "react";
import Image from "next/image";
import { Box, Text, Container, VStack, WrapItem, Wrap } from "@chakra-ui/react";
import { Nav } from "..";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
const Fade = require("react-reveal/Fade");
import { team } from "./index2";

export default function Team() {
  return (
    <Box bgPos="bottom" bgSize="100% 100%" bgRepeat="no-repeat">
      <Nav />
      <Container pt="70px" pb="100px">
        <Fade bottom>
          <Text textAlign="center" fontSize="3xl" fontWeight={300} opacity=".8">
            PhronZero
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
          {team.map((member) => (
            <WrapItem
              key={member.id}
              transition="all .3s"
              // bgImage="/assets/team/background.png"
              // backgroundSize="100% 100%"
              overflow="hidden"
              rounded="xl"
              minH="250px"
              position="relative"
              w="full"
              maxW="430px"
              mb="5"
            >
              <Image
                src={member.image}
                alt={member.name + " image "}
                width={member.imageWidth}
                height={member.imageHeight}
                style={{
                  position: "relative",
                  bottom: "-10px",
                }}
              />
              <VStack
                position="absolute"
                top="45%"
                left="190px"
                align="flex-start"
                spacing="2"
                mt="-50px"
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
                <Text fontSize="lg">{member.name}</Text>
                <Text color="#777" maxW="200px">
                  {member.role}
                </Text>
              </VStack>
              <Text
                as={Link}
                href={member.linkedinUrl}
                position="absolute"
                bottom="4"
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
          <a className="btn"></a>
        </VStack>
      </Container>
    </Box>
  );
}
