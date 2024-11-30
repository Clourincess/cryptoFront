import { HStack, VStack, Text, Image, Box } from "@chakra-ui/react";
import lamp from "./../assets/images/lamp.svg";
import "./styles.css";
import { keyframes } from "@emotion/react";

const Note = ({ text, updates = false }) => {
  const glowAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;
  return (
    <Box position="relative" width={"100%"} height={updates ? "241px" : "auto"}>
      <Box
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        bottom="0px"
        transform={"skewX(-5deg)"}
        background={
          "radial-gradient(96.88% 172.45% at 1.15% 99.59%, #04DE78 0%, #2073F7 100%)"
        }
        filter="blur(30px)"
        animation={`${glowAnimation} 3s ease-in-out infinite`}
      />
      <HStack
        width={"100%"}
        background={
          "radial-gradient(96.88% 172.45% at 1.15% 99.59%, #04DE78 0%, #2073F7 100%)"
        }
        borderRadius={"14px"}
        justify={"space-between"}
        padding={!updates ? "10px 13px" : "11px"}
        position={"relative"}
        height={updates ? "241px" : "auto"}
        align={"flex-start"}
      >
        <VStack align={"flex-start"}>
          {!updates ? (
            <Text color={"black"} fontSize={9} fontWeight={800}>
              !NOTE
            </Text>
          ) : (
            <Text color={"black"} fontSize={9}>
              UPDATES
            </Text>
          )}

          <Text
            color={"black"}
            fontSize={7}
            width={"80%"}
            fontWeight={700}
            w={"267px"}
            letterSpacing={"-2%"}
          >
            {text}
          </Text>
        </VStack>
        <Image
          src={lamp}
          width={!updates ? "19px" : "22px"}
          height={!updates ? "26px" : "31px"}
          position={"absolute"}
          top={!updates ? "14px" : "11px"}
          right={!updates ? "14px" : "11px"}
        />
      </HStack>
    </Box>
  );
};

export default Note;
