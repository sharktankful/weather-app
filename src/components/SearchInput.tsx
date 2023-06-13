import { Flex, Input } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <Flex padding={"2"}>
      <Input
        size={"lg"}
        borderRadius={20}
        placeholder="Search Weather..."
        variant={"filled"}
      />
    </Flex>
  );
};

export default SearchInput;
