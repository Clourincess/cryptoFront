import { HStack, VStack, Text, Table, Td, Tr, Image } from "@chakra-ui/react";
import InfoHeaderMainPage from "../components/main_page/info_header";
import BlackButtonIcon from "../components/black_button_icon";
import star from "./../assets/images/star.svg";
import faq from "./../assets/images/faq.svg";
import earbuds from "./../assets/images/earbuds.svg";
import calc from "./../assets/images/calc.svg";
import megafon from "./../assets/images/megafon.svg";
import BalanceColored from "../components/balance_colored";
import MasterBalance from "../components/master_balance";
import { useNavigate } from "react-router";
import Note from "../components/note";
import { register } from "../apifunc";
import { useEffect } from "react";
import { useStores } from "../store/store_context";
import tg from "../tg_vars";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
  const navigate = useNavigate();
  const { GlobalVars } = useStores();
  const register = async () => {
    const payload = {
      telegramm_id: tg?.initDataUnsafe?.user?.id,
      user_name: tg?.initDataUnsafe?.user?.username,
      count_bonuses: 0,
      used_referal_code: "",
      is_blocked: false,
    };
    await GlobalVars.register(payload);
  };

  useEffect(() => {
    GlobalVars.getAllUsers();

    

    
  }, []);

  useEffect(() => {
    const thisAccount = GlobalVars.all_users.find((item) => {
      return item.id == tg?.initDataUnsafe?.user?.id;
    });
    thisAccount == undefined && register();
    GlobalVars.getStandart();
    GlobalVars.getMaster();
  }, []);
  return (
    <VStack width="100%">
      <InfoHeaderMainPage username={GlobalVars.username} />
      <HStack width={"100%"} justify={"space-between"} zIndex={99999}>
        <VStack
          width={"113px"}
          height={"100px"}
          spacing={"10px"}
          backgroundColor={"rgba(20, 20, 20, 0.6)"}
          borderRadius={"14px"}
          padding={"10px"}
          justify={"space-between"}
          zIndex={100}
          position={"relative"}
          cursor={"pointer"}
        >
          <HStack width={"100%"} justify={"flex-start"} spacing={"3px"}>
            {/* {predictionalIcon} */}
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
            <Image
              src={earbuds}
              // width={iconWidth}
              // height={iconHeight}
              position={"absolute"}
              bottom={"0px"}
              right={"0px"}
              // bottom={type == "referal" ? "-3px" : "0px"}
            />
          </HStack>
        </VStack>

        {/* <BlackButtonIcon
          text={"LIVE SUPPORT"}
          icon={earbuds}
          additionalTextIcon={
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#AF0000" />
            </svg>
          }
        /> */}
        <BlackButtonIcon
          text={"FAQ"}
          icon={faq}
          iconWidth={"54px"}
          iconHeight={"54px"}
        />
        <BlackButtonIcon
          text={"ABOUT US"}
          icon={star}
          star={true}
          iconWidth={"54px"}
          iconHeight={"54px"}
        />
      </HStack>
      <HStack width={"100%"} align={"flex-start"} justify={"space-between"}>
        <VStack>
          <BalanceColored
            balance={GlobalVars?.standartBalance + GlobalVars?.masterBalance}
            onClick={() => navigate("perehod")}
            width="170px"
            height="191px"
          />
          {/* <MasterBalance balance={0} onClick={() => navigate("master_main")} width="170px"/> */}
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
      <Note text={""} width="100%" updates={true} />
    </VStack>
  );
});

export default Main;
