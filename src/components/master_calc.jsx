import { useState } from "react";
import { VStack, HStack, Text, Image, Input, Button } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
const arrow = (
  <svg
    width="6"
    height="8"
    viewBox="0 0 6 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 4.00064L1.85214e-07 7.46529L4.559e-07 0.535984L6 4.00064Z"
      fill="white"
    />
  </svg>
);

const MasterCalc = observer(() => {
  const [values, setValues] = useState([0, 0]);
  const [result, setResult] = useState(0);
  const [hold, setHold] = useState([1.25, 0]);
  return (
    <VStack
      borderRadius={"14px"}
      background={"rgba(8, 11, 16, 0.6)"}
      width={"166px"}
      height={"422.5px"}
      padding={"10px"}
      spacing={"0px"}
      justify={"space-between"}
      zIndex={10}
    >
      <Text
        background={
          "linear-gradient(88deg, #e19e13 0%, #ea743d 16.67%, #db5356 33.33%, #b94a70 50%, #b44d88 62.1%, #395cf9 76.1%, #00c2ff 94.1%)"
        }
        backgroundClip={"text"}
        fontSize={"9px"}
        textAlign={"center"}
        fontWeight={"800"}
      >
        PREMIUM <br />
        ACCOUNT
      </Text>
      <HStack
        width={"100%"}
        justify={"space-between"}
        alignItems={"center"}
        marginTop={"34px"}
        spacing={"0px"}
      >
        <HStack justify={"flex-start"}>
          {arrow}
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            ENTER DEPOSIT
          </Text>
        </HStack>

        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13.9688C10.866 13.9688 14 10.8417 14 6.98438C14 3.12701 10.866 0 7 0C3.13401 0 0 3.12701 0 6.98438C0 10.8417 3.13401 13.9688 7 13.9688Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.70963 7.6671C7.6615 7.67059 7.41344 7.68456 6.86 7.68456C6.41812 7.68456 6.10706 7.67146 5.99769 7.66622V7.66753C4.29669 7.59289 3.02706 7.29736 3.02706 6.94378C3.02706 6.59063 4.29669 6.2951 5.99769 6.21915V7.37332C6.10881 7.38117 6.42731 7.39995 6.86744 7.39995C7.3955 7.39995 7.66019 7.37812 7.70963 7.37375V6.22002C9.40713 6.29554 10.6737 6.59107 10.6737 6.94378C10.6737 7.29736 9.40713 7.59202 7.70963 7.6671ZM7.70963 6.09998V5.06716H10.0782V3.49219H3.62906V5.06716H5.99769V6.09954C4.07269 6.18772 2.625 6.56837 2.625 7.0241C2.625 7.47983 4.07269 7.86004 5.99769 7.94866V11.2584H7.70963V7.94778C9.63156 7.8596 11.0757 7.47939 11.0757 7.0241C11.0757 6.5688 9.63156 6.18859 7.70963 6.09998Z"
            fill="#131313"
          />
        </svg>
      </HStack>
      <Input
        placeholder="TYPE HERE"
        style={{
          backgroundColor: "black",
          fontSize: "10px",
          marginTop: "10px",
          textAlign: "left",
          borderRadius: "28px",
          width: "100%",
          padding: "5px 20px",
          color: "white",
        }}
        onChange={(e) => {
          setValues([Number(e.target.value), Number(values[1])]);
        }}
      />
      <HStack marginTop={"20px"}>
        <VStack
          borderRadius={"10px"}
          background={"black"}
          padding={"6px"}
          height={"62px"}
          width={"38px"}
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
            1 MONTH
          </Text>
        </VStack>
        <VStack
          borderRadius={"10px"}
          background={"black"}
          padding={"6px"}
          height={"62px"}
          width={"38px"}
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
            2 MONTH
          </Text>
        </VStack>
        <VStack
          borderRadius={"10px"}
          background={"black"}
          padding={"6px"}
          height={"62px"}
          width={"38px"}
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
            4 MONTH
          </Text>
        </VStack>
      </HStack>
      <Button
        borderRadius={"28px"}
        width={"86px"}
        background={"black"}
        marginTop={"20px"}
        padding="10px"
        onClick={() => {
          setResult(values[0] * hold[0]);
        }}
      >
        <Text
          style={{
            fontSize: "9px",
            letterSpacing: "-0.02em",
            color: "white",
          }}
        >
          CALCULATE
        </Text>
      </Button>
      <VStack
        width={"100%"}
        spacing={0}
        backgroundColor={"black"}
        borderRadius={"10px"}
        padding={"8px"}
        marginTop={"30px"}
      >
        <HStack width={"100%"} justify={"flex-start"}>
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            ESTIMATED GENERATION:
          </Text>
        </HStack>
        <Text
          fontSize={"27px"}
          color={"white"}
          alignSelf={"flex-start"}
          marginTop={"20px"}
        >
          {Math.ceil(result, 2)}
        </Text>
        <Text fontSize={"9px"} color={"white"} alignSelf={"flex-start"}>
          USDT TRC20
        </Text>
      </VStack>
    </VStack>
  );
});

export default MasterCalc;
