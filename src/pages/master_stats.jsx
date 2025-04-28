import { VStack } from "@chakra-ui/react";
import Stats from "../components/stats";
import Note from "../components/note";
import { useNavigate } from "react-router";
import tg from "../tg_vars";
import { useStores } from "../store/store_context";
import { observer } from "mobx-react-lite";

const MasterStats = observer(() => {
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
        deposited={GlobalVars.report_master.deposit_sum || 0}
        generated={GlobalVars.report_master.profit || 0}
        withdrawn={GlobalVars.report_master.withdrawal_sum || 0}
      />
      <Note text={"THIS PAGE DISPLAYS YOUR ACTIVITY IN THE PREMIUM BALANCE."} />
    </VStack>
  );
});

export default MasterStats;
