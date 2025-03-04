"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  HStack,
  AspectRatio,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function GalleryCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Original images array
  const imageFiles = [
    {
      src: "/assets/gallery/1.png",
      alt: "Gallery image 1",
      aspectRatio: "portrait",
    },
    {
      src: "/assets/gallery/2.png",
      alt: "Gallery image 2",
      aspectRatio: "landscape",
    },
    {
      src: "/assets/gallery/3.png",
      alt: "Gallery image 3",
      aspectRatio: "landscape",
    },
    {
      src: "/assets/gallery/4.png",
      alt: "Gallery image 4",
      aspectRatio: "portrait",
    },
    {
      src: "/assets/gallery/5.png",
      alt: "Gallery image 5",
      aspectRatio: "landscape",
    },
    {
      src: "/assets/gallery/6.png",
      alt: "Gallery image 6",
      aspectRatio: "landscape",
    },
    {
      src: "/assets/gallery/7.png",
      alt: "Gallery image 7",
      aspectRatio: "portrait",
    },
  ];

  // Reorganize images into slides
  const slides = [
    // Slide 1: Image 1 (portrait)
    [{ type: "single", image: imageFiles[0] }],

    // Slide 2: Images 2-3 (landscape) in column
    [
      {
        type: "column",
        images: [imageFiles[1], imageFiles[2]],
      },
    ],

    // Slide 3: Image 4 (portrait)
    [{ type: "single", image: imageFiles[3] }],

    // Slide 4: Images 5-6 (landscape) in column
    [
      {
        type: "column",
        images: [imageFiles[4], imageFiles[5]],
      },
    ],

    // Slide 5: Image 7 (portrait)
    [{ type: "single", image: imageFiles[6] }],
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentPage((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentPage(index);
  };

  // Auto-scroll effect
  //   useEffect(() => {
  //     if (isHovering) return;

  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, [isHovering]);

  return (
    <Box py={12} px={4} maxW="1200px" mx="auto">
      <Box textAlign="center" mb={8}>
        <Heading as="h1" fontSize="5xl" color="purple.900" mb={2}>
          Gallery
        </Heading>
        <Text fontSize="lg" color="purple.800">
          Phron AI in Action - Events, Innovation & Community
        </Text>
      </Box>

      <Box
        position="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Flex
          ref={carouselRef}
          overflowX="hidden"
          width="100%"
          position="relative"
          px={2}
        >
          <Flex
            width={`${totalSlides * 100}%`}
            transition="transform 0.5s ease"
            style={{
              transform: `translateX(-${currentPage * (100 / totalSlides)}%)`,
            }}
          >
            {slides.map((slide, slideIndex) => (
              <Box key={slideIndex} width={`${100 / totalSlides}%`} p={2}>
                <Flex height="100%" gap={4}>
                  {slide.map((item, itemIndex) => (
                    <Box
                      key={itemIndex}
                      width="100%"
                      height="100%"
                      borderRadius="xl"
                      overflow="hidden"
                      //   boxShadow="md"
                    >
                      {item.type === "single" ? (
                        // Single image (portrait)
                        <AspectRatio ratio={3 / 4} width="100%" height="100%">
                          <Image
                            // @ts-ignore
                            src={item.image.src || "/placeholder.svg"}
                            // @ts-ignore
                            alt={item.image.alt}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </AspectRatio>
                      ) : (
                        // Column of 2 landscape images
                        <Flex direction="column" height="100%" gap={4}>
                          {/* @ts-ignore */}
                          {item.images.map((image, imgIndex) => (
                            <Box
                              key={imgIndex}
                              height="calc(50% - 8px)"
                              borderRadius="xl"
                              overflow="hidden"
                            >
                              <AspectRatio
                                ratio={16 / 9}
                                width="100%"
                                height="100%"
                              >
                                <Image
                                  src={image.src || "/placeholder.svg"}
                                  alt={image.alt}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              </AspectRatio>
                            </Box>
                          ))}
                        </Flex>
                      )}
                    </Box>
                  ))}
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>

        {/* Navigation Arrows */}
        <IconButton
          aria-label="Previous slide"
          icon={<ChevronLeftIcon />}
          position="absolute"
          left={2}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={prevSlide}
          display={{ base: "none", md: "flex" }}
          colorScheme="purple"
          variant="solid"
          rounded="full"
          opacity={isHovering ? 0.8 : 0}
          transition="opacity 0.3s"
        />
        <IconButton
          aria-label="Next slide"
          icon={<ChevronRightIcon />}
          position="absolute"
          right={2}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          onClick={nextSlide}
          display={{ base: "none", md: "flex" }}
          colorScheme="purple"
          variant="solid"
          rounded="full"
          opacity={isHovering ? 0.8 : 0}
          transition="opacity 0.3s"
        />
      </Box>

      {/* Dots Navigation */}
      <HStack justify="center" mt={6} spacing={1.5}>
        {Array.from({ length: 1 }).map((_, index) => (
          <Box
            key={index}
            h="2px"
            w={currentPage === index ? "24px" : "8px"}
            bg={currentPage === index ? "purple.700" : "purple.200"}
            borderRadius="full"
            cursor="pointer"
            transition="all 0.3s"
            onClick={() => goToSlide(index)}
          />
        ))}
      </HStack>
    </Box>
  );
}
