import { VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

import StandartCalc from "../components/standart_calc";
import MasterCalc from "../components/master_calc";
import Note from "../components/note";
import tg from "../tg_vars";
import redact from "../redact";
import { observer } from "mobx-react-lite";

const CalcIncome = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    backButton.hide();
  }
  return (
    <VStack width={"100%"} gap={"8px"}>
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
});

export default CalcIncome;
