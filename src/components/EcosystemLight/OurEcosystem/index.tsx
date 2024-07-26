import {
  Box,
  VStack,
  Text,
  Image as CImage,
  Container,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const Fade = require("react-reveal/Fade");
const Ecosystem = () => {
  return (
    <>
      <Box
        overflowX={"hidden"}
        mt={{ base: "-300px", md: "-200px", lg: "-70px" }}
        backgroundImage={"/assets/ecosystemlight/bgsection2.png"}
        bgSize={"cover"}
        bgPos={"center"}
        // h={"90vh"}
      >
        <Container maxW={"1160px"}>
          <Fade bottom>
            <Box
              py={{ base: "50px", md: "50px", lg: "100px" }}
              display={{ base: "grid", md: "grid", lg: "flex" }}
              justifyContent={{ base: "center", md: "center" }}
              color={"#000"}
              gap={{ base: "10px", md: "0px", lg: "20px" }}
              width={"full"}
              height={"full"}
            >
              <Stack
                direction={{ base: "column", lg: "row" }}
                pt="3"
                // mt={"10"}
                // spacing="12"
                // w="70%"
              >
                <VStack
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={{ base: "center", lg: "start" }}
                  textAlign={"start"}
                  // width={"full"}
                  // height={"full"}
                >
                  <Text
                    lineHeight={"50px"}
                    fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}
                    fontWeight={"600"}
                  >
                    Phron Explorer
                  </Text>
                  <Text fontSize={"sm"}>
                    Check out all the information our blockchain provides
                  </Text>
                  <Text
                    fontSize={"xl"}
                    fontWeight={600}
                    display={"flex"}
                    lineHeight={"50px"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    Explorer live <IoArrowForwardCircleOutline size={30} />
                  </Text>
                </VStack>
              </Stack>
              <CImage
                mr={{ base: "0px", md: "", lg: "-400px" }}
                ml={{ base: "100px", md: "150px", lg: "0px" }}
                mt={{ base: "40px", md: "50px", lg: "0px" }}
                position={"relative"}
                src="/assets/ecosystemlight/section2.png"
                alt="section2"
                height={{ base: "350px", md: "400px" }}
                width={{ base: "800px", md: "900px", lg: "1000px" }}
              />
            </Box>
          </Fade>
        </Container>
      </Box>
      <Box
        overflowX={"hidden"}
        // mt={"-70px"}
        py={{ base: "50px", md: "100px", lg: "100px" }}
        backgroundImage={"/assets/ecosystemlight/bgsection33.png"}
        bgSize={"cover"}
        justifyContent={"center"}
        bgPos={"center"}
        height={"full"}
        // h={{ lg: "90vh" }}
      >
        <Container maxW={"1160px"}>
          <Fade bottom>
            <Box
              py={"10px"}
              display={{ base: "grid", md: "grid", lg: "flex" }}
              justifyContent={{ base: "center", md: "center" }}
              gap={{ base: "30px", md: "60px", lg: "20px" }}
              height={"full"}
              width={"full"}
              color={"#000"}
            >
              <CImage
                ml={{ base: "30px", md: "30px", lg: "-180px" }}
                width={{ base: "450px", md: "700px", lg: "600px" }}
                position={"relative"}
                src="/assets/ecosystemlight/section3.png"
                alt="section3"
              />
              <Stack
                direction={{ base: "column", lg: "row" }}
                // pt="3"
                // mt={"10"}
                pl={{ lg: "20px" }}
                // spacing="12"
                // w="100%"
              >
                <VStack
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={{ base: "center", lg: "start" }}
                  textAlign={"start"}
                >
                  <Text
                    lineHeight={"1.2"}
                    fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}
                    fontWeight={"600"}
                  >
                    Phron AI Cross
                    <br />
                    Chain Bridge
                  </Text>
                  <Text fontSize={{ md: "sm", lg: "sm" }}>
                    Bridge your assets with ease from <br />
                    one chain to another
                  </Text>
                  <Text
                    fontSize={"xl"}
                    fontWeight={600}
                    display={"flex"}
                    lineHeight={"50px"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    Bridge live <IoArrowForwardCircleOutline size={30} />
                  </Text>
                </VStack>
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>
      <Box
        h={{ lg: "90vh" }}
        overflowX={"hidden"}
        overflowY={"hidden"}
        // mt={"-50px"}
        py={{ base: "100px", md: "100px", lg: "0px" }}
        backgroundImage={"/assets/ecosystemlight/bgsection4.png"}
        bgSize={"cover"}
        bgPos={"center"}
      >
        <Container maxW={"1160px"}>
          <Fade bottom>
            <Box
              pl={{ lg: "80px" }}
              mt={{ lg: "-50px" }}
              display={{ base: "grid", md: "grid", lg: "flex" }}
              justifyContent={{ base: "center", md: "center" }}
              gap={{ base: "10px", md: "0px", lg: "20px" }}
              height={"full"}
              width={"full"}
              color={"#000"}
            >
              <Stack
                direction={{ base: "column", lg: "row" }}
                pt={{ lg: "10" }}
                mt={{ lg: "12" }}
                // spacing="12"
                // w="100%"
              >
                <VStack
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={{ base: "center", lg: "start" }}
                  textAlign={"start"}
                >
                  <Text
                    lineHeight={"1.2"}
                    fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}
                    fontWeight={"600"}
                    textAlign={{ base: "center", md: "center", lg: "start" }}
                  >
                    Phron AI
                    <br />
                    Decentralized Exchange
                  </Text>
                  <Text fontSize={"sm"}>
                    Enjoy a seamless transition between PHRON and your favorite
                    token
                  </Text>
                  <Text
                    fontSize={"xl"}
                    fontWeight={600}
                    display={"flex"}
                    lineHeight={"50px"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    Exchange live <IoArrowForwardCircleOutline size={30} />
                  </Text>
                </VStack>
              </Stack>
              <CImage
                ml={{ base: "80px", md: "110px", lg: "0px" }}
                mr={{ md: "", lg: "-200px" }}
                height={{ base: "380px", md: "500px", lg: "550px" }}
                width={{ base: "600px", md: "900px", lg: "900px" }}
                position={"relative"}
                src="/assets/ecosystemlight/section423.png"
                alt="section4"
              />
            </Box>
          </Fade>
        </Container>
      </Box>
    </>
  );
};

export default Ecosystem;
