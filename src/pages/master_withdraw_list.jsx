import { Stat, VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import DepositList from "../components/deposit_list";
import { observer } from "mobx-react-lite";

const MasterWithdrawList = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_main");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <DepositList />
    </VStack>
  );
});

export default MasterWithdrawList;
