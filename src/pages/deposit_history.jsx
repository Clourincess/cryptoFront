import { Collapse, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useStores } from "../store/store_context";
import { useNavigate } from "react-router";

import tg from "../tg_vars";

const DepositHistory = () => {
  const [isOpen, setIsOpen] = useState([0, 0]);
  let copyIsOPen = Array.from(isOpen);

  const { GlobalVars } = useStores();

  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/perehod");
    backButton.hide();
  }

  return (
    <VStack width={"100%"}>
      <Text color={"white"} fontSize={"10px"}>
        DEPOSIT HISTORY
      </Text>

      <VStack
        marginTop={"10px"}
        align={"flex-start"}
        backgroundColor={"rgba(8, 11, 16, 0.6)"}
        padding={"10px"}
        borderRadius={"12px"}
        width={"100%"}
      >
        <HStack
          width={"100%"}
          cursor={"pointer"}
          onClick={() => {
            copyIsOPen[0] = !copyIsOPen[0];
            setIsOpen(copyIsOPen);
          }}
        >
          <Text color={"white"} fontSize={"10px"}>
            STANDARD
          </Text>
          <Stack
            transform={isOpen[0] == 1 ? "rotate(90deg)" : "rotate(0deg)"}
            transition="transform 0.2s ease"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7.07104"
                width="10"
                height="1.42857"
                transform="rotate(45 7.07104 0)"
                fill="#D9D9D9"
              />
              <rect
                x="6.06091"
                y="13.1318"
                width="10"
                height="1.42857"
                transform="rotate(-45 6.06091 13.1318)"
                fill="#D9D9D9"
              />
            </svg>
          </Stack>
        </HStack>

        <Collapse in={isOpen[0] == 1} animateOpacity style={{ width: "100%" }}>
          <VStack align={"flex-start"} w={"100%"}>
            {GlobalVars.standart_deposits
              .filter((value) => {
                return value?.verification == 0;
              })
              .map((value, index) => {
                return (
                  <HStack
                    align={"flex-start"}
                    width={"100%"}
                    justify={"space-between"}
                    key={index}
                  >
                    <Text color={"white"} fontSize={"10px"}>
                      {new Date(value?.deposit_date).toLocaleDateString()}
                    </Text>

                    <Text color={"white"} fontSize={"10px"}>
                      UNCOMPLETED
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={"10px"}
                      textAlign={"end"}
                      w={"80px"}
                    >
                      {value?.sum}
                    </Text>
                  </HStack>
                );
              })}

            {GlobalVars.standart_deposits
              .filter((value) => {
                return value?.verification == 1;
              })
              .map((value, index) => {
                return (
                  <HStack
                    align={"flex-start"}
                    width={"100%"}
                    justify={"space-between"}
                    key={index}
                  >
                    <Text color={"white"} fontSize={"10px"}>
                      {new Date(value?.deposit_date).toLocaleDateString()}
                    </Text>

                    <Text color={"white"} fontSize={"10px"}>
                      COMPLETED
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={"10px"}
                      textAlign={"end"}
                      w={"80px"}
                    >
                      {value?.sum}
                    </Text>
                  </HStack>
                );
              })}
          </VStack>
        </Collapse>
      </VStack>

      <VStack
        marginTop={"10px"}
        align={"flex-start"}
        backgroundColor={"rgba(8, 11, 16, 0.6)"}
        padding={"10px"}
        borderRadius={"12px"}
        width={"100%"}
      >
        <HStack
          width={"100%"}
          onClick={() => {
            copyIsOPen[1] = !copyIsOPen[1];
            setIsOpen(copyIsOPen);
          }}
          cursor={"pointer"}
        >
          <Text fontSize={"10px"} color={"white"}>
            MASTER
          </Text>
          <Stack
            transform={isOpen[1] == 1 ? "rotate(90deg)" : "rotate(0deg)"}
            transition="transform 0.2s ease"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7.07104"
                width="10"
                height="1.42857"
                transform="rotate(45 7.07104 0)"
                fill="#D9D9D9"
              />
              <rect
                x="6.06091"
                y="13.1318"
                width="10"
                height="1.42857"
                transform="rotate(-45 6.06091 13.1318)"
                fill="#D9D9D9"
              />
            </svg>
          </Stack>
        </HStack>
        <Collapse in={isOpen[1] == 1} animateOpacity style={{ width: "100%" }}>
          <VStack align={"flex-start"} w={"100%"}>
            {GlobalVars.master_deposits
              .filter((value) => {
                return value?.verification == 0;
              })
              .reverse()
              .map((value, index) => {
                return (
                  <HStack
                    align={"flex-start"}
                    width={"100%"}
                    justify={"space-between"}
                    key={index}
                  >
                    <Text color={"white"} fontSize={"10px"}>
                      {new Date(value?.deposit_date).toLocaleDateString()}
                    </Text>

                    <Text color={"white"} fontSize={"10px"}>
                      UNCOMPLETED
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={"10px"}
                      textAlign={"end"}
                      w={"80px"}
                    >
                      {value?.sum}
                    </Text>
                  </HStack>
                );
              })}

            {GlobalVars.master_deposits
              .filter((value) => {
                return value?.verification == 1;
              })
              .reverse()
              .map((value, index) => {
                return (
                  <HStack
                    align={"flex-start"}
                    width={"100%"}
                    justify={"space-between"}
                    key={index}
                  >
                    <Text color={"white"} fontSize={"10px"}>
                      {new Date(value?.deposit_date).toLocaleDateString()}
                    </Text>

                    <Text color={"white"} fontSize={"10px"}>
                      COMPLETED
                    </Text>
                    <Text
                      color={"white"}
                      fontSize={"10px"}
                      textAlign={"end"}
                      w={"80px"}
                    >
                      {value?.sum}
                    </Text>
                  </HStack>
                );
              })}
          </VStack>
        </Collapse>
      </VStack>
    </VStack>
  );
};

export default DepositHistory;
