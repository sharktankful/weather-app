import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Flex } from "@chakra-ui/react";

const City = () => {
  return (
    <>
      <Flex justify={"flex-end"} padding={"10px"}>
        <ColorModeSwitch />
      </Flex>
      <p>Hi</p>
    </>
  );
};

export default City;
