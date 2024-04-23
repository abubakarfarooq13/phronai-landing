import React, { useEffect, useRef } from "react";
import NextImage from "next/image";
import {
  Box,
  Button,
  Container,
  Stack,
  VStack,
  Text,
  Image as CImage,
  Link as CLink,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function Chain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // const canvas = document.querySelector("canvas#chain");

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      const img = new Image();
      img.src = "/assets/chain/chain.png";

      const PARTICLE_DIAMETER = 3;
      const particles: any[] = [];
      const darkeningFactor = 0.9; // This will darken the color by 20%
      const REPEL_RADIUS = 60;
      const REPEL_SPEED = 10;
      const REPEL_RETURN_SPEED = 0.15;
      const DISPLACEMENT_AMOUNT = 0.8; // Adjust this value as needed

      img.addEventListener("load", () => {
        if (canvasRef.current && ctx) {
          // making canvas size same as image
          // canvasRef.current.width = img.width;
          // canvasRef.current.height = img.height;
          canvasRef.current.width = 700;
          canvasRef.current.height = 900;

          // drawing image on canvas
          ctx.drawImage(img, 0, 0);

          // getting image data

          // 0,0 are top-left coordinates on the canvas
          const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

          const numRows = Math.round(img.height / PARTICLE_DIAMETER);
          const numColumns = Math.round(img.width / PARTICLE_DIAMETER);

          for (let row = 0; row < numRows; row++) {
            for (let column = 0; column < numColumns; column++) {
              const pixelIndex =
                (row * PARTICLE_DIAMETER * img.width +
                  column * PARTICLE_DIAMETER) *
                4;

              const red = imageData[pixelIndex];
              const green = imageData[pixelIndex + 1];
              const blue = imageData[pixelIndex + 2];
              const alpha = imageData[pixelIndex + 3];

              // if (Math.random() > 0.5) {

              // }
              // Calculate the average intensity
              // let intensity = (red + green + blue) / 3;

              // // Adjust saturation and brightness
              // let sharpenedR = red + (intensity - red) * 0.3;
              // let sharpenedG = green + (intensity - green) * 0.3;
              // let sharpenedB = blue + (intensity - blue) * 0.3;

              particles.push({
                x: Math.floor(Math.random() * numColumns * PARTICLE_DIAMETER),
                y: Math.floor(Math.random() * numRows * PARTICLE_DIAMETER),
                originX: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
                originY: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
                // color: `rgba(${128}, ${0}, ${128}, ${alpha / 255})`,
                color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`,
                //   color: `#381B82`,
              });
            }
          }

          drawParticles();
        }
      });

      // @ts-ignore
      function drawParticles() {
        if (canvasRef.current && ctx) {
          ctx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );

          particles.forEach((particle) => {
            // ctx.beginPath();
            // ctx.arc(
            //   particle.x,
            //   particle.y,
            //   PARTICLE_DIAMETER / 2,
            //   0,
            //   Math.PI * 2
            // );
            // ctx.fillStyle = particle.color;
            // ctx.fill();
            ctx.fillStyle = particle.color;
            ctx.fillRect(
              particle.x - PARTICLE_DIAMETER / 2, // x-coordinate of the top-left corner
              particle.y - PARTICLE_DIAMETER / 2, // y-coordinate of the top-left corner
              PARTICLE_DIAMETER, // width of the rectangle
              PARTICLE_DIAMETER // height of the rectangle
            );
          });

          requestAnimationFrame(drawParticles);
        }
        updateParticles();
      }

      let mouseX = Infinity;
      let mouseY = Infinity;

      if (canvasRef.current) {
        canvasRef.current.addEventListener("mousemove", function (event) {
          mouseX = event.offsetX;
          mouseY = event.offsetY;
        });

        canvasRef.current.addEventListener("mouseleave", function () {
          mouseX = Infinity;
          mouseY = Infinity;
        });
      }

      // @ts-ignore
      function updateParticles() {
        particles.forEach((particle) => {
          const distanceFromMouseX = mouseX - particle.x;
          const distanceFromMouseY = mouseY - particle.y;
          const distanceFromMouse = Math.sqrt(
            distanceFromMouseX ** 2 + distanceFromMouseY ** 2
          );

          if (distanceFromMouse < REPEL_RADIUS) {
            const angle = Math.atan2(distanceFromMouseY, distanceFromMouseX);
            const force = (REPEL_RADIUS - distanceFromMouse) / REPEL_RADIUS;

            // Invert the direction of movement
            const moveX = -Math.cos(angle) * force;
            const moveY = -Math.sin(angle) * force;

            particle.x += moveX * REPEL_SPEED; // Use addition instead of subtraction
            particle.y += moveY * REPEL_SPEED; // Use addition instead of subtraction
          } else if (
            particle.x !== particle.originX ||
            particle.y !== particle.originY
          ) {
            const distanceFromOriginX = particle.originX - particle.x;
            const distanceFromOriginY = particle.originY - particle.y;

            const distanceFromOrigin = Math.sqrt(
              distanceFromOriginX ** 2 + distanceFromOriginY ** 2
            );

            const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX);
            const moveX =
              Math.cos(angle) * distanceFromOrigin * REPEL_RETURN_SPEED;
            const moveY =
              Math.sin(angle) * distanceFromOrigin * REPEL_RETURN_SPEED;

            particle.x += moveX + 15;
            particle.y += moveY + 13;

            // Add small random displacement when returning to original position
            // particle.x += (Math.random() - 0.5) * DISPLACEMENT_AMOUNT;
            // particle.y += (Math.random() - 0.5) * DISPLACEMENT_AMOUNT;
          }
        });
      }
    }
  }, []);

  return (
    <Box id="nft-marketplace" pos="relative" overflow="hidden">
      <Box
        // bgImage="/assets/chain/chain-bg.png"
        // bgPos="center"
        // bgRepeat="no-repeat"
        // bgSize="cover"
        pos="relative"
        id="phronesis-marketplace"
      >
        <Container
          maxW="1160px"
          zIndex={1}
          position="relative"
          pb={{ base: "0px", md: "100px" }}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            pt={{ base: "40px", md: "100px" }}
            justifyContent="space-between"
            spacing="20"
          >
            <VStack
              zIndex={1}
              pt={{ md: "20px", lg: "100px" }}
              w={{ base: "full", md: "50%" }}
              align={{ base: "center", md: "start" }}
              spacing={{ base: "3", md: "6" }}
            >
              <Fade left>
                <Text
                  textTransform="uppercase"
                  fontSize="xs"
                  lineHeight={{ base: "15px", "3000px": "20px" }}
                  pl="1"
                  fontWeight={300}
                >
                  Proof-of-Concept
                </Text>

                <Text
                  as="h1"
                  fontSize={{
                    base: "27px",
                    sm: "4xl",
                    md: "6xl",
                    "3000px": "7xl",
                  }}
                  lineHeight={{
                    base: "39px",
                    sm: "40px",
                    md: "70px",
                    "3000px": "70px",
                  }}
                  fontWeight={500}
                  textAlign={{ base: "center", md: "start" }}
                >
                  {/* Phronesis:{" "} */}
                  Phron AI:{" "}
                  <Box as="br" display={{ base: "none", md: "block" }} /> Layer
                  1
                </Text>

                <Text
                  mt={{ base: "3", md: "0" }}
                  textAlign={{ base: "center", md: "start" }}
                  color="#c1c1c1"
                  fontSize="20px"
                >
                  {/* Blockchain + AI = No barriers */}
                  From Static, to Dynamic
                </Text>

                <Button
                  mt={{ base: "5", md: "0" }}
                  as={CLink}
                  href="https://phron.ai/whitepaper.pdf"
                  target="_blank"
                  variant="primary"
                  px="8"
                  py="4"
                  rounded="full"
                  fontSize={{ "3000px": "lg" }}
                >
                  Check our Whitepaper
                </Button>
              </Fade>
            </VStack>

            <Box
              h={{ base: "500px", md: "500px", xl: "800px" }}
              w={{ base: "full", md: "50%" }}
            >
              <Fade right>
                <VStack align="center" display={{ base: "flex", lg: "none" }}>
                  <Box maxW={{ base: "300px", md: "full" }}>
                    <NextImage
                      className="infinit-move-1"
                      src="/assets/chain/chain.png"
                      alt="marketplace-img"
                      width={500}
                      height={708}
                    />
                  </Box>
                </VStack>
              </Fade>

              <Box
                mt="-100px"
                ml="-100px"
                ref={canvasRef}
                as="canvas"
                display={{
                  base: "none",
                  lg: "block",
                }}
                id="chain"
              ></Box>
            </Box>
          </Stack>
          <Text
            textAlign="center"
            color="#c1c1c1"
            maxW="884px"
            mx="auto"
            mt="40px"
            fontSize={{ base: "base", md: "lg" }}
          >
            {/* Phron AI is the first EVM, Proof-of-Stake, Layer 1 blockchain that
            uses the Sophia Protocol (Artificial Intelligence Statistical
            Consensus Mechanism) and Indirect-LTFM (Low Transaction Fee
            Management) Protocol. */}
            Unlike conventional blockchain architectures, which rely solely on
            static rules and consensus mechanisms, the Phron AI Chain harnesses
            the power of AI to adapt and optimize its operations in real-time.
            This dynamic approach not only enhances the efficiency and
            responsiveness of the network but also fortifies its security
            against evolving threats
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
