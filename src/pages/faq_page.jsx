import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import lamp from "./../assets/images/lamp.svg";
import tg from "../tg_vars";
import { Navigate } from "react-router";
import { observer } from "mobx-react-lite";

const FaqPage = observer(() => {
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    Navigate("/");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      {/* <Box position="relative" width={"100%"} height={"auto"}>
        <Box
          position="absolute"
          top="-4px"
          left="-4px"
          right="-4px"
          bottom="-4px"
          // transform={"skewX(-5deg)"}
          background={
            "linear-gradient(90deg, rgba(4,222,120,1) 0%, rgba(32,115,247,1) 100%)"
            // "radial-gradient(96.88% 172.45% at 1.15% 99.59%, #04DE78 0%, #2073F7 100%)"
          }
          filter="blur(8px)"
          // animation={`${glowAnimation} 3s ease-in-out infinite`}
        /> */}
      <HStack
        width={"80%"}
        background={
          "linear-gradient(90deg, rgba(4,222,120,1) 0%, rgba(32,115,247,1) 100%)"
          // "radial-gradient(96.88% 172.45% at 1.15% 99.59%, #04DE78 0%, #2073F7 100%)"
        }
        borderRadius={"14px"}
        justify={"space-between"}
        padding={"11px"}
        position={"relative"}
        height={"200px"}
        align={"flex-start"}
      >
        <VStack align={"flex-start"}>
          <Text
            color={"black"}
            fontSize={7}
            fontWeight={700}
            letterSpacing={"-2%"}
          >
            FINALLY, WE INVENTED "!NOTE"
            <br /> TECHNOLOGY TO MAKE THE <br />
            PROCESS EASIER & FASTER
          </Text>
        </VStack>
        <Image
          src={lamp}
          width={"52px"}
          height={"61px"}
          position={"absolute"}
          bottom={"21px"}
          right={"21px"}
        />
      </HStack>
      {/* </Box> */}
    </VStack>
  );
});

export default FaqPage;
