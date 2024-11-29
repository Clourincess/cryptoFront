import { Stat, VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import DepositCard from "../components/deposit_card";
import WithdrawalCard from "../components/withdrawal_card";


const StandartWithDraw1 = () => {
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
      <WithdrawalCard route="/st_withdraw_2" />
      <Note
        text={`THIS IS THE STANDARD BALANCE PAGE.
        HERE YOU ARE ABLE TO GENERATE USDT WITH 0.66%/DAY RATE. ON THIS PAGE YOU CAN MAKE DEPOSITS, GENERATE USDT AND WITHDRAW IT BACK TO YOUR CRYPTO WALLET AT ANY TIME.`}
      />
    </VStack>
  );
};

export default StandartWithDraw1;
