import {
  Stat,
  VStack,
  HStack,
  Input,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import DepositCard from "../components/deposit_card";

import { useStores } from "../store/store_context";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

const arrow = (
  <svg
    width="7"
    height="8"
    viewBox="0 0 7 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.1167 4L0.0342223 7.4641L0.0342226 0.535898L6.1167 4Z"
      fill="white"
    />
  </svg>
);
const ReferalCode1 = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/referal_main");
    backButton.hide();
  }

  const [inputValue, setInputValue] = useState("");
  const { GlobalVars } = useStores();

  const isRef = GlobalVars.all_referals?.find((item) => {
    return item?.code == inputValue;
  });

  const updateReferalCodeAppUser = async (tg_id, username, ref_code) => {
    const response = await fetch(
      "https://ossctgapp.com:8008/updateReferalCodeAppUser",
      {
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          telegramm_id: tg_id,
          user_name: username,
          count_bonuses: 0,
          used_referal_code: `${ref_code}`,
          is_blocked: false,
        }),
      }
    );
    console.log("response", response);
  };

  const apply = () => {
    navigate("/referal_code2");
    updateReferalCodeAppUser(
      GlobalVars.tg_info?.id,
      GlobalVars.tg_info?.username,
      inputValue
    );
  };
  return (
    <VStack width={"100%"}>
      <VStack
        borderRadius={"14px"}
        width={"100%"}
        height={"98px"}
        padding={"10px"}
        align={"center"}
        background={"rgba(8, 11, 16, 0.6)"}
        justify={"space-between"}
        zIndex={100}
      >
        <HStack
          width={"100%"}
          justify={"flex-start"}
          position={"relative"}
          align={"center"}
        >
          {arrow}
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            ENTER A REFERRAL CODE
          </Text>
          <Stack position={"absolute"} top={"5px"} left={"160px"}>
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
          </Stack>
        </HStack>
        <HStack width={"100%"} justify={"space-between"}>
          <Input
            placeholder="TYPE HERE"
            style={{
              backgroundColor: "black",
              fontSize: "10px",
              borderRadius: "28px",
              width: "80%",
              padding: "5px 20px",
              color: "white",
            }}
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <Button
            borderRadius={"28px"}
            height={"34px"}
            width={"114px"}
            onClick={() => {
              isRef != undefined &&
              isRef?.code != GlobalVars.referral_program?.code
                ? apply()
                : navigate("/referal_code4");
            }}
            background={
              "linear-gradient(82.94deg, #2AB0D0 5.51%, #9B71D9 64.24%, #7F7FD7 94.49%)"
            }
          >
            <Text fontSize={"10px"} color={"black"} alignSelf={"center"}>
              APPLY
            </Text>
          </Button>
        </HStack>
      </VStack>
      <Note
        text={`IF YOU HAVE ANY ISSUES WITH ACTIVATION - USE 24/7 SUPPORT.`}
      />
    </VStack>
  );
});

export default ReferalCode1;
