import { VStack, HStack, Text, Button } from "@chakra-ui/react";
import DepositListCard from "./deposit_list_card";
import { useEffect } from "react";
import { useStores } from "../store/store_context";

const DepositList = () => {
  const { GlobalVars } = useStores();
  useEffect(() => {
    GlobalVars.getAllDepositByUserNameMaster();
  }, []);
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
        alignItems={"center"}
      >
        {GlobalVars.master_deposits.length != 0 ? (
          GlobalVars.master_deposits.map((item) => {
            <DepositListCard />;
          })
        ) : (
          <HStack
            background="linear-gradient(69.76deg, #000000 46.83%, #370101 83.29%)"
            height={"38px"}
            width={"257px"}
            justify={"center"}
            align={"center"}
            borderRadius={"14px"}
          >
            <Text color={"white"} fontSize={"9px"}>
              YOU DON’T HAVE ANY ACTIVE DEPOSITS YET
            </Text>
            {
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="4.5"
                  cy="4.54653"
                  rx="4.5"
                  ry="4.54653"
                  fill="#D10000"
                  fill-opacity="0.5"
                />
              </svg>
            }
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

export default DepositList;
