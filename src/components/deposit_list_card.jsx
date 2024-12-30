import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const DepositListCard = ({
  route = "/master_withdraw2",
  input_data = "150",
  output_data = "200",
}) => {
  const navigate = useNavigate();
  return (
    <HStack
      width={"100%"}
      background="linear-gradient(80.26deg, #E19E13 -120.73%, #EA743D -87.39%, #DB5356 -54.06%, #B94A70 -20.72%, #B44D88 3.49%, #395CF9 31.49%, #00C2FF 67.5%)"
      borderRadius={"14px"}
      padding={"15px 10px"}
      justify={"space-between"}
      align={"center"}
      height={"51px"}
    >
      {/* <Button
          background="linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
          borderRadius={"28px"}
          padding={"10px 20px "}
          onClick={() => navigate(route)}
        >
          <Text color={"black"} fontSize={"10px"} >
            WITHDRAW
          </Text>
        </Button> */}

      <VStack align={"flex-start"} spacing={0} color={"black"}>
        <Text fontSize={"20px"}>{input_data}</Text>
        <Text width={"max-content"} fontSize={"9px"}>
          USDT TRC20
        </Text>
      </VStack>
      <VStack>
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2071 8.20711C20.5976 7.81658 20.5976 7.18342 20.2071 6.79289L13.8431 0.428932C13.4526 0.0384078 12.8195 0.0384078 12.4289 0.428932C12.0384 0.819457 12.0384 1.45262 12.4289 1.84315L18.0858 7.5L12.4289 13.1569C12.0384 13.5474 12.0384 14.1805 12.4289 14.5711C12.8195 14.9616 13.4526 14.9616 13.8431 14.5711L20.2071 8.20711ZM0.5 8.5L19.5 8.5L19.5 6.5L0.5 6.5L0.5 8.5Z"
            fill="black"
          />
        </svg>
        <Text fontSize={"9px"}>12D 4H 18MIN 12SEC</Text>
      </VStack>
      <VStack align={"flex-end"} spacing={0} color={"black"}>
        <Text fontSize={"20px"}>{output_data}</Text>
        <Text fontSize={"9px"}>USDT TRC20</Text>
      </VStack>
    </HStack>
  );
};
export default DepositListCard;
