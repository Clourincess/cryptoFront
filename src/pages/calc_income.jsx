import { VStack, HStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import StandartCalc from "../components/standart_calc";
import MasterCalc from "../components/master_calc";
import redact from "../redact";

const CalcIncome = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/referal_main");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <HStack width="100%" justify={"space-between"}>
        <StandartCalc />
        <MasterCalc />
      </HStack>

      <Note
        text={redact(
          "THIS IS THE CALC PAGE.\nHERE YOU CAN CALCULATE HOW MUCH YOU CAN GENERATE USING STANDARD OR PREMIUM ACCOUNT."
        )}
      />
    </VStack>
  );
};

export default CalcIncome;
