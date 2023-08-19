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
        bgColor: "#03020b",
        color: "#fff",
      },
    },
  },
  breakpoints: {
    "3xl": "1550px",
  },
  components: {
    Button,
  },
});

export default theme;
