import { HStack, VStack, Text, Image, Box } from "@chakra-ui/react";
import lamp from "./../assets/images/lamp.svg";
import "./styles.css";
import { keyframes } from "@emotion/react";
import noteImage from "./../assets/images/IMG_4173 1.png";
import { observer } from "mobx-react-lite";

const Note = observer(({ text, updates = false }) => {
  const glowAnimation = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;
  return (
    <Box position="relative" width={"100%"} height={updates ? "221px" : "auto"}>
      <Box
        position="absolute"
        top="-4px"
        left="-4px"
        right="-4px"
        bottom="-4px"
        // transform={"skewX(-5deg)"}
        background={
          "linear-gradient(90deg, rgba(4,222,120,1) 0%, rgba(32,115,247,1) 100%)"
          // "radial-gradient(96.88% 172.45% at 1.15% 99.59%, #04DE78 0%, #2073F7 100%)"
        }
        filter="blur(8px)"
        // animation={`${glowAnimation} 3s ease-in-out infinite`}
      />
      {!updates ? (
        <HStack
          width={"100%"}
          background={
            "linear-gradient(90deg, rgba(4,222,120,1) 0%, rgba(32,115,247,1) 100%)"
            // "radial-gradient(96.88% 172.45% at 1.15% 99.59%, #04DE78 0%, #2073F7 100%)"
          }
          borderRadius={"14px"}
          justify={"space-between"}
          padding={!updates ? "10px 13px" : "11px"}
          position={"relative"}
          height={updates ? "221px" : "auto"}
          align={"flex-start"}
        >
          <VStack align={"flex-start"}>
            <Text color={"black"} fontSize={9} fontWeight={800}>
              !NOTE
            </Text>
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
      ) : (
        <Image
          src={noteImage}
          height={"221px"}
          w={"100%"}
          position={"relative"}
          borderRadius={"14px"}
        />
      )}
    </Box>
  );
});

export default Note;
