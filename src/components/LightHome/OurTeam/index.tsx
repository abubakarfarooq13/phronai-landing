import { advisors, drMarwan, teamMembers } from "@/components/TeamLight";
import { Box, Container, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Fade = require("react-reveal/Fade");

export default function OurTeam() {
  return (
    <Box
      py="50px"
      bgImage="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(232,239,252,1) 20%)"
    >
      <Container maxW="1240px">
        <Fade bottom>
          <Text
            as="h2"
            color="#321b7a"
            textAlign="center"
            fontWeight="bold"
            fontSize="3xl"
          >
            Our Team
          </Text>

          <Text
            fontSize={{ base: "base", "2340px": "base" }}
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

        {/* <Fade bottom>
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
        </Fade> */}
        <Fade bottom>
          <Wrap justify="center" spacing="3" w="full">
            {drMarwan.map((member) => (
              <WrapItem
                key={member.id}
                maxW={{
                  base: "140px",
                  xl: "230px",
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
                  <Text fontSize="16px" fontWeight={600} pt="4">
                    {member.name}
                  </Text>
                  <Text fontSize="14px" color="#8a8a8a">
                    {member.role}
                  </Text>
                </Box>
              </WrapItem>
            ))}
            {advisors.map((member) => (
              <WrapItem
                key={member.id}
                maxW={{
                  base: member.maxWidthM ? member.maxWidthM : "140px",
                  xl: member.maxWidth ? member.maxWidth : "230px",
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
                  >
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

        <Fade bottom>
          <VStack mt="10">
            <Text as={Link} href="/team" className="btn-grad">
              Meet all members
            </Text>
          </VStack>
        </Fade>
      </Container>
    </Box>
  );
}
