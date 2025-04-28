import { VStack } from "@chakra-ui/react";
import Stats from "../components/stats";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";
import { observer } from "mobx-react-lite";

const StandartStats = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/standart_main");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  return (
    <VStack width={"100%"}>
      <Stats
        deposited={GlobalVars.report_standart.deposit_sum || 0}
        generated={GlobalVars.report_standart.profit || 0}
        withdrawn={GlobalVars.report_standart.withdrawal_sum || 0}
      />
      <Note text={"THIS PAGE SHOWS YOUR ACTIVITY IN THE STANDARD BALANCE."} />
    </VStack>
  );
});

export default StandartStats;
