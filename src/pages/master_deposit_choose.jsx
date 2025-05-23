import { VStack, HStack, Text, Stack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";
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

const MasterChoose = observer(() => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_deposit1");
    backButton.hide();
  }

  const { GlobalVars } = useStores();

  const updateTariff = async (name, coef, period) => {
    (await GlobalVars.updateTariff(name, coef, period)) &&
      navigate("/master_deposit3");
  };

  const createDepositMaster = async () => {
    const success = await GlobalVars.createDepositMaster();
    if (success) {
      navigate("/master_deposit2");
    } else {
      alert("Error when making a deposit! Try again later.");
    }
  };

  return (
    <VStack width={"100%"}>
      <VStack
        width={"100%"}
        borderRadius={"14px"}
        backgroundColor="rgba(8, 11, 16, 0.6)"
        padding={"10px"}
        spacing={"30px"}
        zIndex={1000}
      >
        <HStack align={"center"} justify={"center"} gap={"4px"}>
          <Text fontSize={"9px"} color={"white"}>
            DEPOSIT CARD
          </Text>
          <Stack>
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
        <HStack width={"100%"} justify={"flex-start"}>
          {arrow}
          <Text fontSize={"9px"} color={"white"} alignSelf={"center"}>
            CHOOSE THE OPTION:
          </Text>
        </HStack>
        <HStack>
          <VStack
            width={"70px"}
            height={"92px"}
            padding={"5px"}
            cursor={"pointer"}
            justify={"space-between"}
            background={
              "linear-gradient(31deg, #28afd0 0%, #648fd5 37.5%, #9972d9 68%, #7071d5 100%)"
            }
            borderRadius={"14px"}
            onClick={async () => {
              GlobalVars.updateTarrifId(32);
              await createDepositMaster();
            }}
          >
            <Text fontSize={"9px"} color={"black"}>
              x1.25
            </Text>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="5" fill="#BF1414" />
            </svg>
            <Text fontSize={"9px"} textAlign={"center"} color={"black"}>
              1 MONTH HOLD
            </Text>
          </VStack>
          <VStack
            width={"70px"}
            height={"92px"}
            padding={"5px"}
            justify={"space-between"}
            cursor={"pointer"}
            background={
              "linear-gradient(31deg, #28afd0 0%, #648fd5 37.5%, #9972d9 68%, #7071d5 100%)"
            }
            borderRadius={"14px"}
            onClick={async () => {
              GlobalVars.updateTarrifId(33);
              await createDepositMaster();
            }}
          >
            <Text fontSize={"9px"} color={"black"}>
              x1.55
            </Text>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="#961717" />
              <circle cx="8" cy="8" r="5" fill="#BF1414" />
            </svg>

            <Text fontSize={"9px"} color={"black"} textAlign={"center"}>
              2 MONTH HOLD
            </Text>
          </VStack>
          <VStack
            width={"70px"}
            height={"92px"}
            padding={"5px"}
            cursor={"pointer"}
            justify={"space-between"}
            background={
              "linear-gradient(31deg, #28afd0 0%, #648fd5 37.5%, #9972d9 68%, #7071d5 100%)"
            }
            borderRadius={"14px"}
            onClick={async () => {
              GlobalVars.updateTarrifId(34);
              await createDepositMaster();
            }}
          >
            <Text fontSize={"9px"} color={"black"}>
              x2.25
            </Text>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#961717" />
              <circle cx="10" cy="10" r="8" fill="#BF1414" />
              <circle cx="10" cy="10" r="5" fill="#ED0E0E" />
            </svg>

            <Text fontSize={"9px"} color={"black"} textAlign={"center"}>
              4 MONTH HOLD
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <Note text={`SELECT THE FREEZING PERIOD AND THE FOLLOWING RATE.`} />
    </VStack>
  );
});

export default MasterChoose;
