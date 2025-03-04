export default async function getEthPrice() {
  const ETHERSCAN_API_KEY = "4VRM41SZVKB1JY1JTC7RV8UZDF5K7RPUAF";
  const url = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${ETHERSCAN_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "1") {
      return parseFloat(data.result.ethusd);
    }
  } catch (error) {
    console.error("Error fetching ETH price:", error);
  }
  return null;
}
