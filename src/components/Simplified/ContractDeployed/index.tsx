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
import { FaFileContract } from "react-icons/fa";
import { formatAddress, copyToClipboard } from "@/utils/helpers";
import { getDeployedContracts, type DeployedContract } from "@/utils/api";
import Image from "next/image";

const networkColors: { [key: string]: string } = {
  "1": "blue.400",
  "11155111": "gray.400",
  "42161": "blue.500",
  "421614": "blue.300",
  "99999": "pink.400",
  "80085": "yellow.400",
  "99998": "yellow.500",
  "288": "green.400",
  "28882": "green.300",
  "1313161554": "teal.400",
  "1313161555": "teal.300",
  "43114": "red.400",
  "8453": "purple.400",
  "84532": "purple.300",
  "56": "orange.400",
  "25": "orange.500",
  "338": "orange.300",
  "9001": "cyan.400",
  "9000": "cyan.300",
  "250": "indigo.400",
  "4002": "indigo.300",
  "100": "green.500",
  "10200": "green.600",
  "1666600000": "purple.500",
  "1337": "gray.500",
  "8217": "orange.600",
  "1088": "teal.500",
  "1284": "pink.500",
  "10": "red.500",
  "1101": "purple.500",
  "137": "yellow.500",
  "2345678": "gray.600",
  "57": "blue.600",
  "40": "green.600",
  "324": "purple.600",
  "300": "orange.600",
  "17000": "teal.600",
};

const networkNames: { [key: string]: string } = {
  "1": "Ethereum",
  "11155111": "Sepolia",
  "42161": "Arbitrum",
  "421614": "Arbitrum Sepolia",
  "99999": "Phron AI Testnet",
  "80085": "Berachain",
  "99998": "Berachain Artio",
  "288": "Boba Network",
  "28882": "Boba Sepolia",
  "1313161554": "Aurora",
  "1313161555": "Aurora Testnet",
  "43114": "Avalanche",
  "8453": "Base",
  "84532": "Base Sepolia",
  "56": "BSC",
  "25": "Cronos Mainnet",
  "338": "Cronos Testnet",
  "9001": "Evmos",
  "9000": "Evmos Testnet",
  "250": "Fantom",
  "4002": "Fantom Testnet",
  "100": "Gnosis",
  "10200": "Gnosis Chiado",
  "1666600000": "Harmony One",
  "1337": "Hyperledger Besu",
  "8217": "Klaytn",
  "1088": "Metis",
  "1284": "Moonbeam",
  "10": "Optimism",
  "1101": "Polygon zkEVM",
  "137": "Polygon",
  "2345678": "StarkNet",
  "57": "Syscoin Mainnet",
  "40": "Telos",
  "324": "zkSync",
  "300": "ZKsync Sepolia Testnet",
  "17000": "Holesky",
};

export default function ContractsTable() {
  const [contracts, setContracts] = useState<DeployedContract[]>([]);
  const [totalContracts, setTotalContracts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const limit = 10;

  const bgGradient = "linear(to-r, purple.500, indigo.600)";
  const tableBg = useColorModeValue("white", "gray.800");
  const headerBg = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("black", "white");
  const textColorAlpha = useColorModeValue("blackAlpha.800", "whiteAlpha.800");

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
      maxW="960px"
      mx="auto"
      px={{ base: 4, xl: 0 }}
      mb="20"
      position="relative"
    >
      <Box position="relative" width="100%">
        <Image
          src="/assets/simplified/total-contract-bg.png"
          alt="total-contract-bg"
          width={600}
          height={300}
        />

        <HStack
          justifyContent="space-between"
          w="63%"
          position="absolute"
          top="24px"
          left={10}
        >
          <Text
            color="#321c75"
            lineHeight="100%"
            fontSize="2xl"
            fontWeight="400"
          >
            Contract
            <br /> Deployed
          </Text>

          <Box>
            <Text fontSize="base" color="#321c75" mb={2}>
              Total Contract
            </Text>
            <Box
              border="1px"
              borderColor="#f7d8fe"
              rounded="full"
              textAlign="center"
              fontSize="3xl"
            >
              <Text>{totalContracts}</Text>
            </Box>
          </Box>
        </HStack>
      </Box>
      {isLoading ? (
        <Flex minH="300px" alignItems="center" justifyContent="center">
          <Spinner size="md" />
        </Flex>
      ) : (
        <>
          <Box overflowX="auto" mt="5">
            <Table variant="simple">
              <Thead>
                <Tr bg={headerBg}>
                  <Th
                    textAlign="center"
                    color="blue.500"
                    fontWeight="bold"
                    py="2"
                    borderTopLeftRadius="lg"
                  >
                    User Address
                  </Th>
                  <Th
                    textAlign="center"
                    color="blue.500"
                    fontWeight="bold"
                    py="2"
                  >
                    Contract Address
                  </Th>
                  <Th
                    textAlign="center"
                    color="blue.500"
                    fontWeight="bold"
                    py="2"
                    borderTopRightRadius="lg"
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
                                <CheckIcon color="green.500" />
                              ) : (
                                <CopyIcon />
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
                                <CheckIcon color="green.500" />
                              ) : (
                                <CopyIcon />
                              )
                            }
                            onClick={() => handleCopy(contract.address)}
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
                            bg={networkColors[contract.chainId] || "gray.400"}
                          />
                          <Text fontSize="sm" color={textColorAlpha}>
                            {networkNames[contract.chainId] ||
                              "Unknown Network"}
                          </Text>
                        </Flex>
                      </Td>
                    </Tr>
                  ) : null
                )}
              </Tbody>
            </Table>
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
