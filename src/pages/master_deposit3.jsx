import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";

import Congrats from "../components/congrats";

const MasterDeposit3 = () => {
  const backButton = tg.BackButton;
  backButton.show();

  return (
    <VStack width={"100%"}>
      <Congrats />
      <Note
        text={`DO NOT CLOSE THIS TAB UNTIL YOU HAVE READ ALL THE INFORMATION.`}
      />
    </VStack>
  );
};

export default MasterDeposit3;
