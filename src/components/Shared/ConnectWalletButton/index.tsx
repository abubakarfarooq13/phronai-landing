import { Button } from "@chakra-ui/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

function formatWalletAddress(address?: string) {
  // Ensure the address is a string and is of the expected length
  if (typeof address !== "string") {
    throw new Error("Invalid wallet address");
  }

  // Show the first 6 characters and the last 4 characters of the address
  const start = address.substring(0, 6);
  const end = address.substring(address.length - 4);

  // Combine the parts with ellipsis in the middle
  return `${start}...${end}`;
}

export default function ConnectWalletButton(props: any) {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <Button
      onClick={() => {
        isConnected
          ? open({
              view: "Account",
            })
          : open();
      }}
      variant="primary-purple"
      borderRadius="full"
      // padding="10px 20px"
      w="full"
      px="8"
      fontSize={{ base: "sm", "3000px": "lg" }}
      fontFamily="inherit"
    >
      {isConnected
        ? formatWalletAddress(address)
        : props.label
        ? props.label
        : "Connect Wallet"}
    </Button>
  );
}
