import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";

import redInd from "./../assets/images/red_ind.svg";
import redArrow from "./../assets/images/red_arrow.svg";

const MasterWithDraw3 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_withdraw2");
    backButton.hide();
  }

  const createWithdravMaster = async () => {
    return await GlobalVars.createWithdravalMaster();
  };

  const createWithdrawal = async () => {
    const status = await createWithdravMaster();
    if (status) {
      navigate("/master_withdraw4");
      GlobalVars.updateDepositAmount("");
      GlobalVars.updateValletAmount("");
      GlobalVars.updateCreatedStandart(null);
      GlobalVars.updateCreatedMaster(null);
    } else {
      alert("Error");
    }
  };

  const { GlobalVars } = useStores();
  return (
    <VStack width={"100%"}>
      <VStack
        width={"100%"}
        align="flex-start"
        textAlign={"left"}
        justify={"space-between"}
        height={"200px"}
        background={
          "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
        }
        borderRadius="14px"
        padding={"10px"}
        spacing="0px"
        position={"relative"}
      >
        <HStack width={"100%"} justify="center" gap={"5px"}>
          <Text fontSize={"10px"} color="white">
            CHECK OUT
          </Text>
          <Image src={redInd} marginTop={"2px"} />
        </HStack>
        <VStack align={"flex-start"} gap={0}>
          <HStack width={"100%"} justify={"flex-start"} align={"center"}>
            <Image src={redArrow} />
            <Text fontSize={"10px"} color={"rgba(159, 27, 27, 1)"}>
              YOU WITHDRAW
            </Text>
          </HStack>
          <Text fontSize={"10px"} color={"white"} marginLeft={"15px"}>
            {GlobalVars.deposit_amount} USDT TRC20
          </Text>
        </VStack>

        <VStack align={"flex-start"} gap={"0"}>
          <HStack width={"100%"} justify={"flex-start"}>
            <Image src={redArrow} />
            <Text fontSize={"10px"} color={"rgba(159, 27, 27, 1)"}>
              TO CRYPTO WALLET
            </Text>
          </HStack>
          <Text fontSize={"10px"} color={"white"} marginLeft={"15px"}>
            {GlobalVars.vallet_amount}
          </Text>
        </VStack>

        <HStack width={"100%"} justify="space-around">
          <Button
            onClick={() => {
              GlobalVars.updateDepositAmount("");
              GlobalVars.updateValletAmount("");
              GlobalVars.updateCreatedStandart(null);
              GlobalVars.updateCreatedMaster(null);
              navigate("/master_withdraw1");
            }}
            background={"#9f1b1b"}
            borderRadius={"28px"}
            padding="10px 15px"
          >
            <Text fontSize={"10px"} color="black">
              CANCEL
            </Text>
          </Button>
          <Button
            onClick={async () => {
              await createWithdrawal();
            }}
            background={"rgba(139, 139, 139, 1)"}
            borderRadius={"28px"}
            padding="10px 15px"
          >
            <Text fontSize={"10px"} color="black">
              PROCEED
            </Text>
          </Button>
        </HStack>
      </VStack>
      <Note
        text={`BEFORE WITHDRAWING FUNDS, CHECK THE INFORMATION ABOVE, IF YOU ACCIDENTALLY ENTERED INCORRECT DATA, RETURN TO THE PREVIOUS PAGE AND CHANGE IT.`}
      />
    </VStack>
  );
};

export default MasterWithDraw3;
