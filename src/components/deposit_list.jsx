import { VStack, HStack, Text, Button } from "@chakra-ui/react";
import DepositListCard from "./deposit_list_card";

const DepositList = () => {
  return (
    <VStack width="100%">
      <HStack
        alignSelf={"center"}
        justify={"center"}
        padding={"10px 20px"}
        background={"#101010"}
        borderRadius="28px"
      >
        <Text fontSize={"10px"} color={"white"}>
          DEPOSIT LIST
        </Text>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="6" fill="#2281A8" fill-opacity="0.5" />
          <circle cx="6" cy="6" r="4" fill="#2281A8" />
        </svg>
      </HStack>
      <DepositListCard />
      <DepositListCard />
      <DepositListCard />
    </VStack>
  );
};

export default DepositList;
