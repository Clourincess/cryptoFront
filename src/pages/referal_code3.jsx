import { HStack, VStack, Text, Image, Stack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import stars from "./../assets/images/stars.png";

const ReferalCode3 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/referal_code1");
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

        <Text color={"white"} fontSize={"8px"}>
          THE CODE IS ALREADY USED
        </Text>
        <Stack position={"absolute"} right={"13px"} top={"13px"}>
          {indicator}
        </Stack>
      </HStack>
      <Note
        text={`IF YOU HAVE ANY ISSUES WITH ACTIVATION - USE 24/7 SUPPORT`}
      />
    </VStack>
  );
};

export default ReferalCode3;
