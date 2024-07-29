import {
  Box,
  Container,
  Text,
  VStack,
  Image as CImage,
  Stack,
  Button,
} from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const Fade = require("react-reveal/Fade");

const EcosystemHero = () => {
  return (
    <>
      <Box
        overflowX={"hidden"}
        mt={{ base: "0px", md: "100px" }}
        backgroundImage={"/assets/ecosystemlight/backgroundhero.jpg"}
        bgSize={"cover"}
        bgPos={"center"}
        h={{ base: "full", md: "full", lg: "full" }}
        overflow={"hidden"}
      >
        <Container maxW={"1240px"}>
          <Fade bottom>
            <Box
              pl={{ md: "0px", lg: "0px" }}
              display={{ base: "block", md: "grid", lg: "flex" }}
              justifyContent={{ base: "center", md: "center" }}
              gap={{ lg: "80px" }}
              color={"#000"}
              // gap={{ lg: "20px" }}
              width={"full"}
              height={"full"}
            >
              <VStack
                w={{ base: "100%", md: "100%", lg: "50%" }}
                align={{ base: "center", lg: "start" }}
                h="100%"
                pt={"130px"}
                // pt={{
                //   base: "0px",
                //   "2560px": "100px",
                //   "3400px": "250px",
                //   "4000px": "300px",
                // }}
                // zIndex={99}/
              >
                <Text
                  fontSize={{ base: "2xl", md: "3xl", lg: "xl" }}
                  lineHeight="15px"
                  pl="1"
                  // mt={"-25px"}
                  fontWeight={600}
                  letterSpacing="2px"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Discover Our
                </Text>

                <Text
                  as="h1"
                  textAlign={{ base: "center", lg: "left" }}
                  fontSize={{ base: "5xl", md: "6xl", "3000px": "7xl" }}
                  fontWeight={500}
                  lineHeight={{ base: "50px", md: "60px", "3000px": "70px" }}
                >
                  Phron AI <br /> Ecosystem
                </Text>

                <Text
                  pt="3"
                  fontSize={{ base: "15px", md: "base", "3000px": "xl" }}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  The best gadgets for the best Web 3.0 experience
                </Text>

                <Stack
                  direction={{ base: "column", lg: "row" }}
                  pt="3"
                  mt={"10"}
                  // spacing="12"
                  // w="100%"
                >
                  <Text
                    cursor={"pointer"}
                    w="full"
                    style={{ whiteSpace: "nowrap" }}
                    // variant="primary-purple"
                    className="btn-grad"
                    // px={{ base: "7", md: "10", lg: "55px" }}
                    // py={{ base: "2", md: "5" }}
                    rounded="xl"
                    fontWeight={"500"}
                    fontSize={"sm"}
                  >
                    Discover our Ecosystem
                  </Text>
                  <Button
                    w="full"
                    color={"#000"}
                    variant="ghost"
                    px={{ base: "7", md: "10", lg: "10px" }}
                    py={{ base: "2", md: "5", lg: "6" }}
                    _hover={{
                      background: "transparent",
                    }}
                    rightIcon={<IoArrowForwardCircleOutline size={25} />}
                  >
                    Explore Ecosystem
                  </Button>
                </Stack>
              </VStack>

              <CImage
                ml={{ lg: "-90px" }}
                // mt={{ md: "-60px", lg: "-70px" }}
                mt={{ md: "30px", lg: "60px" }}
                position={"relative"}
                display={{ base: "flex", md: "flex", lg: "flex" }}
                mixBlendMode={"multiply"}
                style={{ zIndex: "-1", mixBlendMode: "multiply" }}
                src="/assets/ecosystemlight/hero.png"
                alt="hero"
                height={{ lg: "full" }}
                width={{ base: "700px", md: "600px", lg: "450px" }}
              />
            </Box>
          </Fade>
        </Container>
        <Box>
          <Fade bottom>
            <Container
              my={{ lg: "150px" }}
              mb={{ md: "150px" }}
              display={{ base: "grid", md: "grid", lg: "flex" }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              style={{ zIndex: "2" }}
              gridGap={{ base: "20px", md: "20px" }}
              gridRowGap={{ md: "30px" }}
              maxW={"1100px"}
              mt={{ base: "20px", md: "80px", lg: "80px" }}
              justifyContent={{ md: "center", lg: "space-between" }}
            >
              <Box
                height={"80px"}
                maxH={"80px"}
                bg={"#fff"}
                minW={"350px"}
                display={"flex"}
                alignItems={"center"}
                py={"20px"}
                px={"25px"}
                borderRadius={"xl"}
                gap={"30px"}
              >
                <Box
                  bg={"#d8ddfd"}
                  borderRadius={"xl"}
                  height={"50px"}
                  px={"12px"}
                  py={"15px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <CImage
                    width={"30px"}
                    height={"30px"}
                    src={"/assets/ecosystemlight/decentralized.png"}
                    alt="decentralized"
                  />
                </Box>
                <Box display={"flex"} flexDir={"column"} gap={"8px"}>
                  <CImage
                    width={"55px"}
                    src={"/assets/ecosystemlight/phroneai.png"}
                    alt="PhroneAi"
                  />
                  <Text fontWeight={"600"}>Decentralized Exchange</Text>
                </Box>
              </Box>
              <Box
                height={"80px"}
                maxH={"80px"}
                bg={"#fff"}
                minW={"350px"}
                display={"flex"}
                alignItems={"center"}
                py={"20px"}
                px={"25px"}
                borderRadius={"xl"}
                gap={"30px"}
              >
                <Box
                  bg={"#d8ddfd"}
                  borderRadius={"xl"}
                  h={"50px"}
                  px={"12px"}
                  py={"15px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <CImage
                    width={"30px"}
                    height={"30px"}
                    src={"/assets/ecosystemlight/crosschain.png"}
                    alt="crosschain"
                  />
                </Box>
                <Box display={"flex"} flexDir={"column"} gap={"8px"}>
                  <CImage
                    width={"55px"}
                    src={"/assets/ecosystemlight/phroneai.png"}
                    alt="PhroneAi"
                  />
                  <Text fontWeight={"600"}>Cross Chain Bridge</Text>
                </Box>
              </Box>
              <Box
                height={"80px"}
                maxH={"80px"}
                bg={"#fff"}
                minW={"350px"}
                display={"flex"}
                alignItems={"center"}
                py={"20px"}
                px={"25px"}
                borderRadius={"xl"}
                gap={"30px"}
              >
                <Box
                  bg={"#d8ddfd"}
                  borderRadius={"xl"}
                  h={"50px"}
                  px={"12px"}
                  py={"15px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <CImage
                    width={"30px"}
                    height={"30px"}
                    src={"/assets/ecosystemlight/explorer.png"}
                    alt="explorer"
                  />
                </Box>
                <Box display={"flex"} flexDir={"column"} gap={"8px"}>
                  <CImage
                    width={"55px"}
                    src={"/assets/ecosystemlight/phroneai.png"}
                    alt="PhroneAi"
                  />
                  <Text fontWeight={"600"}>Explorer</Text>
                </Box>
              </Box>
            </Container>
          </Fade>
        </Box>
      </Box>
    </>
  );
};

export default EcosystemHero;
