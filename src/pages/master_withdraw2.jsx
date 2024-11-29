import { Stat, VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import DepositCard from "../components/deposit_card";
import WithdrawalCard from "../components/withdrawal_card";

const MasterWithDraw2 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_withdraw1");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <WithdrawalCard route="/master_withdraw3" standart={false} />
      <Note
        text={`
        ENTER YOUR WALLET ADDRESS TO WHERE FUNDS WILL GO.
        `}
      />
    </VStack>
  );
};

export default MasterWithDraw2;
