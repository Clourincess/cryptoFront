import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import tg from "../tg_vars";
import { useStores } from "../store/store_context";

const CreateMasterAccount = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  const createMasterAccount = async () => {
    await GlobalVars.createMatserAccount();
    navigate("/");
  };

  return (
    <VStack w={"100%"} height={"100%"}>
      <Text color={"white"} fontSize={"10px"}>
        CREATE PREMIUM ACCOUNT?
      </Text>

      <HStack
        width={"100%"}
        justify={"space-between"}
        padding={"20px"}
        gap={"10px"}
      >
        <Button
          backgroundColor={"rgba(36, 36, 36, 1)"}
          borderRadius={"10px"}
          width={"100%"}
          height={"30px"}
          onClick={async () => await createMasterAccount()}
        >
          <Text color={"white"} fontSize={"12px"}>
            YES
          </Text>
        </Button>
        <Button
          backgroundColor={"rgba(36, 36, 36, 1)"}
          borderRadius={"10px"}
          width={"100%"}
          height={"30px"}
          onClick={() => navigate("/perehod")}
        >
          <Text color={"red"} fontSize={"12px"}>
            NO
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default CreateMasterAccount;