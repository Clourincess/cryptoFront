import {
  VStack,
  Text,
  HStack,
  Input,
  Button,
  useEditable,
} from "@chakra-ui/react";
import ColoredComponent from "./colored_component_wrapper";
import { useEffect, useState } from "react";
import { useStores } from "../store/store_context";

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
  const { GlobalVars } = useStores();

  useEffect(() => {
    GlobalVars.getCoefStandart();
  }, []);
  return (
    <ColoredComponent>
      <VStack width={"100%"} height={"100%"} spacing={"0px"}>
        <Text
          fontSize={"10px"}
          fontWeight={"800"}
          color={"black"}
          alignSelf={"center"}
          textAlign={"center"}
        >
          STANDARD <br /> ACCOUNT
        </Text>
        <HStack
          width={"100%"}
          justify={"space-between"}
          alignItems={"center"}
          marginTop={"34px"}
        >
          <HStack justify={"flex-start"}>
            {arrow}
            <Text fontSize={"9px"} color={"rgba(7,7,7,1)"} alignSelf={"center"}>
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
              fill="#070707"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.70963 7.6671C7.6615 7.67059 7.41344 7.68456 6.86 7.68456C6.41812 7.68456 6.10706 7.67146 5.99769 7.66622V7.66753C4.29669 7.59289 3.02706 7.29736 3.02706 6.94378C3.02706 6.59063 4.29669 6.2951 5.99769 6.21915V7.37332C6.10881 7.38117 6.42731 7.39995 6.86744 7.39995C7.3955 7.39995 7.66019 7.37812 7.70963 7.37375V6.22002C9.40713 6.29554 10.6737 6.59107 10.6737 6.94378C10.6737 7.29736 9.40713 7.59202 7.70963 7.6671ZM7.70963 6.09998V5.06716H10.0782V3.49219H3.62906V5.06716H5.99769V6.09954C4.07269 6.18772 2.625 6.56837 2.625 7.0241C2.625 7.47983 4.07269 7.86004 5.99769 7.94866V11.2584H7.70963V7.94778C9.63156 7.8596 11.0757 7.47939 11.0757 7.0241C11.0757 6.5688 9.63156 6.18859 7.70963 6.09998Z"
              fill="#05B4FF"
            />
          </svg>
        </HStack>
        <Input
          placeholder="TYPE HERE"
          style={{
            backgroundColor: "black",
            fontSize: "10px",
            textAlign: "left",
            borderRadius: "28px",
            width: "100%",
            padding: "5px 20px",
            color: "white",
            marginTop: "10px",
          }}
          onChange={(e) => {
            setValues([Number(e.target.value), Number(values[1])]);
          }}
        />
        <HStack width={"100%"} justify={"flex-start"} marginTop={"34px"}>
          {arrow}
          <Text fontSize={"10px"} color={"black"} alignSelf={"center"}>
            ENTER DAYS NUMBER
          </Text>
        </HStack>
        <Input
          placeholder="TYPE HERE"
          style={{
            backgroundColor: "black",
            fontSize: "10px",
            marginTop: "10px",
            borderRadius: "28px",
            width: "100%",
            padding: "5px 20px",
            color: "white",
            textAlign: "left",
          }}
          onChange={(e) => {
            setValues([Number(values[0]), Number(e.target.value)]);
          }}
        />
        <Button
          borderRadius={"28px"}
          width={"86px"}
          backgroundColor={"black"}
          marginTop={"31px"}
          padding="10px"
          onClick={() => {
            setResult(
              (values[0] + values[1]) *
                parseFloat(GlobalVars.standart_coef?.data?.value)
            );
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
        <VStack
          width={"100%"}
          spacing={0}
          backgroundColor={"black"}
          padding={"8px"}
          borderRadius={"10px"}
          marginTop={"30px"}
        >
          <HStack width={"100%"} justify={"flex-start"}>
            <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
              ESTIMATED GENERATION:
            </Text>
          </HStack>
          <Text
            fontSize={"30px"}
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
    </ColoredComponent>
  );
};

export default StandartCalc;
