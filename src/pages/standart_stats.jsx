import { Stat, VStack } from "@chakra-ui/react";
import Stats from "../components/stats";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";
import { useEffect } from "react";

const StandartStats = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/standart_main");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  useEffect(() => {
    GlobalVars.getStats(false);
  });

  return (
    <VStack width={"100%"}>
      <Stats
        withdrawn={GlobalVars.standartStats.withdrawal_sum}
        deposited={GlobalVars.standartStats.deposit_sum}
        generated={GlobalVars.standartStats.profit}
      />
      <Note text={"THIS PAGE SHOWS YOUR ACTIVITY IN THE STANDARD BALANCE."} />
    </VStack>
  );
};

export default StandartStats;
