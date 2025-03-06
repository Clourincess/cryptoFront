import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import CheckOut from "../components/check_out";

const StandartDeposit2 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.hide();
  return (
    <VStack width={"100%"}>
      <CheckOut />
      <Note
        text={`SEND FUNDS TO THE OSIRIS USDT TRC20 ADDRESS ABOVE, WHEN IT’S SENT, CLICK “SENT” BUTTON HERE. ONCE THE PAYMENT IS SUCCESSFUL , YOU WILL GET FUNDS IN YOUR OSIRIS ACCOUNT RIGHT AFTER.`}
      />
    </VStack>
  );
};

export default StandartDeposit2;
