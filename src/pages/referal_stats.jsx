import { VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";

import Stats from "../components/stats";
import Note from "../components/note";
import tg from "../tg_vars";

const ReferalStats = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/referal_main");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  return (
    <VStack width={"100%"}>
      <Stats
        deposited={GlobalVars.referral_program?.count_referal_user || 0}
        generated={GlobalVars.referral_program?.total_profit_referal || 0}
        withdrawn={GlobalVars.report_standart?.withdrawal_sum || 0}
        type={"ref"}
      />
      <Note
        text={"THIS PAGE DISPLAYS YOUR ACTIVITY IN THE REFERRAL BALANCE."}
      />
    </VStack>
  );
};

export default ReferalStats;
