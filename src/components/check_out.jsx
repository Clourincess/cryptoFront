import { HStack, VStack, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";
import { useEffect, useRef, useState } from "react";
import blueIndicator from "./../assets/images/indicator_blue.svg";
import redCircle from "./../assets/images/red_circle.svg";
import redTriangle from "./../assets/images/red_arrow.svg";
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
      fill="#2281a8"
    />
  </svg>
);

const CheckOut = observer(
  ({ back_route = "/st_deposit_1", next_route = "/st_deposit_3" }) => {
    const navigate = useNavigate();
    const { GlobalVars } = useStores();

    const [click, setClick] = useState(false);

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

    const getStatusOnClick = async () => {
      const standartStatus = await GlobalVars.getStatusDepositStandart();
      const masterStatus = await GlobalVars.getStatusDepositMaster();
      if (next_route == "/master_deposit3") {
        masterStatus?.result
          ? navigate("/master_deposit3")
          : alert("Thank you, we are checking your deposit, expect.");
      } else {
        standartStatus.result
          ? navigate("/st_deposit_3")
          : alert("Thank you, we are checking your deposit, expect.");
      }
    };
    useEffect(() => {
      // Остановка таймера
      if (next_route == "/st_deposit_3" || next_route == "/master_deposit3") {
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
      }
    }, [timeLeft]);

    // Форматирование времени
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const textRef = useRef(null);
    const handleCopy = async () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(
            "TFCgzmuCsQ73sX9gj8AngWHGvv9V5r64E9"
          );
          alert("The text is copied to the clipboard!");
        } catch (err) {
          console.error("Error: ", err);
          fallbackCopy();
        }
      } else {
        fallbackCopy(); // Используем резервный метод для iOS и старых браузеров
      }
    };

    const fallbackCopy = () => {
      if (textRef.current) {
        const range = document.createRange();
        const selection = window.getSelection();

        textRef.current.style.display = "block"; // Делаем текст видимым
        range.selectNodeContents(textRef.current);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
          document.execCommand("copy");
          alert("The text is copied to the clipboard!");
        } catch (err) {
          console.error("Error: ", err);
          alert("Copying is not supported in your browser.");
        }

        selection.removeAllRanges();
        textRef.current.style.display = "none"; // Скрываем текст обратно
      }
    };

    const createWithdravalStandart = async () => {
      return await GlobalVars.createWithdravalStandart();
    };

    const createWithdrawReferal = async () => {
      return await GlobalVars.createWithdrawReferal();
    };
    console.log(next_route);
    const createWithdraval = async () => {
      if (next_route == "/st_withdraw_2") {
        let status = await createWithdravalStandart();
        if (status) {
          navigate(next_route);
        }
      } else if (next_route == "/referal_withdraw3") {
        let status = await createWithdrawReferal();
        if (status) {
          navigate(next_route);
        }
      }
    };
    return (
      <>
        {next_route == "/st_deposit_3" || next_route == "/master_deposit3" ? (
          <VStack
            width={"100%"}
            align="flex-start"
            textAlign={"left"}
            // height={next_route == "/master_deposit3" ? "250px" : "243px"}
            background={
              "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
            }
            borderRadius="14px"
            padding={"10px"}
            spacing="0px"
            position={"relative"}
            zIndex={100}
          >
            {next_route}
            <HStack
              width={"100%"}
              justify="center"
              align={"center"}
              spacing={0}
              gap={"3px"}
            >
              <Text fontSize={"9px"} color="white">
                CHECK OUT
              </Text>
              <Image src={blueIndicator} />
            </HStack>
            <Text
              color={"white"}
              position={"absolute"}
              top={"12px"}
              right={"20px"}
              fontSize={"10px"}
              fontWeight={700}
            >
              {formatTime(timeLeft)}
            </Text>
            <VStack
              align={"flex-start"}
              gap={"0px"}
              spacing={0}
              marginTop={"45px"}
            >
              <HStack width={"100%"} justify={"flex-start"}>
                {arrow}
                <Text fontSize={"9px"} color={"rgba(34, 129, 168, 1)"}>
                  YOU NEED TO SEND
                </Text>
              </HStack>
              <Text fontSize={"9px"} color={"white"} marginLeft={"16px"}>
                {GlobalVars.deposit_amount} USDT TRC20
              </Text>
            </VStack>
            <VStack align={"flex-start"} gap={0} spacing={0} marginTop={"30px"}>
              <HStack width={"100%"} justify={"flex-start"}>
                {arrow}
                <Text fontSize={"9px"} color={"rgba(34, 129, 168, 1)"}>
                  TO USDT TRC20 ADDRESS
                </Text>
              </HStack>
              <Text fontSize={"9px"} color={"white"} marginLeft={"16px"}>
                TFCgzmuCsQ73sX9gj8AngWHGvv9V5r64E9
              </Text>
            </VStack>

            <HStack
              width={"100%"}
              justify="center"
              marginTop={"30px"}
              gap={"8px"}
            >
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
                width={"76px"}
                padding="10px 0"
              >
                <Text fontSize={"9px"} color="black">
                  CANCEL
                </Text>
              </Button>
              <Button
                background={
                  "linear-gradient(82.94deg, #2AB0D0 5.51%, #9B71D9 64.24%, #7F7FD7 94.49%)"
                }
                borderRadius={"28px"}
                padding="10px 0"
                width={"136px"}
                onClick={handleCopy}
              >
                <Text fontSize={"9px"} color="black">
                  COPY ADDRESS
                </Text>
              </Button>
              <div
                ref={textRef}
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                }}
              >
                TFCgzmuCsQ73sX9gj8AngWHGvv9V5r64E9
              </div>
              <Button
                background={
                  !click ? "rgba(138, 138, 142, 1)" : "rgb(73, 73, 73)"
                }
                borderRadius={"28px"}
                padding="10px 0"
                width={"76px"}
                cursor={click ? "no-drop" : "pointer"}
                disabled={click}
                onClick={async () => {
                  setClick(true);
                  await getStatusOnClick();
                }}
              >
                <Text fontSize={"9px"} color="black">
                  SENT
                </Text>
              </Button>
            </HStack>
          </VStack>
        ) : (
          <VStack
            width={"100%"}
            align="flex-start"
            textAlign={"left"}
            // height={next_route == "/master_deposit3" ? "250px" : "243px"}
            background={
              "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
            }
            borderRadius="14px"
            padding={"10px"}
            spacing="0px"
            position={"relative"}
            zIndex={100}
          >
            <HStack
              width={"100%"}
              justify="center"
              align={"center"}
              spacing={0}
              gap={"5px"}
            >
              <Text fontSize={"9px"} color="white">
                CHECK OUT
              </Text>
              <Image src={redCircle} />
            </HStack>
            <HStack
              gap={"3px"}
              justify={"flex-start"}
              align={"center"}
              marginTop={"50px"}
            >
              <Image src={redTriangle} />
              <Text color={"#9F1B1B"} fontSize={"9px"}>
                YOU WITHDRAW
              </Text>
            </HStack>
            <Text
              color={"white"}
              marginTop={"5px"}
              fontSize={"9px"}
              marginLeft={"10px"}
            >
              {GlobalVars.deposit_amount} USDT TRC20
            </Text>

            <HStack
              gap={"3px"}
              justify={"flex-start"}
              align={"center"}
              marginTop={"30px"}
            >
              <Image src={redTriangle} />
              <Text color={"#9F1B1B"} fontSize={"9px"}>
                TO USDT TRC20 ADDRESS
              </Text>
            </HStack>
            <Text
              color={"white"}
              marginTop={"5px"}
              fontSize={"9px"}
              marginLeft={"10px"}
            >
              {GlobalVars.vallet_amount}
            </Text>

            <HStack
              gap={"3px"}
              justify={"flex-start"}
              align={"center"}
              marginTop={"30px"}
            >
              <Image src={redTriangle} />
              <Text color={"#9F1B1B"} fontSize={"9px"}>
                LEFTOVER BALANCE
              </Text>
            </HStack>
            <Text
              color={"white"}
              marginTop={"5px"}
              fontSize={"9px"}
              marginLeft={"10px"}
            >
              {next_route == "/referal_withdraw3"
                ? Number(
                    GlobalVars.referral_program?.total_profit_referal -
                      GlobalVars.deposit_amount
                  ).toFixed(2)
                : Number(
                    GlobalVars.standart_balance?.balance -
                      GlobalVars.deposit_amount
                  ).toFixed(2)}{" "}
              USDT TRC20
            </Text>
            <HStack
              marginTop={"50px"}
              align={"center"}
              justify={"center"}
              gap={"8px"}
            >
              <Button
                bg={"#8B8B8B"}
                height={"34px"}
                w={"76px"}
                borderRadius={"26px"}
                color={"black"}
                fontSize={"9px"}
                fontWeight={"700"}
                cursor={"pointer"}
                onClick={() => {
                  GlobalVars.updateDepositAmount("");
                  GlobalVars.updateValletAmount("");
                  GlobalVars.updateCreatedStandart(null);
                  GlobalVars.updateCreatedMaster(null);
                  navigate(back_route);
                }}
              >
                BACK
              </Button>
              <Button
                bg={"#9F1B1B"}
                height={"34px"}
                w={"136px"}
                borderRadius={"26px"}
                color={"black"}
                fontSize={"9px"}
                fontWeight={"700"}
                cursor={"pointer"}
                onClick={() => {
                  GlobalVars.updateDepositAmount("");
                  GlobalVars.updateValletAmount("");
                  GlobalVars.updateCreatedStandart(null);
                  GlobalVars.updateCreatedMaster(null);
                  navigate("/");
                }}
              >
                CANCEL
              </Button>
              <Button
                bg={"#8B8B8B"}
                height={"34px"}
                w={"76px"}
                borderRadius={"26px"}
                color={"black"}
                fontSize={"9px"}
                fontWeight={"700"}
                cursor={"pointer"}
                onClick={async () => await createWithdraval()}
              >
                PROCEED
              </Button>
            </HStack>
          </VStack>
        )}
      </>
    );
  }
);

export default CheckOut;
