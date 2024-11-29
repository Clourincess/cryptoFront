import { VStack, Text, HStack, Input, Button } from "@chakra-ui/react";
import ColoredComponent from "./colored_component_wrapper";
import { useState } from "react";

const arrow = (
  <svg
    width="7"
    height="8"
    viewBox="0 0 7 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.1167 4L0.0342223 7.4641L0.0342226 0.535898L6.1167 4Z"
      fill="black"
    />
  </svg>
);
const greenArrow = (
  <svg
    width="8"
    height="6"
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 0L7.4641 6L0.535898 6L4 0Z" fill="#01843D" />
  </svg>
);

const StandartCalc = () => {
  const [values, setValues] = useState([0, 0]);
  const [result, setResult] = useState(0);
  return (
    <ColoredComponent background="radial-gradient(208.63% 103% at -30% 100%, #E39818 8%, #D05676 46.48%, #3A79F2 64.5%, #05B4FF 77.87%)">
      <VStack width={"100%"} height={"100%"} spacing={"20px"}>
        <Text
          fontSize={"9px"}
          color={"black"}
          alignSelf={"center"}
          textAlign={"center"}
        >
          STANDARD <br /> ACCOUNT
        </Text>
        <HStack width={"100%"} justify={"flex-start"}>
          {arrow}
          <Text fontSize={"10px"} color={"black"} alignSelf={"center"}>
            ENTER DESIRED AMOUNT
          </Text>
        </HStack>
        <Input
          placeholder="TYPE DEPOSIT AMOUNT"
          style={{
            backgroundColor: "black",
            fontSize: "10px",

            borderRadius: "28px",
            width: "100%",
            padding: "5px 20px",
            color: "white",
          }}
          onChange={(e) => {
            setValues([Number(e.target.value), Number(values[1])]);
          }}
        />
        <HStack width={"100%"} justify={"flex-start"}>
          {arrow}
          <Text fontSize={"10px"} color={"black"} alignSelf={"center"}>
            ENTER DESIRED TERM
          </Text>
        </HStack>
        <Input
          placeholder="TYPE NUMBER OF DAYS"
          style={{
            backgroundColor: "black",
            fontSize: "10px",

            borderRadius: "28px",
            width: "100%",
            padding: "5px 20px",
            color: "white",
          }}
          onChange={(e) => {
            setValues([Number(values[0]), Number(e.target.value)]);
          }}
        />
        <Button
          borderRadius={"28px"}
          width={"86px"}
          backgroundColor={"black"}
          padding="10px"
          onClick={() => {
            setResult((values[0] + values[1]) * 1.25);
          }}
        >
          <Text
            style={{
              fontSize: "10px",
              letterSpacing: "-0.02em",
              color: "#a8487d",
            }}
          >
            CALCULATE
          </Text>
        </Button>
        <VStack width={"100%"} spacing={0}>
          <HStack width={"100%"} justify={"flex-start"}>
            <Text fontSize={"10px"} color={"black"} alignSelf={"center"}>
              ESTIMATED GENERATION:
            </Text>
          </HStack>
          <Text fontSize={"30px"} color={"black"} alignSelf={"flex-start"}>
            {Math.ceil(result, 2)}
          </Text>
          <Text fontSize={"9px"} color={"black"} alignSelf={"flex-start"}>
            USDT TRC20
          </Text>
        </VStack>
      </VStack>
    </ColoredComponent>
  );
};

export default StandartCalc;
