import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";

import CheckOut from "../components/check_out";

const MasterDeposit2 = () => {
  const backButton = tg.BackButton;
  backButton.hide();

  return (
    <VStack width={"100%"}>
      <CheckOut
        gettings={[
          "20 USDT TRC20 ON YOUR STANDART BALANCE",
          "x1.25 GENERATION (1 MONTH TERM)",
        ]}
        next_route="/master_deposit3"
        back_route="/master_choose"
      />
      <Note
        text={`SEND FUNDS TO THE OSIRIS USDT TRC20 ADDRESS ABOVE, WHEN IT’S SENT, CLICK “SENT” BUTTON HERE. ONCE THE PAYMENT IS SUCCESSFUL , YOU WILL GET FUNDS IN YOUR OSIRIS ACCOUNT RIGHT AFTER.`}
      />
    </VStack>
  );
};

export default MasterDeposit2;
