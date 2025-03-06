import BalanceColored from "../components/balance_colored";
import MasterBalance from "../components/master_balance";
import Note from "../components/note";
import { useNavigate } from "react-router";
import { Button, HStack, Text, useEditable, VStack } from "@chakra-ui/react";
import tg from "../tg_vars";
import redact from "../redact";
import { useEffect } from "react";
import { useStores } from "../store/store_context";

const PerehodPage = () => {
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
    <VStack width={"100%"}>
      <BalanceColored
        width="100%"
        isPerehod={true}
        height="128px"
        onClick={() => navigate("/standart_main")}
        balance={GlobalVars.standart_balance?.balance || 0}
      />
      {GlobalVars.master_balance?.message ==
      "У данного пользователя отсутствует мастер аккаунт" ? (
        <Button
          height={"45px"}
          backgroundColor={"rgba(8, 11, 16, 0.6)"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          width={"100%"}
          borderRadius={"12px"}
          onClick={() => navigate("/create_premium_acc")}
        >
          Create Premium Account
        </Button>
      ) : (
        <MasterBalance
          balance={GlobalVars?.master_balance?.balance || 0}
          width="100%"
          isPerehod={true}
          height="128px"
          onClick={() => navigate("/master_main")}
        />
      )}

      <HStack
        backgroundColor={"rgba(8, 11, 16, 0.6)"}
        w={"100%"}
        borderRadius={"12px"}
        height={"128px"}
        padding={"8px"}
        align={"flex-start"}
        cursor={"pointer"}
        onClick={() => navigate("/deposit_history")}
      >
        <Text color={"white"} fontSize={"9px"}>
          DEPOSIT HISTORY
        </Text>
      </HStack>

      <Note
        text={redact(
          `SELECT ONE OF THE FOLLOWING ACCOUNTS.`
        )}
      />
    </VStack>
  );
};

export default PerehodPage;
