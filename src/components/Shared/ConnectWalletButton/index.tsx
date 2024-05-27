import { Button } from "@chakra-ui/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function ConnectWalletButton() {
  const { open } = useWeb3Modal();

  return (
    <Button
      onClick={() => {
        open();
      }}
      variant="primary-purple"
      borderRadius="full"
      // padding="10px 20px"
      w="full"
      px="8"
      fontSize={{ base: "sm", "3000px": "lg" }}
    >
      Connect Wallet
    </Button>
  );
}
