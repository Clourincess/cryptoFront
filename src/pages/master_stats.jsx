import { VStack } from "@chakra-ui/react";
import Stats from "../components/stats";
import Note from "../components/note";
import { useNavigate } from "react-router";
import tg from "../tg_vars";
import { useStores } from "../store/store_context";
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

  return (
    <VStack width={"100%"}>
      <Stats
        deposited={GlobalVars.report_master.deposit_sum}
        generated={GlobalVars.report_master.profit}
        withdrawn={GlobalVars.report_master.withdrawal_sum}
      />
      <Note text={"THIS PAGE DISPLAYS YOUR ACTIVITY IN THE PREMIUM BALANCE."} />
    </VStack>
  );
};

export default MasterStats;
