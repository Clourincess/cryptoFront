import { HStack, VStack, Text, Button, Image, Stack } from "@chakra-ui/react";
import stars from "./../assets/images/stars.png";
import { useNavigate } from "react-router";

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

const Congrats = () => {
  const navigate = useNavigate();
  return (
    <VStack
      width={"100%"}
      align="flex-start"
      padding={"18px"}
      position={"relative"}
      spacing={0}
      gap={0}
      background={"rgba(8, 11, 16, 1)"}
      borderRadius={"14px"}
    >
      <Image src={stars} position="absolute" top={"11px"} right="5px" />
      <Text
        fontSize={"18px"}
        background="linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
        backgroundClip={"text"}
      >
        CONGRATS!
      </Text>
      <VStack
        align={"flex-start"}
        justify={"flex-start"}
        marginTop={"25px"}
        gap={"25px"}
        width={"100%"}
      >
        <HStack width={"60%"} justify={"flex-start"} align={"flex-start"}>
          <Stack marginTop={"3px"}>{arrow}</Stack>
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            YOUR REQUEST IS BEING PROCESSED
            <br />
            (IT MIGHT TAKE UP TO 24 HOURS).
          </Text>
        </HStack>

        <HStack width={"80%"} justify={"flex-start"} align={"flex-start"}>
          <Stack marginTop={"3px"}>{arrow}</Stack>

          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            CHECK THE APP AND YOUR BALANCE
          </Text>
        </HStack>
        <HStack width={"100%"} justify={"flex-start"} align={"flex-start"}>
          <Stack marginTop={"3px"}>{arrow}</Stack>
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            IF YOU HAVE ANY ISSUES WITH THIS TRANSACTION — <br />
            PLEASE CONTACT SUPPORT TEAM BY CLICKING “LIVE
            <br /> SUPPORT” BUTTON IN THE MAIN MENU
          </Text>
        </HStack>
      </VStack>
      <Button
        background={
          "linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
        }
        borderRadius="28px"
        alignSelf={"center"}
        onClick={() => navigate("/")}
        marginTop={"40px"}
      >
        <Text color={"black"} fontSize="10px" padding={"10px 15px"}>
          GO TO MAIN MENU
        </Text>
      </Button>
    </VStack>
  );
};

export default Congrats;
