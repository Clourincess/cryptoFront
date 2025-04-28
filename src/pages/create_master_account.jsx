import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import tg from "../tg_vars";
import { useStores } from "../store/store_context";

import circle from "./../assets/images/red_circle_create.svg";
import { observer } from "mobx-react-lite";

const CreateMasterAccount = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/perehod");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  const createMasterBalance = async () => {
    await GlobalVars.createMasterBalance();
    navigate("/");
    alert("The premium account was created successfully");
  };

  return (
    <VStack w={"100%"} height={"100vh"}>
      <VStack
        width={"326px"}
        marginTop={"10px"}
        height={"118px"}
        borderRadius={"14px"}
        padding={"10px"}
        justify={"space-between"}
        background={"linear-gradient(261.78deg, #521111 0.85%, #000000 97.74%)"}
      >
        <HStack justify={"space-between"} w={"100%"} align={"flex-start"}>
          <Text color={"white"} fontSize={"9px"}>
            CREATE PREMIUM <br />
            ACCOUNT
          </Text>
          <Image src={circle} />
        </HStack>
        <HStack justifyContent={"flex-end"} width={"100%"} gap={"11px"}>
          <Button
            bgColor={"#626262"}
            height={"22px"}
            width={"73px"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"black"}
            fontSize={"9px"}
            fontWeight={"700"}
            borderRadius={"14px"}
            onClick={async () => await createMasterBalance()}
          >
            PROCEED
          </Button>
          <Button
            bgColor={"#9F1B1B"}
            height={"22px"}
            width={"73px"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"black"}
            fontSize={"9px"}
            fontWeight={"700"}
            borderRadius={"14px"}
            onClick={() => navigate("/perehod")}
          >
            CANCEL
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
});

export default CreateMasterAccount;
