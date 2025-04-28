import { HStack, VStack } from "@chakra-ui/react";

const MainContainerPage = (props) => {
  return (
    <HStack
      width={"100%"}
      minH={"100vh"}
      align={"flex-start"}
      justify={"center"}
    >
      <VStack width={"375px"} padding={"14px"}>
        {props.children}
      </VStack>
    </HStack>
  );
};
export default MainContainerPage;
