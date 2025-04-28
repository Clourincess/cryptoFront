import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";

import Congrats from "../components/congrats";
import { observer } from "mobx-react-lite";

const MasterWithdraw4 = observer(() => {
  const backButton = tg.BackButton;
  backButton.hide();

  return (
    <VStack width={"100%"}>
      <Congrats />
      <Note
        text={`DO NOT CLOSE THIS TAB UNTIL YOU HAVE READ ALL THE INFORMATION.`}
      />
    </VStack>
  );
});

export default MasterWithdraw4;
