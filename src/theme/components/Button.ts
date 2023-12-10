import { defineStyleConfig } from "@chakra-ui/react";

export default defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    "primary-purple": {
      // bgColor: "#fff",
      // border: "1px solid #fff",
      color: "#fff",
      border: "3px solid #5b28ac",
      backgroundImage: "linear-gradient(30deg, #5b28ac 80%, transparent 50%)",

      backgroundSize: "500px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0%",
      transition: "all 500ms ease-in-out",
      _hover: {
        // backgroundPosition: "100%",
        // bgColor: "transparent",
        // border: "1px solid #fff",
        // color: "#fff",
        backgroundPosition: { base: "200%", lg: "170%" },
        color: "#5b28ac",
        textDecor: "none",
      },
      _active: {
        boxShadow: "0 0 5px 0 #5b28ac inset, 0 0 10px 2px",
      },
    },
    primary: {
      // bgColor: "#fff",
      // border: "1px solid #fff",
      color: "#1a1a1a",
      border: "3px solid #fff",
      backgroundImage: "linear-gradient(30deg, #fff 80%, transparent 50%)",

      backgroundSize: "500px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0%",
      transition: "all 500ms ease-in-out",
      _hover: {
        // backgroundPosition: "100%",
        // bgColor: "transparent",
        // border: "1px solid #fff",
        // color: "#fff",
        backgroundPosition: { base: "200%", lg: "170%" },
        color: "#fff",
        textDecor: "none",
      },
      _active: {
        boxShadow: "0 0 5px 0 #fff inset, 0 0 10px 2px",
      },
    },
    "primary-outline": {
      bgColor: "none",
      color: "#fff",
      borderColor: "#fff",
      borderWidth: "1px",
      backgroundColor: "transparent",

      // border: 3px solid #00d7c3;
      // border-radius: 50px;
      // -webkit-transition: all .15s ease-in-out;
      transition: "all .15s ease-in-out",
      // color: #00d7c3;
      _hover: {
        boxShadow: "0 0 5px 0 #fff inset, 0 0 10px 2px",
        textDecor: "none",
      },
      _active: {
        boxShadow: "none",
      },
    },
    "purple-outline": {
      bgColor: "none",
      color: "#5b28ac",
      borderColor: "#5b28ac",
      borderWidth: "2px",
      backgroundColor: "transparent",

      // border: 3px solid #00d7c3;
      // border-radius: 50px;
      // -webkit-transition: all .15s ease-in-out;
      transition: "all .15s ease-in-out",
      // color: #00d7c3;
      _hover: {
        boxShadow: "0 0 5px 0 #5b28ac inset, 0 0 10px 2px",
        textDecor: "none",
      },
      _active: {
        boxShadow: "none",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
