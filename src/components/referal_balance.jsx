import { VStack, HStack, Text, Image, Box } from "@chakra-ui/react";
import ColoredComponent from "./colored_component_wrapper";
import usdt_green from "./../assets/images/usdt_green.svg";
import "./styles.css";
import { keyframes } from "@emotion/react";
import tg from "../tg_vars";
import { useEffect, useRef, useState } from "react";
import { useStores } from "../store/store_context";

const ReferalBalance = ({
  width = "178px",
  height,
  onClick = () => {
    console.log("hi");
  },
  className,
}) => {
  const glowAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

  const { GlobalVars } = useStores();

  // const [referralInfo, setReferralInfo] = useState([]);
  // useEffect(() => {
  //   const getReferalProgramm = async (tgId) => {
  //     const response = await fetch(
  //       `https://crypto-osiris.com:8008/getReferalProgramm?telegramm_id=${tgId}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //         },
  //       }
  //     );
  //     const result = await response.json();
  //     setReferralInfo(result);
  //   };
  //   getReferalProgramm(GlobalVars.tg_id);
  // }, []);

  // console.log("refInfo", referralInfo);

  useEffect(() => {
    GlobalVars.getReferalStats();
  });

  const textRef = useRef(null);

  const handleCopy = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(GlobalVars.referalStats.code);
        alert("Текст скопирован в буфер обмена!");
      } catch (err) {
        console.error("Ошибка при копировании текста: ", err);
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
        alert("Текст скопирован с использованием резервного метода!");
      } catch (err) {
        console.error("Не удалось скопировать текст: ", err);
        alert("Копирование не поддерживается в вашем браузере.");
      }

      selection.removeAllRanges();
      textRef.current.style.display = "none"; // Скрываем текст обратно
    }
  };
  return (
    <Box position="relative" width={width} h={height}>
      <Box
        position="absolute"
        top="0px"
        left="-5px"
        right="-5px"
        bottom="0px"
        transform={"skewX(-5deg)"}
        background="linear-gradient(105deg, rgba(255, 126, 95, 0) 5%,#8DC7D6 40%, #74C6B2 60%, rgba(255, 126, 95, 0) 95%)"
        filter="blur(15px)"
        animation={`${glowAnimation} 3s ease-in-out infinite`}
      />
      <VStack
        width={width}
        background={"rgba(14,14,14,1)"}
        borderRadius={"14px"}
        padding={"7px 10px"}
        onClick={onClick}
        height={height}
        justify={"space-between"}
        position={"relative"}
      >
        <HStack width={"100%"} justify={"space-between"} align={"flex-start"}>
          <Text
            fontSize={"9px"}
            background={"linear-gradient(90deg, #8DC7D6 0%, #74C6B2 100%)"}
            backgroundClip={"text"}
            fontWeight={800}
          >
            REFERRAL BALANCE
          </Text>
          <VStack align={"end"} spacing={0}>
            <Text
              fontSize={"9px"}
              background={"linear-gradient(90deg, #8DC7D6 0%, #74C6B2 100%)"}
              backgroundClip={"text"}
              fontWeight={800}
            >
              YOUR CODE:
            </Text>
            <Text
              fontSize={"9px"}
              color={"white"}
              w={"50px"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              onClick={handleCopy}
              cursor={"pointer"}
              textAlign={"end"}
            >
              {GlobalVars.referalStats.code ?? "00000000"}
            </Text>
            <div
              ref={textRef}
              style={{
                position: "absolute",
                left: "-9999px",
                opacity: 0,
              }}
            >
              {GlobalVars.code}
            </div>
          </VStack>
        </HStack>
        <HStack width={"100%"} justify={"space-between"}>
          <VStack align={"flex-start"} textAlign={"left"} spacing={0}>
            <Text fontSize={26} color={"white"} fontWeight={700}>
              {GlobalVars.referalStats.total_profit_referal ?? 0}
            </Text>
            <Text fontSize={"9px"} color={"white"}>
              USDT TRC20
            </Text>
          </VStack>
          <VStack>
            <Image
              src={usdt_green}
              width={"46px"}
              height={"46px"}
              marginBottom={1}
            />
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ReferalBalance;
