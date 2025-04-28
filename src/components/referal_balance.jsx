import { VStack, HStack, Text, Image, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useRef } from "react";
import { useStores } from "../store/store_context";

import usdt_green from "./../assets/images/usdt_green.svg";
import "./styles.css";
import { observer } from "mobx-react-lite";

const ReferalBalance = observer(({ width = "178px", height, balance }) => {
  const glowAnimation = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

  const { GlobalVars } = useStores();
  const textRef = useRef(null);
  const handleCopy = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(GlobalVars.referral_program?.code);
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
  return (
    <Box position="relative" width={width} h={height}>
      <Box
        position="absolute"
        top="0px"
        left="-5px"
        right="-5px"
        bottom="0px"
        // transform={"skewX(0deg)"}
        background="linear-gradient(105deg, rgba(255, 126, 95, 0) 5%,#8DC7D6 40%, #74C6B2 60%, rgba(255, 126, 95, 0) 95%)"
        filter="blur(12px)"
        animation={`${glowAnimation} 3s ease-in-out infinite`}
      />
      <VStack
        width={width}
        background={"rgba(8, 11, 16, 1)"}
        borderRadius={"14px"}
        padding={"7px 10px"}
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
              fontSize={"10px"}
              color={"white"}
              w={"50px"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              onClick={handleCopy}
              cursor={"pointer"}
              textAlign={"end"}
            >
              {GlobalVars.referral_program?.code || "00000000"}
            </Text>
            <div
              ref={textRef}
              style={{
                position: "absolute",
                left: "-9999px",
                opacity: 0,
              }}
            >
              {GlobalVars.referral_program?.code}
            </div>
          </VStack>
        </HStack>
        <HStack width={"100%"} justify={"space-between"}>
          <VStack align={"flex-start"} textAlign={"left"} spacing={0}>
            <Text fontSize={"26px"} color={"white"} fontWeight={700}>
              {balance.toFixed(2)}
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
});

export default ReferalBalance;
