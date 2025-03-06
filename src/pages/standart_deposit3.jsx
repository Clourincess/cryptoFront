import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import Congrats from "../components/congrats";

const StandartDeposit3 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();

  return (
    <VStack width={"100%"}>
      <Congrats />
    </VStack>
  );
};

export default StandartDeposit3;
