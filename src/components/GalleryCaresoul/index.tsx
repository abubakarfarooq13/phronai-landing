"use client";

import { useState } from "react";
import {
  Box,
  Text,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, ViewIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function GalleryCarousel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<number>(0);

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
      aspectRatio: "portrait",
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
    {
      src: "/assets/gallery/8.png",
      alt: "Gallery image 8",
      aspectRatio: "landscape",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    onOpen();
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % imageFiles.length);
    } else {
      setSelectedImage(
        (selectedImage - 1 + imageFiles.length) % imageFiles.length
      );
    }
  };

  return (
    <Box py={12} px={4} maxW="1200px" mx="auto">
      <Box textAlign="center" mb={8}>
        <Text
          as="h1"
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight={500}
          color="#321b7a"
          mb={2}
        >
          Gallery
        </Text>
        <Text fontSize={{ base: "18px", md: "24px" }} color="#321b7a">
          Phron AI in Action - Events, Innovation & Community
        </Text>
      </Box>

      {/* CSS Column-based Masonry Layout */}
      <Box
        sx={{
          columnCount: { base: 1, sm: 2, md: 3, lg: 4 },
          columnGap: "16px",
          width: "100%",
        }}
      >
        {imageFiles.map((image, index) => (
          <Box
            key={index}
            mb="16px"
            display="inline-block"
            w="100%"
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.02)" }}
          >
            <Box
              position="relative"
              width="100%"
              paddingBottom={
                image.aspectRatio === "portrait" ? "133.33%" : "56.25%"
              }
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "14px" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <Box
                  position="absolute"
                  inset="0"
                  bg="blackAlpha.0"
                  _hover={{ bg: "blackAlpha.300" }}
                  transition="all 0.3s"
                  opacity="0"
                  // @ts-ignore
                  // _hover={{ opacity: 1 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="14px"
                >
                  <IconButton
                    aria-label="View image"
                    icon={<ViewIcon />}
                    onClick={() => openLightbox(index)}
                    colorScheme="whiteAlpha"
                    variant="solid"
                    rounded="full"
                    size="md"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent
          bg="transparent"
          boxShadow="none"
          maxW="100vw"
          maxH="100vh"
        >
          <ModalCloseButton
            color="white"
            bg="blackAlpha.200"
            _hover={{ bg: "blackAlpha.400" }}
            rounded="full"
            size="lg"
            position="absolute"
            top={4}
            right={4}
            zIndex={2}
          />
          <ModalBody
            p={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              position="relative"
              w="100%"
              h="100vh"
              alignItems="center"
              justifyContent="center"
            >
              {/* Main Image */}
              <Box position="relative" w="50%" h="80vh" maxW="1600px">
                {selectedImage !== null && (
                  <Image
                    src={imageFiles[selectedImage].src || "/placeholder.svg"}
                    alt={imageFiles[selectedImage].alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="100vw"
                  />
                )}
              </Box>

              {/* Navigation Controls */}
              <Flex
                position="absolute"
                w="100%"
                justifyContent="space-between"
                px={4}
              >
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon boxSize={8} />}
                  onClick={() => navigateImage("prev")}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  rounded="full"
                  size="lg"
                />
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon boxSize={8} />}
                  onClick={() => navigateImage("next")}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  rounded="full"
                  size="lg"
                />
              </Flex>

              {/* Image Counter */}
              <Box
                position="absolute"
                bottom={4}
                left={0}
                right={0}
                textAlign="center"
              >
                <Text color="white" fontWeight="medium">
                  {`${selectedImage + 1} / ${imageFiles.length}`}
                </Text>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
