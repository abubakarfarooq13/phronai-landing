import { FaDroplet, FaLink, FaWallet } from "react-icons/fa6";
import { FiBarChart2 } from "react-icons/fi";
import { MdWifiTethering } from "react-icons/md";

export const layerZeroAndLayerOneMenuItems = [
  // {
  //   id: 2,
  //   label: "Layer 0",
  //   href: "/phronzero",
  //   icon: "/assets/new-home/layer-icon.png",
  // },
  // {
  //   id: 2,
  //   label: "Layer 1",
  //   href: "/chain",
  //   icon: "/assets/new-home/layer-icon.png",
  // },
  // {
  //   id: 6,
  //   label: "Phron Coin",
  //   href: "/phron",
  //   icon: "/assets/new-home/phron-coin.png",
  // },

  {
    id: 3,
    label: "Ecosystem",
    href: "/ecosystem",
    icon: "/assets/new-home/ecosystem.png",
  },
  {
    id: 4,
    label: "Team",
    href: "/team",
    icon: "/assets/new-home/team-icon.png",
  },
  {
    id: 5,
    label: "Roadmap",
    href: "/roadmap",
    icon: "/assets/new-home/map-icon.png",
  },
];

export const buildMenuItems = [
  {
    id: 5,
    label: "Github",
    href: "http://git.phron.ai/",
    icon: "/assets/new-home/github-icon.png",
  },
  {
    id: 55,
    label: "Docs",
    href: "https://docs.phron.ai/",
    icon: "/assets/new-home/docs-icon.png",
  },
];

export const networkMenuItems = [
  {
    id: 5,
    label: "PhronScan",
    href: "https://testnet.phronscan.io",
    icon: "/assets/new-home/phronscan-icon.png",
  },
  {
    id: 6,
    label: "Testnet Faucet",
    href: "https://faucet.phron.ai/",
    icon: "/assets/faucet-icon.svg",
    target: "_blank",
    noStyle: true,
  },
  {
    id: 7,
    label: "PhronAI Wallet",
    href: "/wallet",
    icon: <FaWallet color="#000" />,
  },
  {
    id: 7,
    label: "Bridge",
    href: "https://bridge.phron.ai/",
    icon: <FaLink fontSize="20px" color="#000" />,
    isComingSoon: false,
    target: "_blank",
  },
  {
    id: 7,
    label: "Dex",
    href: "https://dex.phron.ai/",
    icon: <FiBarChart2 fontSize="22px" color="#000" />,
    isComingSoon: false,
    target: "_blank",
  },
];

export const communityMenuItems = [
  // {
  //   id: 11,
  //   label: "Dubai Expo 2023",
  //   href: "/dubai-crypto-expo-2023",
  //   icon: "/assets/new-home/dubai-expo.svg",
  // },
  {
    id: 9,
    label: "Partnerships",
    href: "/partnerships",
    icon: "/assets/new-home/handshake.svg",
  },
  {
    id: 10,
    label: "Voyage Airdrop Campaign",
    href: "https://voyage.phron.ai/",
    icon: <MdWifiTethering fontSize="22px" color="#000" />,
    target: "_blank",
  },
  {
    id: 11,
    label: "Phrony",
    href: "/phrony",
    icon: "/assets/phrony-icon.svg",
    // target: "_blank",
    noStyle: true,
  },
];

export const papersMenuItems = [
  {
    id: 9,
    label: "Whitepaper",
    href: "https://phron.ai/whitepaper_pure.pdf",
    icon: "/assets/new-home/docs-icon.png",
  },
  // {
  //   id: 10,
  //   label: "Whitepaper Royal",
  //   href: "https://phron.ai/whitepaper_royal.pdf",
  //   icon: "/assets/new-home/docs-icon.png",
  // },
  {
    id: 12,
    label: "Tokenomics",
    href: "https://phron.ai/tokenomics.pdf",
    icon: "/assets/new-home/docs-icon.png",
  },
];

export const navItems = [
  {
    id: 2,
    label: "Layer 0 / Layer 1",
    href: "",
    className: "dropdown-1",
    items: [
      "/phronzero",
      "/chain",
      "/phron",
      "/ecosystem",
      "/team",
      "/roadmap",
    ],
    imageUrl: "/assets/phronzero/card-1-img.png",
  },
  {
    id: 2,
    label: "Build",
    href: "",
    className: "dropdown-2",
    items: [],
    imageUrl: "/assets/new-home/chain-image.png",
  },
  {
    id: 4,
    label: "Network",
    href: "",
    className: "dropdown-3",
    items: [],
    imageUrl: "/assets/phronzero/card-3-img.png",
  },
  {
    id: 4,
    label: "Community",
    href: "",
    className: "dropdown-4",
    items: ["/dubai-crypto-expo-2023", "/partnerships"],
    imageUrl: "/assets/new-home/community.png",
  },
  {
    id: 5,
    label: "Papers",
    href: "",
    className: "dropdown-5",
    items: [],
    imageUrl: "/assets/new-home/paper.png",
  },
];

export const newsItems = [
  {
    id: 1,
    label: "Dubai Crypto Expo 2023",
    href: "/dubai-crypto-expo-2023",
  },
];

export const menu = ["Phron AI Foundation", "News / Updates"];
