import { Stat, VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import DepositCard from "../components/deposit_card";
import redact from "../redact";
import { observer } from "mobx-react-lite";

const StandartDeposit1 = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/standart_main");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <DepositCard route="/st_deposit_2" />
      <Note
        text={redact(
          `ENTER YOUR DEPOSIT IN USDT TRC20.

ENTER YOUR USDT TRC20 ADDRESS SO THAT WE CAN TRACK THE TRANSACTION.`
        )}
      />
    </VStack>
  );
});

export default StandartDeposit1;
