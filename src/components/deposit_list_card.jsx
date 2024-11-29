import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const DepositListCard = ({route = '/master_withdraw2'}) => {
    const navigate = useNavigate();
  return (
    <VStack
      width={"100%"}
      background={
        "linear-gradient(216deg, #131315 0%, #000 50.6%, #131315 100%)"
      }
      borderRadius={"14px"}
      padding={"10px"}
      justify={"space-between"}
      spacing={"30px"}
    >
      <HStack width={"100%"} justify={"space-between"}>
        <VStack align={"flex-start"} spacing={0}>
          <Text fontSize={"10px"} color={"#2281a8"}>
            DEPOSITED:
          </Text>
          <Text fontSize={"20px"} color={"white"}>
            20
          </Text>
          <Text fontSize={"10px"} color={"white"}>
            USDT TRC20
          </Text>
        </VStack>
        <svg
          width="35"
          height="34"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 17.0128C35 17.8932 34.661 18.721 34.0453 19.3441L20.5478 33.0052C19.9233 33.6388 19.0549 34 18.1657 34H18.1315C17.2467 33.991 16.4303 33.6388 15.8296 33.0067C14.6028 31.7154 14.6236 29.6354 15.8757 28.3712L23.8787 20.2712H3.34028C2.44511 20.2712 1.56926 19.8979 0.937288 19.2463C0.317211 18.6081 -0.0143959 17.7743 0.000479558 16.8999C0.0331892 15.1074 1.50086 13.6491 3.27188 13.6491H23.7776L15.8757 5.65136C15.2571 5.02678 14.9166 4.19601 14.9166 3.31105C14.9166 2.4261 15.2571 1.59532 15.8757 0.970743C16.4928 0.344647 17.3136 0 18.188 0C19.0623 0 19.8832 0.344647 20.5003 0.970743L34.0453 14.68C34.661 15.3031 35 16.1308 35 17.0128Z"
            fill="white"
          />
        </svg>
        <VStack align={"flex-start"} spacing={0}>
          <Text fontSize={"10px"} color={"#7975ba"}>
            FINAL BALANCE
          </Text>
          <Text fontSize={"20px"} color={"white"}>
            20
          </Text>
          <Text fontSize={"10px"} color={"white"}>
            USDT TRC20
          </Text>
        </VStack>
      </HStack>
      <HStack width={"100%"} justify={"space-between"}>
        <VStack align={"flex-start"} spacing={0}>
          <HStack spacing={"5px"}>
            {" "}
            <Text fontSize={"10px"} color={"#2281a8"}>
              TERM:
            </Text>
            <Text fontSize={"10px"} color={"white"}>
              DEPOSITED:
            </Text>
          </HStack>
          <HStack spacing={"5px"}>
            {" "}
            <Text fontSize={"10px"} color={"#2281a8"}>
              TERM:
            </Text>
            <Text fontSize={"10px"} color={"white"}>
              DEPOSITED:
            </Text>
          </HStack>
          <HStack spacing={"5px"}>
            {" "}
            <Text fontSize={"10px"} color={"#2281a8"}>
              TERM:
            </Text>
            <Text fontSize={"10px"} color={"white"}>
              DEPOSITED:
            </Text>
          </HStack>
        </VStack>
        <Button
          background="linear-gradient(44deg, #2ab0d0 0%, #9b71d9 66%, #7f7fd7 100%)"
          borderRadius={"28px"}
          padding={"10px 20px "}
          onClick={() => navigate(route)}
        >
          <Text color={"black"} fontSize={"10px"} >
            WITHDRAW
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};
export default DepositListCard;
