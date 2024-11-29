import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
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
      fill="#2281a8"
    />
  </svg>
);

const CheckOut = ({
  count = 20,
  adress = "JKkska29jksk71qncxa92",
  gettings = [
    `${count} USDT TRC20 ON YOUR STANDART BALANCE`,
    "0.66 %/DAY GENERATION",
  ],
  back_route = "/st_deposit_1",
  next_route = "/st_deposit_3",
}) => {
  const navigate = useNavigate();
  return (
    <VStack
      width={"100%"}
      align="flex-start"
      textAlign={"left"}
      justify={"space-between"}
      height="300px"
      background={
        "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
      }
      borderRadius="14px"
      padding={"10px"}
      spacing="0px"
    >
      <HStack width={"100%"} justify="center">
        <Text fontSize={"10px"} color="white">
          CHECK OUT
        </Text>{" "}
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#2281A8" fill-opacity="0.5" />
          <circle cx="4" cy="4" r="3" fill="#2281A8" />
        </svg>
      </HStack>
      <HStack width={"100%"} justify={"flex-start"}>
        {arrow}
        <Text fontSize={"10px"} color={"white"}>
          YOU NEED TO SEND
        </Text>
      </HStack>
      <Text fontSize={"10px"} color={"white"}>
        {count} USDT TRC20
      </Text>
      <HStack width={"100%"} justify={"flex-start"}>
        {arrow}
        <Text fontSize={"10px"} color={"white"}>
          TO CRYPTO WALLET
        </Text>
      </HStack>
      <Text fontSize={"10px"} color={"white"}>
        {adress}
      </Text>
      <HStack width={"100%"} justify={"flex-start"}>
        {arrow}
        <Text fontSize={"10px"} color={"white"}>
          YOU GET
        </Text>
      </HStack>
      <Text fontSize={"10px"} color={"white"}>
        {gettings[0]}
      </Text>
      <Text fontSize={"10px"} color={"white"}>
        {gettings[1]}
      </Text>
      <HStack width={"100%"} justify="space-around">
        <Button
          background={"#8b8b8b"}
          borderRadius={"28px"}
          padding="10px 15px"
          onClick={() => navigate(back_route)}
        >
          <Text fontSize={"10px"} color="black">
            BACK
          </Text>
        </Button>
        <Button
          background={
            "linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
          }
          borderRadius={"28px"}
          padding="10px 15px"
          onClick={() => navigate(next_route)}
        >
          <Text fontSize={"10px"} color="black">
            I SEND IT
          </Text>
        </Button>
        <Button
          background={"#9f1b1b"}
          borderRadius={"28px"}
          padding="10px 15px"
        >
          <Text fontSize={"10px"} color="black">
            CANCEL
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default CheckOut;
