export function formatAddress(address: string): string {
  return !address ? address : `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
