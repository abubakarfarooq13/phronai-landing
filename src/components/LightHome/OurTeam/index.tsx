import { advisors, teamMembers } from "@/components/TeamLight";
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
          <Text as="h2" fontSize="3xl" textAlign="center" pb="50px">
            Our Team
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
                maxW={{ base: "140px", xl: "240px" }}
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
                  <Image
                    src={member.image}
                    alt={member.name + " image"}
                    width={member.imageWidth}
                    height={member.imageWidth}
                    style={{ width: "100%" }}
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
              <WrapItem
                key={member.id}
                maxW={{ base: "140px", xl: "240px" }}
                w="full"
                textAlign="center"
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
                  <Image
                    src={member.image}
                    alt={member.name + " image"}
                    width={member.imageWidth}
                    height={member.imageWidth}
                    style={{ width: "100%" }}
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
