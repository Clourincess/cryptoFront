import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import Congrats from "../components/congrats";

const MasterWithdraw4 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_withdraw3");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <Congrats />
      <Note
        text={`DO NOT CLOSE THIS TAB UNTIL YOU HAVE READ ALL THE INFORMATION.`}
      />
    </VStack>
  );
};

export default MasterWithdraw4;
