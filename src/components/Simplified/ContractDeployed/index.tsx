"use client";

import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  Heading,
  Card,
  CardBody,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { FaFileContract, FaLink } from "react-icons/fa";
import { formatAddress, copyToClipboard } from "@/utils/helpers";
import { getDeployedContracts, type DeployedContract } from "@/utils/api";
import Image from "next/image";
import networks from "./chains";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";

export default function ContractsTable() {
  const [contracts, setContracts] = useState<DeployedContract[]>([]);
  const [totalContracts, setTotalContracts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const limit = 7;

  const bgGradient = "linear(to-r, purple.500, indigo.600)";
  const tableBg = useColorModeValue("white", "gray.800");
  const headerBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("black", "white");
  const textColorAlpha = useColorModeValue("#321b7a", "whiteAlpha.800");

  useEffect(() => {
    fetchContracts(currentPage);
  }, [currentPage]);

  async function fetchContracts(page: number) {
    try {
      setIsLoading(true);
      const data = await getDeployedContracts(page, limit);
      setContracts(data.data);
      setTotalContracts(data.totalContracts);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch contracts. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = async (address: string) => {
    await copyToClipboard(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const tableBgValue = useColorModeValue("white", "gray.700"); // Moved useColorModeValue call outside the conditional rendering
  const hoverBgValue = useColorModeValue("gray.50", "gray.700"); // Moved useColorModeValue call outside the conditional rendering
  const buttonBg = useColorModeValue("whiteAlpha.100", "whiteAlpha.50"); // Moved useColorModeValue call outside the conditional rendering
  const buttonHoverBg = useColorModeValue("whiteAlpha.200", "whiteAlpha.100"); // Moved useColorModeValue call outside the conditional rendering

  if (error) {
    return (
      <Text textAlign="center" color="red.500">
        {error}
      </Text>
    );
  }

  return (
    <Box
      id="deployed-contracts"
      // maxW="960px"
      mx="auto"
      px={{ base: 4, xl: 0 }}
      position="relative"
      color="#321b7a"
    >
      <Box
        // m="10px"
        bgImage="/assets/simplified/total-contract-bg.png"
        bgSize="cover"
        width="100%"
        bgPosition="right"
        py="4"
        px="8"
        rounded="35px"
      >
        {/* <Image
          src=""
          alt="total-contract-bg"
          width={600}
          height={300}
        /> */}

        <HStack justifyContent="space-between" left={10}>
          <Text
            color="#321c75"
            lineHeight="100%"
            fontSize="3xl"
            fontWeight="500"
          >
            Contract
            <br /> Deployed
          </Text>

          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            mr={{ base: "", md: "180px" }}
          >
            <Text fontSize="base" fontWeight={600} color="#321b7a" mb={1}>
              Total Contract
            </Text>
            <Box
              border="1px"
              borderColor="#f7d8fe"
              rounded="full"
              textAlign="center"
              fontWeight={500}
              fontSize="50px"
              px="20px"
              color={{ base: "white", md: "#321b7a" }}
            >
              <Text>{totalContracts}</Text>
            </Box>
          </Flex>
        </HStack>
      </Box>
      {isLoading ? (
        <Flex minH="300px" alignItems="center" justifyContent="center">
          <Spinner size="md" />
        </Flex>
      ) : (
        <>
          <Box
            m={{ md: "10px" }}
            p={{ base: "10px", md: "20px" }}
            mt="5"
            bg="white"
            shadow="md"
            rounded="20px"
          >
            <Box
              overflowX="auto"
              // mt="5"
              bg="white"
              rounded="20px"
              border="1px solid #e8e8e8"
            >
              <Table variant="simple">
                <Thead>
                  <Tr bg={headerBg}>
                    <Th
                      textAlign="center"
                      fontWeight="bold"
                      py="2"
                      borderTopLeftRadius="lg"
                      color="#321b7a"
                    >
                      User Address
                    </Th>
                    <Th
                      textAlign="center"
                      fontWeight="bold"
                      py="2"
                      color="#321b7a"
                    >
                      Contract Address
                    </Th>
                    <Th
                      textAlign="center"
                      fontWeight="bold"
                      py="2"
                      borderTopRightRadius="lg"
                      color="#321b7a"
                    >
                      Network
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contracts.map((contract) =>
                    contract.address ? (
                      <Tr
                        key={contract._id}
                        bg={tableBgValue}
                        _hover={{ bg: hoverBgValue }}
                      >
                        {" "}
                        {/* Use pre-calculated values */}
                        <Td textAlign="center" fontFamily="mono" py="2">
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            gap="2"
                          >
                            <Text fontSize="sm" color={textColorAlpha}>
                              {formatAddress(contract.userAddress)}
                            </Text>
                            <IconButton
                              aria-label="Copy address"
                              icon={
                                copiedAddress === contract.userAddress ? (
                                  <CheckIcon color="#321b7a" />
                                ) : (
                                  <CopyIcon color="#321b7a" />
                                )
                              }
                              onClick={() => handleCopy(contract.userAddress)}
                              size="xs"
                              variant="ghost"
                            />
                          </Flex>
                        </Td>
                        <Td
                          textAlign="center"
                          minW="180px"
                          fontFamily="mono"
                          py="2"
                        >
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            gap="2"
                          >
                            <Text fontSize="sm" color={textColorAlpha}>
                              {formatAddress(contract.address)}
                            </Text>
                            <IconButton
                              aria-label="Copy address"
                              icon={
                                copiedAddress === contract.address ? (
                                  <CheckIcon color="#321b7a" />
                                ) : (
                                  <CopyIcon color="#321b7a" />
                                )
                              }
                              onClick={() => handleCopy(contract.address)}
                              size="xs"
                              variant="ghost"
                            />
                            <IconButton
                              as={Link}
                              href={
                                networks[contract?.chainId].explorer
                                  ? `${
                                      networks[contract.chainId].explorer
                                    }/address/${contract.address}#code`
                                  : undefined
                              }
                              target="_blank"
                              aria-label="explore address"
                              icon={<IoIosLink color="#321b7a" size={15} />}
                              size="xs"
                              variant="ghost"
                            />
                          </Flex>
                        </Td>
                        <Td textAlign="center" minW="180px" py="2">
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            gap="2"
                          >
                            <Box
                              w="2"
                              h="2"
                              borderRadius="full"
                              // bg={networkColors[contract.chainId] || "gray.400"}
                            />
                            <Box rounded="full" overflow="hidden" p="1">
                              <Image
                                alt="logo"
                                width={15}
                                height={15}
                                src={
                                  networks[contract.chainId].icon
                                    ? networks[contract.chainId].icon
                                    : "/circle-help.png"
                                }
                              />
                            </Box>
                            <Text fontSize="sm" color={textColorAlpha}>
                              {networks[contract.chainId].name}
                            </Text>
                          </Flex>
                        </Td>
                      </Tr>
                    ) : null
                  )}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </>
      )}

      <Flex
        alignItems="center"
        justifyContent="space-between"
        fontSize="sm"
        mt="4"
      >
        <Box />
        <HStack spacing="1">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevPage}
            isDisabled={currentPage === 1}
            leftIcon={<ChevronLeftIcon />}
            bg={buttonBg}
            _hover={{ bg: buttonHoverBg }}
            transition="colors 0.2s"
          />
          <Text px="2">
            {currentPage} of {totalPages}
          </Text>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages}
            rightIcon={<ChevronRightIcon />}
            bg={buttonBg}
            _hover={{ bg: buttonHoverBg }}
            transition="colors 0.2s"
          />
        </HStack>
      </Flex>
    </Box>
  );
}
