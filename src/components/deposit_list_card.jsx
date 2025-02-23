import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useStores } from "../store/store_context";

const DepositListCard = observer(
  ({
    route = "/master_withdraw2",
    input_data = "150",
    output_data = "200",
    completion_date,
    obj = {},
  }) => {
    const { GlobalVars } = useStores();
    const navigate = useNavigate();

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
      const now = Date.now();
      const diffMs = completion_date - now; // Разница в миллисекундах

      if (diffMs <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      return { days, hours, minutes, seconds };
    }
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }, [completion_date]);

    return (
      <HStack
        width={"100%"}
        background="linear-gradient(80.26deg, #E19E13 -120.73%, #EA743D -87.39%, #DB5356 -54.06%, #B94A70 -20.72%, #B44D88 3.49%, #395CF9 31.49%, #00C2FF 67.5%)"
        borderRadius={"14px"}
        padding={"15px 10px"}
        justify={"space-between"}
        align={"center"}
        height={"51px"}
      >
        {/* <Button
          background="linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
          borderRadius={"28px"}
          padding={"10px 20px "}
          onClick={() => navigate(route)}
        >
          <Text color={"black"} fontSize={"10px"} >
            WITHDRAW
          </Text>
        </Button> */}

        <VStack align={"flex-start"} spacing={0} color={"black"}>
          <Text fontSize={"20px"}>{input_data}</Text>
          <Text width={"max-content"} fontSize={"9px"}>
            USDT TRC20
          </Text>
        </VStack>

        {timeLeft.days == 0 &&
        timeLeft.hours == 0 &&
        timeLeft.minutes == 0 &&
        timeLeft.seconds == 0 ? (
          <Button
            bgColor={"rgba(0, 192, 64, 1)"}
            border={"2px solid rgba(14, 177, 3, 1)"}
            borderRadius={"14px"}
            fontSize={"9px"}
            padding={"6px 12px"}
            fontWeight={"700"}
            onClick={() => {
              GlobalVars.updateSelectedDeposit(obj);
              navigate("/master_withdraw2");
            }}
          >
            WITHDRAW
          </Button>
        ) : (
          <VStack spacing={0} gap={0}>
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2071 8.20711C20.5976 7.81658 20.5976 7.18342 20.2071 6.79289L13.8431 0.428932C13.4526 0.0384078 12.8195 0.0384078 12.4289 0.428932C12.0384 0.819457 12.0384 1.45262 12.4289 1.84315L18.0858 7.5L12.4289 13.1569C12.0384 13.5474 12.0384 14.1805 12.4289 14.5711C12.8195 14.9616 13.4526 14.9616 13.8431 14.5711L20.2071 8.20711ZM0.5 8.5L19.5 8.5L19.5 6.5L0.5 6.5L0.5 8.5Z"
                fill="black"
              />
            </svg>
            <Text fontSize={"9px"} marginTop={"8px"}>
              {String(timeLeft.days).padStart(2, "0")}D{" "}
              {String(timeLeft.hours).padStart(2, "0")}H{" "}
              {String(timeLeft.minutes).padStart(2, "0")}MIN{" "}
              {String(timeLeft.seconds).padStart(2, "0")}SEC{" "}
            </Text>
          </VStack>
        )}

        <VStack align={"flex-end"} spacing={0} color={"black"}>
          <Text fontSize={"20px"}>{Number(output_data).toFixed(2)}</Text>
          <Text fontSize={"9px"}>USDT TRC20</Text>
        </VStack>
      </HStack>
    );
  }
);
export default DepositListCard;
