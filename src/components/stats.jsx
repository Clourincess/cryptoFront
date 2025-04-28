import { HStack, VStack, Text, Stack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const Stats = observer(({ deposited, generated, withdrawn, type }) => {
  return (
    <VStack
      width={"100%"}
      borderRadius={"14px"}
      background="linear-gradient(234.03deg, #493254 -15.9%, #000000 51.5%, #000000 100%)"
      padding={"9px 9px 38px 9px"}
      zIndex={100}
    >
      <HStack alignSelf={"center"} justifySelf={"center"}>
        <Text color={"white"} fontSize={"9px"}>
          STATS
        </Text>
        {/* <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#6C558A" fill-opacity="0.5" />
          <circle cx="4" cy="4" r="3" fill="#6C558A" />
        </svg> */}
      </HStack>
      <VStack
        alignSelf={"flex-start"}
        align={"flex-start"}
        marginTop={"35px"}
        gap={"23px"}
      >
        <HStack align={"flex-start"} gap={"0px"}>
          <Stack marginTop={"2px"}>
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L1.50571e-07 7.4641L4.53412e-07 0.535898L6 4Z"
                fill="#6C558A"
              />
            </svg>
          </Stack>
          <VStack align={"flex-start"} marginLeft={"4px"} gap={"0px"}>
            {type == "ref" ? (
              <Text color={"rgba(120, 96, 158, 1)"} fontSize={"9px"}>
                YOUR CODE WAS USED
              </Text>
            ) : (
              <Text color={"rgba(120, 96, 158, 1)"} fontSize={"9px"}>
                TOTAL DEPOSITED
              </Text>
            )}
            {type == "ref" ? (
              <Text color={"white"} fontSize={"9px"}>
                {deposited.toFixed(2)} TIMES
              </Text>
            ) : (
              <Text color={"white"} fontSize={"9px"}>
                {deposited.toFixed(2)} USDT TRC20
              </Text>
            )}
          </VStack>
        </HStack>
        <HStack align={"flex-start"} gap={"0px"}>
          <Stack marginTop={"2px"}>
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L1.50571e-07 7.4641L4.53412e-07 0.535898L6 4Z"
                fill="#6C558A"
              />
            </svg>
          </Stack>
          <VStack align={"flex-start"} marginLeft={"4px"} gap={"0px"}>
            <Text color={"rgba(120, 96, 158, 1)"} fontSize={"9px"}>
              TOTAL GENERATED
            </Text>
            <Text color={"white"} fontSize={"9px"}>
              {generated.toFixed(2)} USDT TRC20
            </Text>
          </VStack>
        </HStack>
        <HStack align={"flex-start"} gap={"0px"}>
          <Stack marginTop={"2px"}>
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L1.50571e-07 7.4641L4.53412e-07 0.535898L6 4Z"
                fill="#6C558A"
              />
            </svg>
          </Stack>
          <VStack align={"flex-start"} marginLeft={"4px"} gap={"0px"}>
            <Text color={"rgba(120, 96, 158, 1)"} fontSize={"9px"}>
              TOTAL WITHDRAWN
            </Text>
            <Text color={"white"} fontSize={"9px"}>
              {withdrawn.toFixed(2)} USDT TRC20
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
});

export default Stats;
