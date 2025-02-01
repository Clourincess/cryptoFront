import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

import tg from "../tg_vars";
import { useStores } from "../store/store_context";

const StandartDeposit4 = () => {
  const { GlobalVars } = useStores();
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    GlobalVars.updateCreatedStandart(null);
    GlobalVars.updateDepositAmount("");
    GlobalVars.updateValletAmount("");
    backButton.hide();
  }

  const arrow = (
    <svg
      width="6"
      height="8"
      viewBox="0 0 6 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4L1.50571e-07 7.4641L4.53412e-07 0.535898L6 4Z"
        fill="#D9D9D9"
      />
    </svg>
  );

  const indicator = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#D10000" fill-opacity="0.5" />
      <circle
        cx="7.99989"
        cy="7.99999"
        r="5.53846"
        fill="#D10000"
        fill-opacity="0.7"
      />
      <circle cx="8.00002" cy="8" r="3.07692" fill="#D10000" />
    </svg>
  );

  return (
    <VStack width={"100%"}>
      <HStack
        width={"100%"}
        height={"114px"}
        padding={"27px 9px"}
        zIndex={100}
        gap={"4px"}
        background={
          "linear-gradient(234.03deg, #340607 18.99%, rgba(0, 0, 0, 0.59) 53.76%, #131315 100%)"
        }
        align={"flex-start"}
        borderRadius={"14px"}
        position={"relative"}
      >
        <Stack marginTop={"3px"}>{arrow}</Stack>
        <Text color={"white"} fontSize={"10px"}>
          Error when making a deposit. <br />
          Please contact us through support. <br />
          <br />
          Deposit ID: {GlobalVars.created_standart_deposit_id}
        </Text>

        <Stack position={"absolute"} right={"13px"} top={"13px"}>
          {indicator}
        </Stack>
      </HStack>
    </VStack>
  );
};

export default StandartDeposit4;
