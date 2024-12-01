import { VStack, HStack, Text, Button, Input } from "@chakra-ui/react";
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
      fill="white"
    />
  </svg>
);
const WithdrawalCard = ({ route = "/", standart = true }) => {
  const navigate = useNavigate();
  return (
    <VStack
      borderRadius={"14px"}
      width={"100%"}
      height={"220px"}
      padding={"7px 22px 22px 9px"}
      align={"center"}
      background={"rgba(20,20,20,0.6)"}
      justify={"space-between"}
      zIndex={100}
    >
      <HStack width={"100%"} justify={"center"}>
        <HStack alignSelf={"center"} justify={"center"}>
          <Text fontSize={"10px"} color={"white"}>
            WITHDRAWAL CARD
          </Text>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#B81E1E" fill-opacity="0.5" />
            <circle cx="4" cy="4" r="3" fill="#B81E1E" />
          </svg>
        </HStack>
      </HStack>
      <HStack width={"100%"} align={"flex-end"} justify={"space-between"}>
        <VStack>
          {standart ? (
            <>
              <HStack width={"100%"} justify={"flex-start"}>
                {arrow}
                <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
                  ENTER WITHDRAW AMOUNT
                </Text>
              </HStack>
              <Input
                placeholder="TYPE HERE"
                style={{
                  backgroundColor: "black",
                  fontSize: "10px",

                  borderRadius: "28px",
                  width: "100%",
                  padding: "5px 20px",
                  color: "white",
                }}
              />
            </>
          ) : null}

          <HStack width={"100%"} justify={"flex-start"}>
            {arrow}
            <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
              ENTER YOUR WALLET ADDRESS
            </Text>
          </HStack>
          <Input
            placeholder="TYPE HERE"
            style={{
              backgroundColor: "black",
              fontSize: "10px",

              borderRadius: "28px",
              width: "100%",
              padding: "5px 20px",
              color: "white",
            }}
          />
        </VStack>
        <Button
          borderRadius={"28px"}
          height={"36px"}
          width={"82px"}
          onClick={() => navigate(route)}
          background={
            "linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
          }
        >
          <Text fontSize={"10px"} color={"black"} alignSelf={"center"}>
            NEXT
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default WithdrawalCard;
