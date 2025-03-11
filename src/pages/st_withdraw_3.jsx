import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import CheckOut from "../components/check_out";

const StandartWithdraw3 = () => {
  return (
    <VStack width={"100%"}>
      <CheckOut back_route="/st_withdraw_1" next_route="/st_withdraw_2" />
      <Note text={"CHECK THE INFORMATION PROPERLY."} />
    </VStack>
  );
};

export default StandartWithdraw3;
