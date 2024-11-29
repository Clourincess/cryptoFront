import { useState } from "react";
import { VStack, HStack, Text, Image, Input, Button } from "@chakra-ui/react";
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
const MasterCalc = () => {
  const [values, setValues] = useState([0, 0]);
  const [result, setResult] = useState(0);
  const [hold, setHold] = useState([1.25, 0]);
  return (
    <VStack
      borderRadius={"14px"}
      background={
        "black"
      }
      width={"170px"}
      height={"356px"}
      padding={"10px"}
      spacing={"10px"}
      justify={"space-between"}
      zIndex={10}
    >
      <Text
        background={
          "linear-gradient(88deg, #e19e13 0%, #ea743d 16.67%, #db5356 33.33%, #b94a70 50%, #b44d88 62.1%, #395cf9 76.1%, #00c2ff 94.1%)"
        }
        backgroundClip={"text"}
        fontSize={"10px"}
        textAlign={"center"}
      >
        PREMIUN <br />ACCOUNT
      </Text>
      <HStack width={"100%"} justify={"flex-start"}>
        {arrow}
        <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
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
      <HStack>
        {" "}
        <VStack
          borderRadius={"14px"}
          background={"#141414"}
          padding={"2px"}
          onClick={() => {
            setHold([1.25, 0]);
          }}
          align={"center"}
          border={hold[1] == 0 ? "2px solid white" : "2px solid transparent"}
        >
          <Text fontSize={"9px"} color={"white"}>
            x1.25
          </Text>
          <Text fontSize={"9px"} color={"white"} textAlign={"center"}>
            1 MONTH HOLD
          </Text>
        </VStack>
        <VStack
          borderRadius={"14px"}
          background={"#141414"}
          padding={"2px"}
          onClick={() => {
            setHold([1.75, 1]);
          }}
          align={"center"}
          border={hold[1] == 1 ? "2px solid white" : "2px solid transparent"}
        >
          <Text fontSize={"9px"} color={"white"}>
            x1.75
          </Text>
          <Text fontSize={"9px"} color={"white"} textAlign={"center"}>
            1 MONTH HOLD
          </Text>
        </VStack>
        <VStack
          borderRadius={"14px"}
          background={"#141414"}
          padding={"2px"}
          onClick={() => {
            setHold([2.25, 2]);
          }}
          align={"center"}
          border={hold[1] == 2 ? "2px solid white" : "2px solid transparent"}
        >
          <Text fontSize={"9px"} color={"white"}>
            x2.25
          </Text>
          <Text fontSize={"9px"} color={"white"} textAlign={"center"}>
            1 MONTH HOLD
          </Text>
        </VStack>
      </HStack>
      <Button
        borderRadius={"28px"}
        width={"86px"}
        backgroundcolor={"white"}
        padding="10px"
        onClick={() => {
          setResult(values[0] * hold[0]);
        }}
      >
        <Text
          style={{
            fontSize: "10px",
            letterSpacing: "-0.02em",
            color: "white",
          }}
        >
          CALCULATE
        </Text>
      </Button>
      <VStack width={"100%"} spacing={0}>
        <HStack width={"100%"} justify={"flex-start"}>
          
          <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
            ESTIMATED GENERATION:
          </Text>
        </HStack>
        <Text fontSize={"30px"} color={"white"} alignSelf={"flex-start"}>
          {Math.ceil(result, 2)}
        </Text>
        <Text fontSize={"9px"} color={"white"} alignSelf={"flex-start"}>
          USDT TRC20
        </Text>
      </VStack>
    </VStack>
  );
};

export default MasterCalc;
