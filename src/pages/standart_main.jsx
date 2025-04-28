import { HStack, VStack } from "@chakra-ui/react";
import BalanceColored from "../components/balance_colored";
import BlackButtonIcon from "../components/black_button_icon";
import Note from "../components/note";
import deposit from "./../assets/images/deposit.svg";
import withdraw from "./../assets/images/withdraw.svg";
import { useNavigate } from "react-router";
import tg from "../tg_vars";
import stats from "./../assets/images/stats.svg";
import { useStores } from "../store/store_context";
import redact from "../redact";
import { observer } from "mobx-react-lite";

const StandartMain = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/perehod");
    backButton.hide();
  }
  const { GlobalVars } = useStores();
  return (
    <VStack width={"100%"} justify={"flex-start"}>
      <HStack
        width={"100%"}
        height={"212px"}
        align={"flex-start"}
        marginBottom={"14px"}
      >
        <VStack width={"230px"} justify={"space-between"}>
          <BalanceColored
            balance={GlobalVars.standart_balance?.balance || 0}
            width="100%"
            height="118px"
          />
          <HStack width={"100%"}>
            <BlackButtonIcon
              text={"DEPOSIT"}
              icon={deposit}
              left={"30px"}
              route="/st_deposit_1"
              iconWidth={"47px"}
              iconHeight={"47px"}
              additionalTextIcon={
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#1EB85B" />
                  <circle cx="3.5" cy="3.5" r="2.625" fill="#1EB85B" />
                </svg>
              }
            />
            <BlackButtonIcon
              text={"WITHDRAW"}
              icon={withdraw}
              left={"45px"}
              route="/st_withdraw_1"
              iconWidth={"47px"}
              iconHeight={"47px"}
              additionalTextIcon={
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#ED0E0E" />
                  <circle cx="3.5" cy="3.5" r="2.625" fill="#ED0E0E" />
                </svg>
              }
            />
          </HStack>
        </VStack>
        <BlackButtonIcon
          width="100%"
          text={"STATS"}
          height="225px"
          route="/standart_stats"
          icon={stats}
          stats={true}
          iconWidth={"47px"}
          iconHeight={"47px"}
        />
      </HStack>
      <Note
        text={redact(
          `THIS IS THE STANDARD BALANCE PAGE.
HERE, YOU CAN GENERATE USDT WITH A 0.23%/DAY RATE, MAKE DEPOSITS, AND WITHDRAW IT BACK INSTANTLY.`
        )}
      />
    </VStack>
  );
});

export default StandartMain;
