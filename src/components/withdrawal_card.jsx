import { VStack, HStack, Text, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";
import { useEffect, useState } from "react";

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

const WithdrawalCard = ({ route = "/", standart = true }) => {
  const navigate = useNavigate();
  const { GlobalVars } = useStores();

  const [depositAmount, setDepositAmount] = useState(
    route == "/master_withdraw3"
      ? GlobalVars.selected_deposit?.result_balance
      : ""
  );
  const [valletAmount, setValletAmount] = useState("");

  useEffect(() => {
    GlobalVars.updateDepositAmount(depositAmount);
    GlobalVars.updateValletAmount(valletAmount);
  }, [depositAmount, valletAmount]);

  const createWithdravalStandart = async () => {
    return await GlobalVars.createWithdravalStandart();
  };

  const createWithdraval = async () => {
    if (route == "/st_withdraw_2") {
      let status = await createWithdravalStandart();
      if (status) {
        navigate(route);
      }
    } else {
      navigate("/master_withdraw3");
    }
  };

  return (
    <VStack
      borderRadius={"14px"}
      width={"100%"}
      height={standart ? "220px" : "130px"}
      padding={"7px 22px 22px 9px"}
      align={"center"}
      background={"rgba(8, 11, 16, 0.6)"}
      justify={"space-between"}
      zIndex={100}
    >
      <HStack width={"100%"} justify={"center"}>
        <HStack alignSelf={"center"} justify={"center"}>
          <Text fontSize={"10px"} color={"white"}>
            WITHDRAWAL CARD
          </Text>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#B81E1E" fill-opacity="0.5" />
            <circle cx="4" cy="4" r="3" fill="#B81E1E" />
          </svg>
        </HStack>
      </HStack>
      <HStack width={"100%"} align={"flex-end"} justify={"space-between"}>
        <VStack align={"flex-start"}>
          {standart ? (
            <>
              <HStack width={"100%"} justify={"flex-start"}>
                {arrow}
                <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
                  ENTER WITHDRAW AMOUNT
                </Text>
              </HStack>
              <Input
                placeholder="TYPE HERE"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                style={{
                  backgroundColor: "black",
                  fontSize: "10px",
                  borderRadius: "28px",
                  width: "100%",
                  padding: "5px 20px",
                  color: "white",
                }}
              />
              {depositAmount == "" && (
                <Text
                  color={"rgba(199, 32, 32, 1)"}
                  fontSize={"7px"}
                  marginLeft={"5px"}
                >
                  ENTER WITHDRAW AMOUNT
                </Text>
              )}
              {console.log(
                depositAmount,
                GlobalVars.report_standart?.deposit_sum
              )}
              {Number(depositAmount) >
                Number(GlobalVars.report_standart?.deposit_sum) && (
                <Text
                  color={"rgba(199, 32, 32, 1)"}
                  fontSize={"7px"}
                  marginLeft={"5px"}
                >
                  THE WITHDRAWAL CANNOT BE MORE THAN THE AMOUNT ON THE BALANCE
                </Text>
              )}
            </>
          ) : null}

          <HStack width={"100%"} justify={"flex-start"} marginTop={"10px"}>
            {arrow}
            <Text fontSize={"10px"} color={"white"} alignSelf={"center"}>
              ENTER YOUR WALLET ADDRESS
            </Text>
          </HStack>
          <Input
            placeholder="TYPE HERE"
            value={valletAmount}
            onChange={(e) => setValletAmount(e.target.value)}
            style={{
              backgroundColor: "black",
              fontSize: "10px",
              borderRadius: "28px",
              width: "100%",
              padding: "5px 20px",
              color: "white",
            }}
          />
          {valletAmount == "" && (
            <Text
              color={"rgba(199, 32, 32, 1)"}
              fontSize={"7px"}
              marginLeft={"5px"}
            >
              ENTER VALLET AMOUNT
            </Text>
          )}
        </VStack>
        <Button
          borderRadius={"28px"}
          height={"36px"}
          width={"82px"}
          onClick={async () => await createWithdraval()}
          background={
            valletAmount != ""
              ? "linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
              : "rgba(199, 32, 32, 1)"
          }
          cursor={
            depositAmount == "" || valletAmount == "" ? "no-drop" : "pointer"
          }
          disabled={depositAmount == "" || valletAmount == ""}
        >
          <Text fontSize={"10px"} color={"black"} alignSelf={"center"}>
            NEXT
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default WithdrawalCard;
