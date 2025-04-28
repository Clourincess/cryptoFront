import { HStack, VStack } from "@chakra-ui/react";
import { useStores } from "../store/store_context";
import { useNavigate } from "react-router";

import ReferalBalance from "../components/referal_balance";
import BlackButtonIcon from "../components/black_button_icon";
import redact from "../redact";
import "./../components/styles.css";
import Note from "../components/note";
import tg from "../tg_vars";

import deposit from "./../assets/images/deposit.svg";
import withdraw from "./../assets/images/withdraw.svg";
import stats from "./../assets/images/stats.svg";
import { observer } from "mobx-react-lite";

const ReferalMain = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  return (
    <VStack width={"100%"}>
      <HStack width={"100%"}>
        <VStack width={"230px"} justify={"space-between"}>
          <ReferalBalance
            width="100%"
            height={"118px"}
            className={"animated"}
            balance={GlobalVars.referral_program?.total_profit_referal || 0}
          />
          <HStack width={"100%"}>
            <BlackButtonIcon
              text={"ACTIVATE CODE"}
              icon={deposit}
              route={
                GlobalVars.user_info?.used_referal_code == "None"
                  ? "/referal_code1"
                  : "/referal_code3"
              }
              iconWidth={"47px"}
              iconHeight={"47px"}
              predictionalIcon={
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.78769 6.78769L10.5 0L14.2123 6.78769L21 10.5L14.2123 14.2123L10.5 21L6.78769 14.2123L0 10.5L6.78769 6.78769Z"
                    fill="url(#paint0_linear_71_1118)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_71_1118"
                      x1="10.5"
                      y1="0"
                      x2="-0.194456"
                      y2="11.9584"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#383838" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            />
            <BlackButtonIcon
              text={"WITHDRAW"}
              icon={withdraw}
              left={"45px"}
              route="/referal_withdraw1"
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
          // height="225px"
          height="222px"
          route="/referal_stats"
          icon={stats}
          stats={true}
          iconWidth={"47px"}
          iconHeight={"47px"}
        />
      </HStack>
      <Note
        text={redact(
          `THIS IS THE REFERRAL ACCOUNT PAGE. 
HERE, YOU CAN FIND YOUR UNIQUE REFERRAL CODE. YOU ALSO MAY ENTER YOUR FRIEND'S CODE (THE CODE CAN BE ENTERED ONCE) AND VIEW YOUR STATISTICS IN THE "STATS" SECTION.
 
WHEN SOMEBODY ACTIVATES YOUR CODE AND MAKES A DEPOSIT IN THE STANDARD OR PREMIUM ACCOUNT, YOU WILL AUTOMATICALLY START RECEIVING 8% OF THE PERSON'S DEPOSIT.
 
REFERRAL FUNDS WILL GO TO YOUR REFERRAL ACCOUNT AND CAN BE WITHDRAWN.`
        )}
      />
    </VStack>
  );
});

export default ReferalMain;
