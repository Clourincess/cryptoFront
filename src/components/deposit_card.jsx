import {
  VStack,
  HStack,
  Text,
  Button,
  Input,
  useEditable,
} from "@chakra-ui/react";
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

  useEffect(() => {
    GlobalVars.updateMasterDepositAmount(depositAmount);
    console.log("dep", depositAmount);
    console.log("vars", GlobalVars?.master_deposit_amount);
    console.log("balance id", GlobalVars?.master_balance_info?.id);
  }, [depositAmount]);

  const createMasterDeposit = async () => {
    await GlobalVars.createMasterDeposit();
    navigate("/master_main");
  };

  return (
    <VStack
      borderRadius={"14px"}
      width={"100%"}
      height={"220px"}
      padding={"8px 22px 22px 10px"}
      align={"center"}
      backgroundColor="rgba(20, 20, 20, 1)"
      justify={"space-between"}
      zIndex={100}
    >
      <HStack width={"100%"} justify={"center"}>
        <HStack alignSelf={"center"} justify={"center"} spacing={1}>
          <Text fontSize={"10px"} color={"white"}>
            DEPOSIT CARD
          </Text>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#1EB85B" fill-opacity="0.5" />
            <circle cx="4" cy="4" r="4" fill="#1EB85B" fill-opacity="0.5" />
            <circle cx="4" cy="4" r="3" fill="#1EB85B" />
          </svg>
        </HStack>
      </HStack>
      <HStack
        width={"100%"}
        align={"flex-end"}
        justify={"space-between"}
        position={"relative"}
      >
        <VStack>
          <HStack width={"100%"} justify={"flex-start"} spacing={1}>
            {arrow}
            <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
              ENTER DEPOSIT AMOUNT
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
          <HStack width={"100%"} justify={"flex-start"} spacing={1}>
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
          cursor={depositAmount == "" ? "no-drop" : "pointer"}
          height={"36px"}
          width={"82px"}
          onClick={async () => {
            await createMasterDeposit();
            
          }}
          background={
            depositAmount != ""
              ? "linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
              : "rgba(153, 28, 28, 1)"
          }
          disabled={depositAmount == ""}
        >
          <Text fontSize={"10px"} color={"black"} alignSelf={"center"}>
            ENTER
          </Text>
        </Button>
        {depositAmount == "" && (
          <Text
            position={"absolute"}
            right={"0px"}
            bottom={"-13px"}
            color={"rgba(199, 32, 32, 1)"}
            fontSize={"7px"}
          >
            ENTER DEPOSIT AMOUNT
          </Text>
        )}
      </HStack>
    </VStack>
  );
};

export default DepositCard;
