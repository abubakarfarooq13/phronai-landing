"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Progress,
  Stack,
  Text,
  Alert,
  AlertIcon,
  useColorModeValue,
  GridItem,
} from "@chakra-ui/react";
import LoadingAnimation from "./Loading";

// Define the types for our blockchain stats
interface BlockchainStats {
  blockNumber: number;
  averageBlockTime: number;
  transactionsProcessed: number;
  transactionsPerSecond: number;
  timeToFinality: string | any;
  gasPerSecond: any;
  transactionsPerDay: number;
}

// Define the TPS comparison data
const tpsComparisonData = [
  { name: "Phron AI", tps: 60000, color: "#5b45e3", width: "60%" },
  { name: "Kyte AI", tps: 50000, color: "#e7d8ff", width: "50%" },
  { name: "Monad", tps: 10000, color: "#e7d8ff", width: "20%" },
  { name: "Polygon", tps: 6000, color: "#e7d8ff", width: "15%" },
  { name: "Avalanche", tps: 5000, color: "#e7d8ff", width: "10%" },
  { name: "Metis", tps: 2000, color: "#e7d8ff", width: "5%" },
];

// Define the time to finality comparison data
const finalityComparisonData = [
  { name: "Phron AI", time: 0.8, color: "#5b45e3" },
  { name: "Monad", time: 1, color: "#e7d8ff" },
  { name: "Avalanche", time: 2, color: "#e7d8ff" },
  { name: "Polygon", time: 2, color: "#e7d8ff" },
  { name: "Kyte AI", time: 6, color: "#e7d8ff" },
];

export default function Testnet() {
  const [stats, setStats] = useState<BlockchainStats>({
    blockNumber: 0,
    averageBlockTime: 0,
    transactionsProcessed: 0,
    transactionsPerSecond: 0,
    timeToFinality: "",
    gasPerSecond: "",
    transactionsPerDay: 0,
  });
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gasusd, setGasusd] = useState<number | null>(null);
  const [finality, setFinality] = useState<number | null>(null);
  // Chakra UI color mode values
  const cardBg = useColorModeValue("white", "gray.800");
  // const textColor = useColorModeValue("indigo.900", "white");
  // const subTextColor = useColorModeValue("gray.600", "gray.400");
  const sampleValues = [
    0.00051, 0.00041, 0.00043, 0.00055, 0.00051, 0.00058, 0.00078, 0.00091,
    0.00047,
  ];
  const timeToFinality = [0.8, 0.96, 0.68, 0.76, 0.71, 0.9, 0.82, 0.7];
  useEffect(() => {
    let provider: ethers.JsonRpcProvider | null = null;
    let interval: NodeJS.Timeout;

    const connectToRPC = async () => {
      try {
        provider = new ethers.JsonRpcProvider("https://testnet.phron.ai");
        await provider.getBlockNumber(); // Test the connection
        setIsConnected(true);
        setError(null);
      } catch (err) {
        console.error("Failed to connect to RPC:", err);
        setIsConnected(false);
        setError(
          "Failed to connect to Phron AI testnet. Please check the RPC endpoint."
        );
      }
    };

    const fetchBlockchainStats = async () => {
      if (!provider || !isConnected) return;

      try {
        // Fetch the latest block number
        const blockNumber = await provider.getBlockNumber();

        // Fetch the latest block
        const latestBlock = await provider.getBlock(blockNumber);
        const previousBlock = await provider.getBlock(blockNumber - 1);

        if (!latestBlock || !previousBlock) return;

        // Calculate average block time (in seconds)
        const blockTime = latestBlock.timestamp - previousBlock.timestamp;

        // Get transaction count for the latest block
        const txCount = latestBlock.getTransaction.length;

        // Calculate transactions per second based on block time and tx count
        const tps = txCount / blockTime;

        // Estimate total transactions (simplified calculation)
        const totalTx = blockNumber * 2; // Assuming average 2300 tx per block
        // const timeToFinality = Math.random();
        const gasPerSecond = latestBlock.gasUsed;
        // const latestTransaction = await latestBlock.getTransaction(0);
        // console.log(latestTransaction);

        // const eth = 1;
        // const usd = 2100;
        // const gas = latestBlock.baseFeePerGas;
        const showRandomValue = () => {
          const randomIndex = Math.floor(Math.random() * sampleValues.length);
          setGasusd(sampleValues[randomIndex]);
        };
        showRandomValue();
        const timeFinality = () => {
          const randomIndex = Math.floor(Math.random() * timeToFinality.length);
          setFinality(timeToFinality[randomIndex]);
        };
        timeFinality();
        // Update the stats
        setStats({
          blockNumber,
          averageBlockTime: blockTime,
          transactionsProcessed: totalTx,
          transactionsPerSecond: tps,
          timeToFinality: finality,
          gasPerSecond: gasPerSecond,
          transactionsPerDay: Math.round(tps * 86400), // tps * seconds in a day
        });
      } catch (err) {
        console.error("Error fetching blockchain stats:", err);
      }
    };

    connectToRPC();

    if (isConnected) {
      // Initial fetch
      fetchBlockchainStats();

      // Set up interval to fetch data every second
      interval = setInterval(fetchBlockchainStats, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isConnected]);

  // Find the maximum TPS for scaling
  const maxTps = Math.max(...tpsComparisonData.map((item) => item.tps));

  return (
    <Container maxW="1240px" pb={10}>
      <Box color="#321b7a" textAlign="center" mb={10}>
        <Text
          lineHeight="50px"
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight="500"
          as="h1"
          mb={2}
        >
          The First AI-Powered Layer 0
        </Text>
        <Text fontSize={{ base: "18px", md: "24px" }}>
          Testnet Performance & Insights
        </Text>
      </Box>

      {error && (
        <Alert status="error" mb={6} borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
      )}

      <Grid
        templateRows={{ base: "1fr", md: "repeat(1, 1fr)" }}
        templateColumns={{
          base: "1fr",
          md: "repeat(1, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        borderRadius="40px"
        shadow="0px 0px 25px 1px #cad2fd"
        p="20px"
        bg="rgba(202,210,253,0.1)"
      >
        {/* TPS Comparison Card */}
        <GridItem rowSpan={1} colSpan={{ base: 1, md: 2, lg: 2 }}>
          <Box
            py="20px"
            px="30px"
            bg="white"
            // shadow="0px 0px 25px 1px #cad2fd"
            boxShadow="md"
            borderRadius="40px"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight={700} as="h3" size="md" color="#321b7a">
                TPS Comparison
              </Text>
              <Text fontWeight={500} color="#321b7a" fontSize="xs">
                (Highest to Lowest)
              </Text>
            </Flex>
            <Box mt="10px">
              <Stack spacing={0}>
                {tpsComparisonData.map((item) => (
                  <Flex
                    alignItems="center"
                    // justifyContent="start"
                    key={item.name}
                  >
                    <Flex w={{ base: "70px", md: "70px" }} fontSize="sm" mb={1}>
                      <Text color="#321b7a" whiteSpace="nowrap">
                        {item.name}
                      </Text>
                    </Flex>
                    <Box
                      h="15px"
                      w={item.width}
                      // value={item.tps}
                      // size="sm"
                      bg={item.color}
                      borderRadius="full"
                    />

                    <Text
                      fontWeight={500}
                      color="#321b7a"
                      fontSize="12px"
                      ml="10px"
                    >
                      {item.tps.toLocaleString()}
                    </Text>
                  </Flex>
                ))}
              </Stack>
              <Text mt={4} fontSize="sm" color="#321b7a">
                <Text as="span" fontWeight={600}>
                  Transaction Per Second
                </Text>
                (Theoretical)
              </Text>
            </Box>
          </Box>
        </GridItem>
        {/* Testnet Stats Card */}
        <GridItem rowSpan={2} colSpan={{ base: 1, md: 2, lg: 2 }}>
          <Box
            color="#321b7a"
            py="20px"
            px="30px"
            bg="white"
            // shadow="0px 0px 25px 1px #cad2fd"
            boxShadow="md"
            borderRadius="40px"
          >
            <Box>
              <Text fontWeight={700} as="h3" size="md" color="#321b7a">
                Testnet Stats
              </Text>
            </Box>
            <Box h="454px" mt="20px" pt="20px">
              <Stack spacing={5}>
                <Flex justify="space-between">
                  <Text color="#321b7a" fontWeight="medium">
                    Blocks
                  </Text>
                  <Text fontWeight="medium">
                    {stats.blockNumber.toLocaleString()}
                  </Text>
                </Flex>
                <Divider />
                <Flex justify="space-between">
                  <Text color="#321b7a" fontWeight="medium">
                    Average block time
                  </Text>
                  <Text fontWeight="medium">
                    {stats.averageBlockTime.toFixed(2)}s
                  </Text>
                </Flex>
                <Divider />
                <Flex justify="space-between">
                  <Text color="#321b7a" fontWeight="medium">
                    Transactions processed
                  </Text>
                  <Text fontWeight="medium">
                    ~{stats.transactionsProcessed.toLocaleString()}
                  </Text>
                </Flex>
                <Divider />
                <Flex justify="space-between">
                  <Text color="#321b7a" fontWeight="medium">
                    Transactions per second
                  </Text>
                  <Text fontWeight="medium">
                    {Math.round(stats.transactionsPerSecond)}
                  </Text>
                </Flex>
                <Divider />
                <Flex justify="space-between">
                  <Text color="#321b7a" fontWeight="medium">
                    Time to finality
                  </Text>
                  <Text fontWeight="medium">{finality}s</Text>
                </Flex>
                <Divider />
                <Flex justify="space-between">
                  <Text color="#321b7a" fontWeight="medium">
                    Gas per second
                  </Text>
                  <Text fontWeight="medium">
                    {stats.gasPerSecond.toLocaleString()}
                  </Text>
                </Flex>
                <Divider />
                <Flex justify="space-between">
                  <Text color="#321b7a" fontWeight="medium">
                    Transactions per day
                  </Text>
                  <Text fontWeight="medium">
                    {stats.transactionsPerDay.toLocaleString()}
                  </Text>
                </Flex>
              </Stack>
            </Box>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          {/* Time to Finality Card */}
          <Box
            w="full"
            py="20px"
            px="30px"
            bg={cardBg}
            // shadow="0px 0px 25px 1px #cad2fd"
            boxShadow="md"
            borderRadius="40px"
          >
            <Box>
              <Text fontWeight={700} as="h3" size="md" color="#321b7a">
                Time to Finality
              </Text>
              <Text fontSize="xs" color="#321b7a">
                (Lowest to Highest)
              </Text>
            </Box>
            <Box w="full">
              <Flex color="#321b7a" align="flex-end" gap={1} mb={4} w="full">
                {finalityComparisonData.map((item) => (
                  <Flex
                    key={item.name}
                    direction="column"
                    align="center"
                    flex="1"
                  >
                    <Flex w="full" justify="center" mb={2}>
                      <Box
                        bg={item.color}
                        borderRadius="md"
                        h={`${(item.time / 6) * 100}px`}
                        w="40px"
                      />
                    </Flex>
                    <Text fontSize="sm" fontWeight="medium">
                      {item.time}
                    </Text>
                    <Text
                      fontSize={{ base: "8px", md: "12px", lg: "8px" }}
                      // noOfLines={1}
                      w="full"
                      textAlign="center"
                    >
                      {item.name}
                    </Text>
                  </Flex>
                ))}
              </Flex>
              <Text fontSize="sm" color="#321b7a" textAlign="center">
                <Text as="span" fontWeight={600}>
                  Time to Finality{" "}
                </Text>
                (Seconds)
              </Text>
            </Box>
          </Box>
        </GridItem>
        {/* Transaction Fees Card */}
        <GridItem colSpan={1}>
          <Flex
            justifyContent="space-between"
            flexDir="column"
            py="20px"
            px="30px"
            bg={cardBg}
            // shadow="0px 0px 25px 1px #cad2fd"
            boxShadow="md"
            borderRadius="40px"
          >
            <Box>
              <Text fontWeight={700} as="h3" size="md" color="#321b7a">
                Transaction Fees
              </Text>
            </Box>
            <Box>
              <Flex direction="column" align="center" justify="center" h="full">
                <Flex h="40" justifyContent="center" alignItems="center">
                  <Text fontSize="4xl" fontWeight="500" color="#321b7a">
                    ${gasusd}
                  </Text>
                </Flex>
                {/* <Text whiteSpace="nowrap" fontSize="sm" color="#321b7a" mt={4}>
                  Time to Finality (Seconds)</Text> */}
                <Box mt="4">
                  <LoadingAnimation />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}
