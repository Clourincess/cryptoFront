import { VStack } from "@chakra-ui/react";
import Stats from "../components/stats";
import Note from "../components/note";
import { useNavigate } from "react-router";
import tg from "../tg_vars";
import { useStores } from "../store/store_context";
import { useEffect } from "react";

const MasterStats = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_main");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  useEffect(() => {
    GlobalVars.getStats(true);
  });
  return (
    <VStack width={"100%"}>
      <Stats
        withdrawn={GlobalVars.masterStats.withdrawal_sum}
        deposited={GlobalVars.masterStats.deposit_sum}
        generated={GlobalVars.masterStats.profit}
      />
      <Note text={"THIS PAGE DISPLAYS YOUR ACTIVITY IN THE PREMIUM BALANCE."} />
    </VStack>
  );
};

export default MasterStats;
