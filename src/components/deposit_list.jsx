import { VStack, HStack, Text, Button } from "@chakra-ui/react";
import DepositListCard from "./deposit_list_card";

import { useStores } from "../store/store_context";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";

const DepositList = observer(() => {
  const { GlobalVars } = useStores();

  const navigate = useNavigate();

  return (
    <VStack width="100%" gap={0}>
      <HStack alignSelf={"center"} justify={"center"} gap={0}>
        <Text fontSize={"9px"} color={"white"} marginTop={"10px"}>
          DEPOSITS
        </Text>
      </HStack>
      <VStack
        align={"flex-start"}
        width={"100%"}
        marginTop={"20px"}
        gap={"8px"}
        alignItems={"center"}
      >
        {GlobalVars.master_deposits.length != 0 &&
        GlobalVars.master_deposits.find(
          (elem) => elem.verification == 1 && elem.status == "D"
        ) ? (
          GlobalVars.master_deposits
            .filter((item) => item?.verification == 1 && item?.status == "D")
            .map((item2) => (
              <DepositListCard
                input_data={item2?.sum}
                output_data={item2?.result_balance}
                completion_date={new Date(item2?.completion_date * 1000)}
                obj={item2}
              />
            ))
        ) : (
          <HStack
            background="linear-gradient(69.76deg, #000000 46.83%, #370101 83.29%)"
            height={"38px"}
            width={"257px"}
            justify={"center"}
            align={"center"}
            borderRadius={"14px"}
            marginTop={"76px"}
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
                  fill="#ED0E0E"
                />
              </svg>
            }
          </HStack>
        )}
      </VStack>
    </VStack>
  );
});

export default DepositList;
