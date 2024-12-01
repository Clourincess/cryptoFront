import { VStack, Image, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import small_star from "./../assets/images/small_star.svg";

const BlackButtonIcon = ({
  icon,
  text,
  width = "113px",
  height = "100px",
  iconWidth,
  iconHeight,
  spacing = "10px",
  route = "/",
  additionalTextIcon = "",
  predictionalIcon = "",
  type = "",
  stats = false,
  star = false,
  isCalc = false,
  top,
  left,
}) => {
  const navigate = useNavigate();
  const editMultiLineText = (text) => {
    return text.split(" ").map((elem, index) => (
      <span key={index}>
        {elem}
        <br />
      </span>
    ));
  };
  return (
    <VStack
      width={width}
      height={height}
      spacing={spacing}
      // background={
      //   "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
      // }
      backgroundColor={"rgba(20, 20, 20, 0.6)"}
      borderRadius={"14px"}
      padding={"7px 10px"}
      onClick={() => navigate(route)}
      justify={"space-between"}
      zIndex={100}
      position={"relative"}
      cursor={"pointer"}
    >
      <HStack width={"100%"} justify={"flex-start"} spacing={"3px"}>
        {predictionalIcon}
        <Text fontSize={"9px"} color={"white"} dir="row" fontWeight={700}>
          {editMultiLineText(text)}
        </Text>
        <VStack position={"absolute"} top={top} left={left} w={"54px"}>
          {additionalTextIcon}
        </VStack>
      </HStack>
      <HStack
        width={"100%"}
        height={"60px"}
        justify={"flex-end"}
        align={"flex-end"}
        alignSelf={"flex-end"}
        justifySelf={"flex-end"}
        position={"relative"}
      >
        {stats ? (
          <Image
            src={icon}
            width={iconWidth}
            height={iconHeight}
            position={"absolute"}
            top={"-60px"}
            right={"20px"}
            bottom={type == "referal" ? "-3px" : "0px"}
          />
        ) : isCalc ? (
          <Image
            src={icon}
            width={iconWidth}
            height={iconHeight}
            position={"absolute"}
            bottom={type == "referal" ? "-3px" : "-15px"}
            right={type == "referal" ? "0px" : "-5px"}
          />
        ) : (
          <>
            <Image
              src={icon}
              width={iconWidth}
              height={iconHeight}
              position={"absolute"}
              bottom={type == "referal" ? "-3px" : "0px"}
            />
            {star ? (
              <Image
                src={small_star}
                position={"absolute"}
                top={"-40px"}
                right={"-20px"}
                bottom={type == "referal" ? "-3px" : "0px"}
                width={"60px"}
                height={"60px"}
              />
            ) : null}
          </>
        )}
      </HStack>
    </VStack>
  );
};

export default BlackButtonIcon;
