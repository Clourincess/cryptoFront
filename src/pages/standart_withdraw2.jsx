import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

import Note from "../components/note";

import stars from "./../assets/images/stars.png";
import tg from "../tg_vars";

const StandartWithDraw2 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    backButton.hide();
  }

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
  return (
    <VStack width={"100%"}>
      <VStack
        width={"100%"}
        align="flex-start"
        spacing={"20px"}
        marginBottom={"31px"}
        position={"relative"}
      >
        <Image src={stars} position="absolute" top={"0px"} right="10px" />
        <Text
          fontSize={"18px"}
          background="linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
          backgroundClip={"text"}
        >
          CONGRATS!
        </Text>
        <HStack width={"60%"} justify={"flex-start"}>
          {arrow}
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            YOUR REQUEST IS BEING PROCESSED <br /> (IT MIGHT TAKE UP TO 24
            HOURS)
          </Text>
        </HStack>
        <HStack width={"80%"} justify={"flex-start"}>
          {arrow}
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            CHECK THE APP AND YOUR BALANCE
          </Text>
        </HStack>
        <HStack width={"100%"} justify={"flex-start"}>
          {arrow}
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            IF YOU HAVE ANY ISSUES WITH THIS TRANSACTION — <br />
            PLEASE CONTACT SUPPORT TEAM BY CLICKING “LIVE
            <br /> SUPPORT” BUTTON IN THE MAIN MENU
          </Text>
        </HStack>
        <Button
          background={
            "linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
          }
          borderRadius="28px"
          alignSelf={"flex-end"}
          onClick={() => navigate("/")}
        >
          <Text color={"black"} fontSize="9px" padding={"10px 15px"}>
            GO TO MAIN MENU
          </Text>
        </Button>
      </VStack>
      <Note
        text={`THIS IS THE STANDARD BALANCE PAGE.
        HERE YOU ARE ABLE TO GENERATE USDT WITH 0.66%/DAY RATE. ON THIS PAGE YOU CAN MAKE DEPOSITS, GENERATE USDT AND WITHDRAW IT BACK TO YOUR CRYPTO WALLET AT ANY TIME.`}
      />
    </VStack>
  );
};

export default StandartWithDraw2;
