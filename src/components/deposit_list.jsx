import { VStack, HStack, Text, Button } from "@chakra-ui/react";
import DepositListCard from "./deposit_list_card";

const DepositList = () => {
  return (
    <VStack width="100%">
      <HStack alignSelf={"center"} justify={"center"}>
        <Text fontSize={"9px"} color={"white"} marginTop={"10px"}>
          DEPOSITS
        </Text>
      </HStack>
      <VStack
        align={"flex-start"}
        width={"100%"}
        marginTop={"50px"}
        gap={"8px"}
      >
        <DepositListCard />
        <DepositListCard />
        <DepositListCard />
      </VStack>
    </VStack>
  );
};

export default DepositList;
