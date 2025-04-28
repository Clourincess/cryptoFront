import BalanceColored from "../components/balance_colored";
import MasterBalance from "../components/master_balance";
import Note from "../components/note";
import { useNavigate } from "react-router";
import { Button, HStack, Text, useEditable, VStack } from "@chakra-ui/react";
import tg from "../tg_vars";
import redact from "../redact";
import { useEffect } from "react";
import { useStores } from "../store/store_context";
import { observer } from "mobx-react-lite";

const PerehodPage = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  return (
    <VStack width={"100%"} height={"auto"}>
      <BalanceColored
        width="100%"
        isPerehod={true}
        height="128px"
        onClick={() => navigate("/standart_main")}
        balance={GlobalVars.standart_balance?.balance || 0}
      />
      {GlobalVars.master_balance?.message ==
      "У данного пользователя отсутствует мастер аккаунт" ? (
        <HStack
          w={"100%"}
          backgroundColor={"rgba(8, 11, 16, 0.6)"}
          padding={"5px 11px"}
          justify={"space-between"}
        >
          <Text
            fontSize={"9px"}
            background={
              "linear-gradient(86.54deg, #E19E13 -13.17%, #EA743D -1.61%, #DB5356 9.95%, #B94A70 21.51%, #B44D88 29.9%, #395CF9 39.62%, #00C2FF 52.1%)"
            }
            backgroundClip={"text"}
          >
            PREMIUM ACCOUNT
          </Text>
          <Text
            fontSize={"9px"}
            color={"white"}
            padding={"5px 11px"}
            background={"rgba(30,30,30,1)"}
            borderRadius={"20px"}
            cursor={"pointer"}
            onClick={() => navigate("/create_premium_acc")}
          >
            ACTIVATE
          </Text>
        </HStack>
      ) : (
        <MasterBalance
          balance={GlobalVars?.master_balance?.balance || 0}
          width="100%"
          isPerehod={true}
          height="128px"
          onClick={() => navigate("/master_main")}
        />
      )}

      <Note text={redact(`SELECT ONE OF THE FOLLOWING ACCOUNTS.`)} />
    </VStack>
  );
});

export default PerehodPage;
