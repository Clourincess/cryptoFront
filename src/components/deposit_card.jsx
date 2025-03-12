import { VStack, HStack, Text, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";
import { useEffect, useState } from "react";

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
const DepositCard = ({ route = "/" }) => {
  const navigate = useNavigate();
  const { GlobalVars } = useStores();

  const [depositAmount, setDepositAmount] = useState("");
  const [valletAmount, setValletAmount] = useState("");

  useEffect(() => {
    GlobalVars.updateDepositAmount(depositAmount);
    GlobalVars.updateValletAmount(valletAmount);
  }, [depositAmount, valletAmount]);

  const createDepositStandart = async () => {
    const success = await GlobalVars.createDepositStandart();
    if (success) {
      navigate("/st_deposit_2");
    } else {
      alert("Error when making a deposit! Try again later.");
    }
  };

  return (
    <VStack
      borderRadius={"14px"}
      width={"100%"}
      height={"220px"}
      padding={"8px 22px 22px 10px"}
      align={"center"}
      backgroundColor="rgba(8, 11, 16, 0.6)"
      justify={"space-between"}
      zIndex={100}
    >
      <HStack width={"100%"} justify={"center"}>
        <HStack alignSelf={"center"} justify={"center"} spacing={1}>
          <Text fontSize={"9px"} color={"white"}>
            DEPOSIT CARD
          </Text>
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="3.5" r="3.5" fill="#1EB85B" />
            <circle cx="3.5" cy="3.5" r="2.625" fill="#1EB85B" />
          </svg>
        </HStack>
      </HStack>
      <HStack
        width={"100%"}
        align={"flex-end"}
        justify={"space-between"}
        position={"relative"}
      >
        <VStack align={"flex-start"}>
          <HStack width={"100%"} justify={"flex-start"} spacing={1}>
            {arrow}
            <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
              ENTER DEPOSIT
            </Text>
          </HStack>

          <Input
            placeholder="TYPE HERE"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            style={{
              backgroundColor: "black",
              fontSize: "10px",
              borderRadius: "28px",
              width: "100%",
              padding: "5px 20px",
              color: "white",
            }}
          />
          {depositAmount == "" && (
            <Text
              color={"rgba(199, 32, 32, 1)"}
              fontSize={"7px"}
              marginLeft={"5px"}
            >
              ENTER DEPOSIT
            </Text>
          )}
          <HStack
            width={"100%"}
            justify={"flex-start"}
            spacing={1}
            marginTop={"10px"}
          >
            {arrow}
            <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
              ENTER YOUR USDT TRC20 ADDRESS
            </Text>
          </HStack>
          <Input
            placeholder="TYPE HERE"
            value={valletAmount}
            onChange={(e) => setValletAmount(e.target.value)}
            style={{
              backgroundColor: "black",
              fontSize: "10px",
              borderRadius: "28px",
              width: "100%",
              padding: "5px 20px",
              color: "white",
            }}
          />
          {valletAmount == "" && (
            <Text
              color={"rgba(199, 32, 32, 1)"}
              fontSize={"7px"}
              marginLeft={"5px"}
            >
              ENTER VALLET AMOUNT
            </Text>
          )}
        </VStack>
        <Button
          borderRadius={"28px"}
          cursor={
            depositAmount == "" || valletAmount == "" ? "no-drop" : "pointer"
          }
          height={"36px"}
          width={"82px"}
          background={
            depositAmount != "" && valletAmount != ""
              ? "linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
              : "rgba(153, 28, 28, 1)"
          }
          disabled={depositAmount == "" || valletAmount == ""}
          onClick={async () => {
            route == "/st_deposit_2"
              ? await createDepositStandart()
              : navigate("/master_choose");
          }}
        >
          <Text fontSize={"9px"} color={"black"} alignSelf={"center"}>
            NEXT
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default DepositCard;
