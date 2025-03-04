// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth !important",
      },
      body: {
        bgColor: "#fff",
        color: "#000",
      },
    },
  },
  breakpoints: {
    "3xl": "1550px",
    "4xl": "1700px",
    "1350px": "1350px",
    "1400px": "1400px",
    "1200px": "1200px",
    "1280px": "1280px",
    "2340px": "2340px",
    "2560px": "2560px",
    "2520px": "2520px",
    "3000px": "3000px",
    "3400px": "3400px",
    "4000px": "4000px",
  },
  components: {
    Button,
    Progress: {
      baseStyle: {
        track: {
          bg: "purple.50",
        },
        filledTrack: {
          bg: "purple.500",
        },
      },
    },
  },
  colors: {
    brand: {
      blue: "#5756f4",
      purple: "#c34bfb",
      darkGray: "#292c2e",
    },
    purple: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
    },
  },
  boxShadow: {
    theme: "0 0px 50px -12px rgba(0, 0, 0, 0.1)",
  },
});

export default theme;
