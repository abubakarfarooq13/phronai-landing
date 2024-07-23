import React from "react";
import {
  Menu,
  MenuButton,
  Button,
  Link,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoIosArrowDown } from "react-icons/io";
import router from "next/router";
import { navItems } from "@/constant/nav";

interface SingleMenuProps {
  menuItems: {
    id: number;
    label: string;
    href: string;
  }[];
  menuTitle: string;
}

export default function SingleMenu(props: SingleMenuProps) {
  const { menuItems, menuTitle } = props;

  const router = useRouter();

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="unstyled"
        color={
          menuItems.find((item) => item.href === router.pathname)
            ? "#6317fe"
            : ""
        }
        cursor="pointer"
        display="flex"
        alignItems="center"
        fontWeight={500}
        rightIcon={<IoIosArrowDown />}
        fontSize="17px"
      >
        {menuTitle}
      </MenuButton>

      <MenuList bgColor="#5900d7" border="none" mt="5" boxShadow="xl" w="100vw">
        {navItems.map((item) => (
          <MenuItem
            key={item.id}
            bgColor="#05010c"
            as={Link}
            px="5"
            pb="2"
            href={item.href}
            _hover={{
              color: "#6317fe",
              outline: "none",
              boxShadow: "none",
            }}
            _active={{
              boxShadow: "none",
            }}
            _focus={{
              boxShadow: "none",
            }}
            color={router.pathname === item.href ? "#6317fe" : ""}
            fontSize={{ "3000px": "lg" }}
            fontWeight={500}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
