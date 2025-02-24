import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import stars from "./../assets/images/stars.png";

const ReferalCode2 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    backButton.hide();
  }

  return (
    <VStack width={"100%"}>
      <HStack
        width={"100%"}
        height={"132px"}
        justify={"space-between"}
        padding={"10px"}
        zIndex={100}
        backgroundColor={"rgba(8, 11, 16, 0.6)"}
        borderRadius={"14px"}
      >
        <Text
          background={
            "linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
          }
          backgroundClip={"text"}
          fontSize={"10px"}
        >
          CONGRATS! THE CODE IS ACTIVATED
        </Text>
        <Image src={stars} width={"50px"} height={"50px"} />
      </HStack>
      <Note
        text={`IF YOU HAVE ANY ISSUES WITH ACTIVATION - USE 24/7 SUPPORT`}
      />
    </VStack>
  );
};

export default ReferalCode2;
