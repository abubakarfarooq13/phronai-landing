import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  HStack,
  Stack,
  VStack,
  Text,
  Image as CImage,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function PhronesisMarketplace() {
  const nftMarketPlaces = React.useMemo(
    () => [
      {
        id: "01",
        iconSrc: "/assets/nft-marketplace/1.png",
        description:
          "Our proprietary connection system between NFT marketplace and the Metaverse truly differentiates us from the rest of the world.",
      },
      {
        id: "02",
        iconSrc: "/assets/nft-marketplace/2.png",
        description:
          "The proprietary technology allows NFT purchases to reflect the metaverse.",
      },
      {
        id: "03",
        iconSrc: "/assets/nft-marketplace/3.png",
        description:
          "With such momentum of the metaverse, the business model for virtual worlds - underpinnedby NFT technology - promises yet untold economies of scale.",
      },
      {
        id: "04",
        iconSrc: "/assets/nft-marketplace/4.png",
        description:
          "NFTs enable the property transactions that drive the metaverse. These tokens provide indisputable proof of ownership that is more secure than any land deed.",
      },
    ],
    []
  );

  return (
    <Box
      id="nft-marketplace"
      pos="relative"
      overflow="hidden"
      _after={{
        content: `''`,
        pos: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        top: "0px",
        left: "0px",
        opacity: ".5",
        displace: { base: "block", lg: "none" },
      }}
    >
      {/* <CImage
        src="/assets/marketplace-bg-shadow.png"
        pos="absolute"
        top={{ base: "-300px", md: "0px" }}
        left={{ base: "0px", md: "0px" }}
        h={{ base: "full", md: "auto" }}
        zIndex="1"
        display={{ base: "none", lg: "block" }}
      /> */}
      <Box
        bgImage="/assets/nft-marketplace/bg-image.jpg"
        bgPos={{ base: "center", md: "left" }}
        bgRepeat="no-repeat"
        bgSize={{ "2560px": "cover" }}
        pos="relative"
        id="phronesis-marketplace"
      >
        <Container maxW="1160px">
          <Stack
            direction={{ base: "column", md: "row" }}
            pt={{ base: "50px", md: "100px" }}
            pb="100px"
            justifyContent="space-between"
            spacing="20"
          >
            <VStack
              zIndex={1}
              pt={{ lg: "100px" }}
              w={{ base: "full", md: "50%" }}
              align="start"
              spacing="6"
            >
              <Fade left>
                <Text
                  textTransform="uppercase"
                  fontSize={{ base: "xs", "3000px": "lg" }}
                  lineHeight={{ base: "15px" }}
                  pl="1"
                  fontWeight={300}
                >
                  Ownership: The new gaming standard
                </Text>

                <Text
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl", "3000px": "7xl" }}
                  lineHeight={{ base: "40px", md: "60px", "3000px": "70px" }}
                  fontWeight={500}
                >
                  NFT Marketplace
                </Text>

                <Text
                  color="#c1c1c1"
                  fontSize={{ base: "base", "3000px": "xl" }}
                >
                  By owning your NFTs, you decide. Keep them, trade them, sell
                  them. Everything you want in the same place.
                </Text>

                {/* <Button variant="primary" px="8" py="4" rounded="full">
                  Contact Us
                </Button> */}
              </Fade>
            </VStack>

            {/* <CImage
              src="/assets/marketplace-bg-shadow.png"
              pos="absolute"
              top="0"
              left={{ base: "0px", md: "100px" }}
              h={{ base: "full", md: "auto" }}
            /> */}

            <Box zIndex="1">
              <Fade right>
                <Image
                  className="infinit-move-1"
                  src="/assets/marketplace-img.png"
                  alt="marketplace-img"
                  width={307}
                  height={354}
                />
              </Fade>
            </Box>
          </Stack>

          {/* Connecting NFT marketplace with Metaverse */}
        </Container>
      </Box>
      {/* <Box id="nft" py="100px" bgImage="/assets/nft-marketplace-bg-img.png">
        <Container maxW="1160px">
          <Box pt="50px" zIndex="999" pos="relative">
            <Fade bottom>
              <Text
                as="h2"
                fontSize={{ base: "4xl", md: "5xl" }}
                lineHeight={{ base: "40px", md: "60px" }}
                textAlign="center"
                fontWeight={500}
                maxW="700px"
                mx="auto"
              >
                Connecting NFT marketplace with Metaverse
              </Text>
            </Fade>
          </Box>

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            mt="70px"
            columnGap="30px"
            rowGap="100px"
          >
            {nftMarketPlaces.map((el, i) => (
              <GridItem key={el.id}>
                <Fade bottom>
                  <VStack px="70px">
                    <Image
                      src={el.iconSrc}
                      alt={`nft-icon-${i}`}
                      width={100}
                      height={100}
                    />
                    <Text textAlign="center" color="#c1c1c1">
                      {el.description}
                    </Text>
                  </VStack>
                </Fade>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box> */}
    </Box>
  );
}
