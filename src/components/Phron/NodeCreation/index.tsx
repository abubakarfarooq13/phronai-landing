import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  VStack,
  Text,
  Image as CImage,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function NodeCreation() {
  return (
    <Box
      pos="relative"
      overflow="hidden"
      mt={{ base: "-150px", md: "0px" }}
      pb="100px"
      zIndex="10"
    >
      <Container maxW="1160px">
        <VStack align="center">
          <Fade bottom>
            <Text
              as="h2"
              fontSize={{ base: "4xl", md: "6xl", "3000px": "7xl" }}
              lineHeight={{ base: "40px", md: "60px", "3000px": "70px" }}
              fontWeight={500}
              mb={{ base: "3", "3000px": "5" }}
              textAlign="center"
            >
              {/* Node Creation */}
              Node Validators
            </Text>
            <Text
              maxW="800px"
              mx="auto"
              textAlign="center"
              mb="50px"
              fontSize={{ base: "lg", "3000px": "xl" }}
            >
              {/* With low metrics as inputs, there might be a chance of switching
              categories from super node to fast node or average node. Due to
              this, Phron AI encourages validators to participate in the network
              by block processing including maximum transactions. */}
              An initial reward curve is applied to reward node validators,
              providing a high incentive to motivate a higher decentralization
              level at early stages of the project. This model will be later on
              applied to PhronZero nodes as well in order to keep the security
              of the platform
            </Text>
          </Fade>

          <Fade bottom>
            <VStack>
              <Image
                src="/assets/phron/bag-with-coins-new.png"
                width={600}
                height={610}
                alt="an open bag with coins"
                className="infinit-move-1"
              />
            </VStack>
          </Fade>
        </VStack>
      </Container>
    </Box>
  );
}
