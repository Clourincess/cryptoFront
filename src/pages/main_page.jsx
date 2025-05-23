import { HStack, VStack, Text, Image, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useStores } from "../store/store_context";
import { observer } from "mobx-react-lite";

import InfoHeaderMainPage from "../components/main_page/info_header";
import BlackButtonIcon from "../components/black_button_icon";
import BalanceColored from "../components/balance_colored";
import Note from "../components/note";
import tg from "../tg_vars";

import star from "./../assets/images/star.svg";
import faq from "./../assets/images/faq.svg";
import earbuds from "./../assets/images/earbuds.svg";
import calc from "./../assets/images/calc.svg";
import megafon from "./../assets/images/megafon.svg";

const Main = observer(() => {
  const navigate = useNavigate();
  const { GlobalVars } = useStores();

  const backButton = tg.BackButton;
  backButton.hide();

  useEffect(() => {
    GlobalVars.updateTgInfo(tg?.initDataUnsafe?.user);
  }, []);

  const createUser = async () => {
    await GlobalVars.createUser();
  };

  useEffect(() => {
    createUser();
    GlobalVars.getOneUser();
    GlobalVars.getReferralProgram();
    GlobalVars.getReportAccount("standart");
    GlobalVars.getReportAccount("master");
    GlobalVars.getCoefStandart();
    GlobalVars.getStandartBalanceByUserId();
    GlobalVars.getMasterBalanceByUserId();
    GlobalVars.getAllDepositsByUserName("standart");
    GlobalVars.getAllDepositsByUserName("master");
    GlobalVars.getallTarrif();
    GlobalVars.getAllReferralProgram();
  }, []);

  return (
    <VStack width="100%">
      <InfoHeaderMainPage username={GlobalVars.username} />
      <HStack width={"100%"} justify={"space-between"} zIndex={99999}>
        <VStack
          width={"113px"}
          height={"100px"}
          spacing={"10px"}
          backgroundColor={"rgba(8, 11, 16, 0.6)"}
          borderRadius={"14px"}
          padding={"10px"}
          justify={"space-between"}
          zIndex={100}
          position={"relative"}
          cursor={"pointer"}
        >
          <HStack width={"100%"} justify={"flex-start"} spacing={"3px"}>
            <Text fontSize={"9px"} color={"white"} dir="row">
              LIVE <br />
              SUPPORT
            </Text>
            <VStack position={"absolute"} left={"34px"} top={"13px"}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#AF0000" />
                <circle cx="4" cy="4" r="2.25" fill="#AF0000" />
              </svg>
            </VStack>
          </HStack>
          <HStack
            width={"100%"}
            height={"60px"}
            justify={"flex-end"}
            align={"flex-end"}
            alignSelf={"flex-end"}
            justifySelf={"flex-end"}
            position={"relative"}
          >
            <Image src={earbuds} position={"absolute"} bottom={"0px"} />
          </HStack>
        </VStack>
        <BlackButtonIcon
          text={"FAQ"}
          icon={faq}
          iconWidth={"54px"}
          iconHeight={"54px"}
          route="faq_page"
        />
        <BlackButtonIcon
          text={"ABOUT US"}
          icon={star}
          star={true}
          iconWidth={"54px"}
          iconHeight={"54px"}
        />
      </HStack>
      <HStack
        width={"100%"}
        align={"flex-start"}
        justify={"space-between"}
        marginTop={"10px"}
      >
        <VStack>
          <BalanceColored
            balance={
              GlobalVars.master_balance?.message ==
              "У данного пользователя отсутствует мастер аккаунт"
                ? GlobalVars?.standart_balance?.balance || 0
                : GlobalVars?.standart_balance?.balance +
                    GlobalVars?.master_balance?.balance || 0
            }
            onClick={() => navigate("/perehod")}
            width="170px"
            height="191px"
            background="radial-gradient(120% 107.04% at -10% 74.72%, #E38F24 0%, #E38F24 13.41%, #E35A65 37.11%, #C3527F 55.9%, #3A79F2 69.99%, #04B5FC 99.96%)"
          />
        </VStack>
        <BlackButtonIcon
          text={"CALC INCOME"}
          icon={calc}
          width="170px"
          height="191px"
          route="calc_income"
          isCalc={true}
          iconWidth={"103px"}
          // iconHeight={"136px"}
        />
      </HStack>
      <Stack width={"100%"} marginTop={"10px"}>
        <BlackButtonIcon
          type="referal"
          text={"REFERRAL"}
          icon={megafon}
          width="100%"
          height="87px"
          route="/referal_main"
          iconWidth={"84px"}
          iconHeight={"84px"}
        />
      </Stack>
      <Note text={""} width="100%" updates={true} />
    </VStack>
  );
});

export default Main;
