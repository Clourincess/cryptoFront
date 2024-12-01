import { Stat, VStack } from "@chakra-ui/react";
import Stats from "../components/stats";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";
import { useEffect } from "react";

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

  useEffect(() => {
    GlobalVars.getReferalStats();
    GlobalVars.getAllReferralPrograms();
  }, []);
  console.log("glo", GlobalVars.referalStats);
  return (
    <VStack width={"100%"}>
      <Stats
        withdrawn={GlobalVars.referalStats.id} //заменить 
        deposited={GlobalVars.referalStats.count_referal_user}
        generated={GlobalVars.referalStats.total_profit_referal}
        type={"ref"}
      />
      <Note
        text={"THIS PAGE DISPLAYS YOUR ACTIVITY IN THE REFERRAL BALANCE."}
      />
    </VStack>
  );
};

export default ReferalStats;
