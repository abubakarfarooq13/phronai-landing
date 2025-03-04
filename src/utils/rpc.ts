// Ethereum JSON-RPC methods for interacting with the Phron.ai testnet

const RPC_URL = "https://testnet.phron.ai";

// Helper function to make RPC calls
async function rpcCall(method: string, params: any[] = []) {
  try {
    const response = await fetch(RPC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: Date.now(),
        method,
        params,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`RPC error: ${data.error.message}`);
    }

    return data.result;
  } catch (error) {
    console.error(`Error in RPC call to ${method}:`, error);
    throw error;
  }
}

// Get the latest block number
export async function getBlockNumber() {
  const blockNumberHex = await rpcCall("eth_blockNumber");
  return Number.parseInt(blockNumberHex, 16);
}

// Get block by number
export async function getBlockByNumber(
  blockNumber: number,
  includeTransactions = false
) {
  const blockNumberHex = `0x${blockNumber.toString(16)}`;
  return await rpcCall("eth_getBlockByNumber", [
    blockNumberHex,
    includeTransactions,
  ]);
}

// Get transaction count
export async function getTransactionCount(
  address: string,
  blockParam = "latest"
) {
  const countHex = await rpcCall("eth_getTransactionCount", [
    address,
    blockParam,
  ]);
  return Number.parseInt(countHex, 16);
}

// Get gas price
export async function getGasPrice() {
  const gasPriceHex = await rpcCall("eth_gasPrice");
  return Number.parseInt(gasPriceHex, 16);
}

// Get chain ID
export async function getChainId() {
  const chainIdHex = await rpcCall("eth_chainId");
  return Number.parseInt(chainIdHex, 16);
}

// Calculate TPS based on recent blocks
async function calculateTPS() {
  try {
    // Get the latest block
    const latestBlockNumber = await getBlockNumber();

    // Get the latest block details
    const latestBlock = await getBlockByNumber(latestBlockNumber, true);

    // Get a block from 10 blocks ago for comparison
    const olderBlockNumber = Math.max(0, latestBlockNumber - 10);
    const olderBlock = await getBlockByNumber(olderBlockNumber, true);

    // Calculate time difference in seconds
    const latestTimestamp = Number.parseInt(latestBlock.timestamp, 16);
    const olderTimestamp = Number.parseInt(olderBlock.timestamp, 16);
    const timeDiffSeconds = latestTimestamp - olderTimestamp;

    if (timeDiffSeconds <= 0) return 0;

    // Count total transactions in the range
    let totalTxs = 0;
    for (let i = olderBlockNumber; i <= latestBlockNumber; i++) {
      const block = await getBlockByNumber(i, true);
      totalTxs += Array.isArray(block.transactions)
        ? block.transactions.length
        : 0;
    }

    // Calculate TPS
    return Math.round(totalTxs / timeDiffSeconds);
  } catch (error) {
    console.error("Error calculating TPS:", error);
    return 0;
  }
}

// Calculate average block time
async function calculateAverageBlockTime() {
  try {
    const latestBlockNumber = await getBlockNumber();
    const latestBlock = await getBlockByNumber(latestBlockNumber);
    const olderBlock = await getBlockByNumber(latestBlockNumber - 10);

    const latestTimestamp = Number.parseInt(latestBlock.timestamp, 16);
    const olderTimestamp = Number.parseInt(olderBlock.timestamp, 16);

    // Calculate average time per block in seconds
    return (latestTimestamp - olderTimestamp) / 10;
  } catch (error) {
    console.error("Error calculating average block time:", error);
    return 0;
  }
}

// Estimate time to finality (simplified)
async function estimateTimeToFinality() {
  // For this example, we'll use a simplified approach
  // In a real implementation, you would need to check confirmations
  try {
    const blockTime = await calculateAverageBlockTime();
    // Assuming finality after 1 confirmation for Phron.ai
    return blockTime * 1;
  } catch (error) {
    console.error("Error estimating time to finality:", error);
    return 0;
  }
}

// Calculate gas per second
async function calculateGasPerSecond() {
  try {
    const latestBlockNumber = await getBlockNumber();
    let totalGasUsed = 0;

    // Get gas used from last 5 blocks
    for (let i = 0; i < 5; i++) {
      const block = await getBlockByNumber(latestBlockNumber - i);
      totalGasUsed += Number.parseInt(block.gasUsed, 16);
    }

    const latestBlock = await getBlockByNumber(latestBlockNumber);
    const olderBlock = await getBlockByNumber(latestBlockNumber - 4);

    const latestTimestamp = Number.parseInt(latestBlock.timestamp, 16);
    const olderTimestamp = Number.parseInt(olderBlock.timestamp, 16);
    const timeDiffSeconds = latestTimestamp - olderTimestamp;

    if (timeDiffSeconds <= 0) return 0;

    return Math.round(totalGasUsed / timeDiffSeconds);
  } catch (error) {
    console.error("Error calculating gas per second:", error);
    return 0;
  }
}

// Estimate total transactions processed
async function estimateTotalTransactions(blockNumber: number) {
  try {
    // This is a rough estimate based on average transactions per block
    const sampleSize = 10;
    let totalTxs = 0;

    for (let i = 0; i < sampleSize; i++) {
      const block = await getBlockByNumber(blockNumber - i, true);
      totalTxs += Array.isArray(block.transactions)
        ? block.transactions.length
        : 0;
    }

    const avgTxPerBlock = totalTxs / sampleSize;
    return Math.round(avgTxPerBlock * blockNumber);
  } catch (error) {
    console.error("Error estimating total transactions:", error);
    return 0;
  }
}

// Fetch all blockchain data needed for the dashboard
export async function fetchBlockchainData() {
  try {
    const blockNumber = await getBlockNumber();
    const blockTime = await calculateAverageBlockTime();
    const tps = await calculateTPS();
    const timeToFinality = await estimateTimeToFinality();
    const gasPerSecond = await calculateGasPerSecond();
    const transactionsProcessed = await estimateTotalTransactions(blockNumber);
    const transactionsPerDay = tps * 86400; // TPS * seconds in a day

    return {
      blockNumber,
      blockTime,
      transactionsProcessed,
      tps,
      timeToFinality,
      gasPerSecond,
      transactionsPerDay,
      isLoading: false,
    };
  } catch (error) {
    console.error("Error fetching blockchain data:", error);
    return {
      blockNumber: 0,
      blockTime: 0,
      transactionsProcessed: 0,
      tps: 0,
      timeToFinality: 0,
      gasPerSecond: 0,
      transactionsPerDay: 0,
      isLoading: true,
    };
  }
}
