import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import lamp from "./../assets/images/lamp.svg";
import "./styles.css";

const Note = ({ text, updates = false }) => {
  return (
    <HStack
      width={"100%"}
      background={
        "radial-gradient(96.88% 172.45% at 1.15% 99.59%, #04DE78 0%, #2073F7 100%)"
      }
      borderRadius={"14px"}
      justify={"space-between"}
      padding={!updates ? "10px 13px" : "11px"}
      position={"relative"}
      className="animated_note"
      zIndex={1}
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
  );
};

export default Note;
