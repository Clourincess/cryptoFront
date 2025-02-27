import { HStack, VStack, Text, Button } from "@chakra-ui/react";
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
      fill="#2281a8"
    />
  </svg>
);

const CheckOut = ({
  back_route = "/st_deposit_1",
  next_route = "/st_deposit_3",
}) => {
  const navigate = useNavigate();
  const { GlobalVars } = useStores();

  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 минут в секундах

  const getStatusEnd = async () => {
    const standartStatus = await GlobalVars.getStatusDepositStandart();
    const masterStatus = await GlobalVars.getStatusDepositMaster();
    if (timeLeft <= 0) {
      if (next_route == "/master_deposit3") {
        masterStatus?.result
          ? navigate("/master_deposit3")
          : navigate("/master_deposit4");
      } else {
        standartStatus.result
          ? navigate("/st_deposit_3")
          : navigate("/st_deposit_4");
        return;
      }
    }
  };

  const getStatusInterval = async () => {
    const standartStatus = await GlobalVars.getStatusDepositStandart();
    const masterStatus = await GlobalVars.getStatusDepositMaster();
    if (next_route == "/master_deposit3") {
      masterStatus?.result && navigate("/master_deposit3");
    } else {
      standartStatus?.result && navigate("/st_deposit_3");
    }
  };
  useEffect(() => {
    // Остановка таймера
    const interval = setInterval(async () => {
      setTimeLeft((prev) => prev - 1);

      // Проверяем статус при достижении условий
      if (timeLeft - 1 <= 0) {
        await getStatusEnd();
      } else if ((timeLeft - 1) % 120 === 0 && timeLeft - 1 !== 20 * 60) {
        await getStatusInterval();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Форматирование времени
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <VStack
      width={"100%"}
      align="flex-start"
      textAlign={"left"}
      justify={"space-between"}
      height={next_route == "/master_deposit3" ? "250px" : "300px"}
      background={
        "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
      }
      borderRadius="14px"
      padding={"10px"}
      spacing="0px"
      position={"relative"}
    >
      <HStack width={"100%"} justify="center">
        <Text fontSize={"10px"} color="white">
          CHECK OUT
        </Text>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#2281A8" fill-opacity="0.5" />
          <circle cx="4" cy="4" r="3" fill="#2281A8" />
        </svg>
      </HStack>
      <Text
        color={"white"}
        position={"absolute"}
        top={"12px"}
        right={"20px"}
        fontSize={"12px"}
      >
        {formatTime(timeLeft)}
      </Text>
      <HStack width={"100%"} justify={"flex-start"}>
        {arrow}
        <Text fontSize={"10px"} color={"white"}>
          YOU NEED TO SEND
        </Text>
      </HStack>
      <Text fontSize={"10px"} color={"white"}>
        {GlobalVars.deposit_amount} USDT TRC20
      </Text>
      <HStack width={"100%"} justify={"flex-start"}>
        {arrow}
        <Text fontSize={"10px"} color={"white"}>
          TO CRYPTO WALLET
        </Text>
      </HStack>
      <Text fontSize={"10px"} color={"white"}>
        {GlobalVars.vallet_amount}
      </Text>
      {next_route != "/master_deposit3" ? (
        <>
          <HStack width={"100%"} justify={"flex-start"}>
            {arrow}
            <Text fontSize={"10px"} color={"white"}>
              YOU GET
            </Text>
          </HStack>
          <Text fontSize={"10px"} color={"white"}>
            {(GlobalVars.deposit_amount * GlobalVars.coef?.data?.value).toFixed(
              2
            )}{" "}
            USDT TRC20 ON YOUR STANDARD BALANCE
          </Text>
          <Text fontSize={"10px"} color={"white"}>
            {GlobalVars.coef?.data?.value} %/DAY GENERATION
          </Text>
        </>
      ) : null}

      <Text color={"red"} alignSelf={"center"} fontSize={"10px"}>
        PLEASE WAIT FOR THE TIMER TO END.
      </Text>
      <HStack width={"100%"} justify="center">
        <Button
          onClick={() => {
            GlobalVars.updateDepositAmount("");
            GlobalVars.updateValletAmount("");
            GlobalVars.updateCreatedStandart(null);
            GlobalVars.updateCreatedMaster(null);
            navigate("/");
          }}
          background={"#9f1b1b"}
          borderRadius={"28px"}
          padding="10px 15px"
        >
          <Text fontSize={"10px"} color="black">
            CANCEL
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default CheckOut;
