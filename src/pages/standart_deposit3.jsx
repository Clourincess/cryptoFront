import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import Congrats from "../components/congrats";
import { observer } from "mobx-react-lite";

const StandartDeposit3 = observer(() => {
  const navigate = useNavigate();
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
});

export default StandartDeposit3;
