import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import ColoredComponent from "./colored_component_wrapper";
import usdt_logo from "./../assets/images/usdt_logo.svg";

const BalanceColored = ({
  balance,
  width = "178px",
  onClick = () => {},
  height = "",
  isPerehod = false,
}) => {
  return (
    <ColoredComponent
      width={width}
      onClick={onClick}
      height={height != "" ? height : "auto"}
      background="radial-gradient(120% 107.04% at -10% 74.72%, #E38F24 0%, #E38F24 13.41%, #E35A65 37.11%, #C3527F 55.9%, #3A79F2 69.99%, #04B5FC 99.96%)"
    >
      <HStack width={"100%"} justify={"space-between"}>
        <Text fontSize={"9px"} color={"black"}>
          {isPerehod ? "STANDARD ACCOUNT" : "BALANCE"}
        </Text>
        <svg
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.753715 8L0 7.29L3.49257 4L0 0.71L0.753715 0L5 4L0.753715 8Z"
            fill="#1C1B1F"
          />
        </svg>
      </HStack>
      <HStack width={"100%"} justify={"space-between"}>
        <VStack align={"flex-start"} textAlign={"left"} spacing={0}>
          <Text fontSize={26} color={"black"} letterSpacing={-2}>
            {balance || 0}
          </Text>
          {!isPerehod && (
            <Text fontSize={"9px"} color={"black"}>
              USDT TRC20
            </Text>
          )}
        </VStack>
        <VStack>
          <Image
            src={usdt_logo}
            width={"46px"}
            height={"46px"}
            marginBottom={1}
          />
        </VStack>
      </HStack>
    </ColoredComponent>
  );
};

export default BalanceColored;
