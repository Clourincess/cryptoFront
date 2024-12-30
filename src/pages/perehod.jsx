import BalanceColored from "../components/balance_colored";
import MasterBalance from "../components/master_balance";
import Note from "../components/note";
import { useNavigate } from "react-router";
import { Button, useEditable, VStack } from "@chakra-ui/react";
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

  useEffect(() => {
    GlobalVars.getMasterAccountByUserId();
  }, []);

  return (
    <VStack width={"100%"}>
      <BalanceColored
        width="100%"
        isPerehod={true}
        height="128px"
        onClick={() => navigate("/standart_main")}
      />
      {GlobalVars.master_balance_info?.message ==
      "У данного пользователя отсутствует мастер аккаунт" ? (
        <Button
          height={"45px"}
          backgroundColor={"rgba(20, 20, 20, 0.6)"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          width={"100%"}
          borderRadius={"12px"}
          onClick={()=> navigate("/create_premium_acc")}
        >
          Create Premium Account
        </Button>
      ) : (
        <MasterBalance
          width="100%"
          isPerehod={true}
          height="128px"
          onClick={() => navigate("/master_main")}
        />
      )}

      <Note
        text={redact(
          `THIS IS THE STANDARD BALANCE PAGE.\nHERE YOU CAN GENERATE USDT WITH 0.66%/DAY RATE. ON THIS PAGE YOU CAN MAKE DEPOSITS, GENERATE USDT AND WITHDRAW IT BACK TO YOUR CRYPTO WALLET AT ANY TIME.`
        )}
      />
    </VStack>
  );
};

export default PerehodPage;
