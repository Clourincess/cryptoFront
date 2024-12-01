import { Stat, VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import WithdrawalCard from "../components/withdrawal_card";
import redact from "../redact";

const ReferalWithDraw1 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/referal_main");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <WithdrawalCard route="/referal_withdraw2" />
      <Note
        text={redact(`THIS IS THE REFERRAL BALANCE PAGE.
          
        ENTER YOUR CRYPTO WALLET ADDRESS SO THAT WE CAN TRACK THE TRANSACTION.`)}
      />
    </VStack>
  );
};

export default ReferalWithDraw1;
