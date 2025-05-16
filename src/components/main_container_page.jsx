import { HStack, VStack } from "@chakra-ui/react";

const MainContainerPage = ({ children }) => {
  return (
    <HStack
      width={"100%"}
      minH={"100vh"}
      height={"auto"}
      align={"flex-start"}
      justify={"center"}
    >
      <VStack
        width={"375px"}
        padding={"14px"}
        minH={"100%"}
        height={"auto"}
        justify={"center"}
        align={"center"}
      >
        {children}
      </VStack>
    </HStack>
  );
};
export default MainContainerPage;
