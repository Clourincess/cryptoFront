import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import MasterBalance from "../components/master_balance";
import BlackButtonIcon from "../components/black_button_icon";
import Note from "../components/note";
import deposit from "./../assets/images/deposit.svg";
import withdraw from "./../assets/images/withdraw.svg";
import { useNavigate } from "react-router";
import tg from "../tg_vars";
import stats from "./../assets/images/stats.svg";
import { useStores } from "../store/store_context";
import redact from "../redact";
import { keyframes } from "@emotion/react";

const MasterMain = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/perehod");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  const glowAnimation = keyframes`
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
  `;

  return (
    <VStack width={"100%"} justify={"flex-start"}>
      <HStack
        width={"100%"}
        height={"212px"}
        align={"flex-start"}
        marginBottom={"14px"}
      >
        <VStack width={"230px"} justify={"space-between"}>
          <Box position={"relative"} width={"100%"}>
            <Box
              position="absolute"
              top="0px"
              left="0px"
              right="0px"
              bottom="0px"
              transform={"skewX(-2deg)"}
              background={`radial-gradient(122.06% 115.28% at -22.06% 94.72%, #E38F24 0%, #E38F24 13.41%, #E35A65 37.11%, #C3527F 55.9%, #3A79F2 69.99%, #04B5FC 99.96%)`}
              filter="blur(10px)"
              // animation={`${glowAnimation} 3s ease-in-out infinite`}
            />
            <MasterBalance
              balance={GlobalVars?.master_balance?.balance || 0}
              width="100%"
              height="118px"
              // className={"animated"}
            />
          </Box>

          <HStack width={"100%"}>
            <BlackButtonIcon
              text={"DEPOSIT"}
              icon={deposit}
              left={"30px"}
              route="/master_deposit1"
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
              text={"DEPOSIT LIST"}
              icon={withdraw}
              left={"45px"}
              route="/master_withdraw1"
              iconWidth={"47px"}
              iconHeight={"47px"}
              prem={true}
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
          route="/master_stats"
          icon={stats}
          stats={true}
          iconWidth={"47px"}
          iconHeight={"47px"}
        />
      </HStack>
      <HStack w={"100%"}>
        <Note
          text={redact(`THIS IS THE PREMIUM ACCOUNT PAGE.
HERE, YOU CAN GENERATE MORE USDT THAN IN THE STANDARD ACCOUNT BY FREEZING YOUR DEPOSIT FOR A CERTAIN PERIOD (1, 2, OR 4 MONTHS).

OPTIONS:
x1.25 OF YOUR DEPOSIT (FREEZE FOR 1 MONTH)
x1.55 OF YOUR DEPOSIT (FREEZE FOR 2 MONTHS)
x2.25 OF YOUR DEPOSIT (FREEZE FOR 4 MONTHS)


ON THIS PAGE YOU CAN CREATE DEPOSITS, GENERATE USDT AND WITHDRAW IT BACK.

ALL DEPOSITS YOU CREATE WILL BE DISPLAYED HERE.
`)}
        />
      </HStack>
    </VStack>
  );
};

export default MasterMain;
