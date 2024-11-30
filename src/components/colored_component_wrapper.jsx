import { Box, VStack } from "@chakra-ui/react";
import "./styles.css";
import gradient from "./../assets/images/gradient.svg";
import { keyframes } from "@emotion/react";

const ColoredComponent = ({
  width,
  height = "auto",
  padding = "10px",
  onClick = () => {},
  justify = "",
  children,
  background = "radial-gradient(120% 107.04% at -20% 84.72%, #E38F24 0%, #E38F24 13.41%, #E35A65 37.11%, #C3527F 55.9%, #3A79F2 69.99%, #04B5FC 99.96%)",
}) => {
  const glowAnimation = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;
  return (
    <Box w={width} height={height} position={"relative"}>
      <Box
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        bottom="0px"
        transform={"skewX(-5deg)"}
        background={`${background}`}
        filter="blur(40px)"
        animation={`${glowAnimation} 3s ease-in-out infinite`}
      />
      <VStack
        borderRadius={"14px"}
        boxShadow={"0 0 4px 0 rgba(0, 255, 255, 0.25)"}
        padding={padding}
        width={width}
        height={height}
        onClick={onClick}
        justify={"space-between"}
        position={"relative"}
        zIndex={2}
        className="animated"
        background={background}
        // backgroundPosition={"center"}
        // backgroundSize={"cover"}
        cursor={"pointer"}
      >
        {children}
      </VStack>
    </Box>
  );
};
export default ColoredComponent;
