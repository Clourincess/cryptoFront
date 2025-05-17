import { HStack, VStack, Text, Image, Stack } from "@chakra-ui/react";
import lamp from "./../assets/images/lamp.svg";
import "./styles.css";
import noteImage from "./../assets/images/IMG_4173 1.png";
import { useState } from "react";

const Note = ({ text, updates = false }) => {
  const [name, setName] = useState("light");

  return (
    <>
      {!updates ? (
        <HStack
          zIndex={3}
          position="relative"
          width={"100%"}
          className={name}
          background={
            "linear-gradient(90deg, rgba(4,222,120,1) 0%, rgba(32,115,247,1) 100%)"
          }
          borderRadius={"14px"}
          justify={"space-between"}
          padding={!updates ? "10px 13px" : "11px"}
          height={updates ? "221px" : "auto"}
          align={"flex-start"}
        >
          <VStack
            align={"flex-start"}
            position="relative" // Добавляем на всякий случай
            zIndex={2}
          >
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
        <Stack
          className={name}
          height={"221px"}
          w={"100%"}
          position={"relative"}
          zIndex={1}
        >
          <Image src={noteImage} borderRadius={"14px"} />
        </Stack>
      )}
    </>
  );
};
export default Note;
