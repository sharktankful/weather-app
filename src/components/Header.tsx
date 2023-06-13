import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justify={"flex-end"} padding={"10px"}>
      <ColorModeSwitch />
    </Flex>
  );
};

export default Header;
