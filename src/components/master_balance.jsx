import { VStack, HStack, Text, Box } from "@chakra-ui/react";
import "./styles.css";

import { keyframes } from "@emotion/react";

const MasterBalance = ({
  balance,
  width = "178px",
  className = "",
  onClick = () => {
    console.log("hi");
  },
  height = "",
  isPerehod = false,
}) => {
  return (
    <VStack
      width={width}
      backgroundColor={"rgba(8, 11, 16, 1)"}
      borderRadius={"14px"}
      padding={"10px"}
      onClick={onClick}
      height={height != "" ? height : "auto"}
      justify={"space-between"}
      zIndex={2}
      // borderColor={"white"}
      // borderWidth={1}
      position={"relative"}
      className={`${className}`}
    >
      <HStack width={"100%"} justify={"space-between"}>
        <Text
          fontSize={"9px"}
          color={"black"}
          background={
            "linear-gradient(86.54deg, #E19E13 -13.17%, #EA743D -1.61%, #DB5356 9.95%, #B94A70 21.51%, #B44D88 29.9%, #395CF9 39.62%, #00C2FF 52.1%)"
          }
          backgroundClip={"text"}
        >
          {isPerehod ? "PREMIUM ACCOUNT" : "PREMIUM BALANCE"}
        </Text>
        <svg
          width="10"
          height="10"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="7.07104"
            width="10"
            height="1.42857"
            transform="rotate(45 7.07104 0)"
            fill="#D9D9D9"
          />
          <rect
            x="6.06091"
            y="13.1318"
            width="10"
            height="1.42857"
            transform="rotate(-45 6.06091 13.1318)"
            fill="#D9D9D9"
          />
        </svg>
      </HStack>
      <HStack width={"100%"} justify={"space-between"}>
        <VStack align={"flex-start"} textAlign={"left"} spacing={0}>
          <Text fontSize={"26px"} color={"white"}>
            {balance?.toFixed(2) || 0}
          </Text>
          {!isPerehod && (
            <Text fontSize={"9px"} color={"white"}>
              USDT TRC20
            </Text>
          )}
        </VStack>
        <VStack marginBottom={1}>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
              fill="#4A545D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.9232 25.4098V25.4068C25.7595 25.4185 24.9156 25.4679 23.0327 25.4679C21.5295 25.4679 20.4712 25.4243 20.0991 25.4068V25.4112C14.3122 25.1625 9.99284 24.1779 9.99284 22.9998C9.99284 21.8232 14.3122 20.8386 20.0991 20.5856V24.431C20.4772 24.4571 21.5607 24.5197 23.058 24.5197C24.8546 24.5197 25.755 24.447 25.9232 24.4324V20.5885C31.6982 20.8401 36.0072 21.8247 36.0072 22.9998C36.0072 24.1779 31.6982 25.1596 25.9232 25.4098ZM25.9232 20.1885V16.7474H33.9814V11.5H12.0409V16.7474H20.0991V20.1871C13.5501 20.4808 8.625 21.7491 8.625 23.2674C8.625 24.7858 13.5501 26.0526 20.0991 26.3478V37.375H25.9232V26.3449C32.4618 26.0511 37.375 24.7844 37.375 23.2674C37.375 21.7505 32.4618 20.4837 25.9232 20.1885Z"
              fill="#070708"
            />
          </svg>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MasterBalance;
