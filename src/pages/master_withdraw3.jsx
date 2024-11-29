import { VStack } from "@chakra-ui/react";
import Note from "../components/note";
import tg from "../tg_vars";
import { useNavigate } from "react-router";
import CheckOut from "../components/check_out";

const MasterWithDraw3 = () => {
  const navigate = useNavigate();
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/master_withdraw2");
    backButton.hide();
  }
  return (
    <VStack width={"100%"}>
      <CheckOut back_route="/master_withdraw2" next_route="/master_withdraw4" />
      <Note
        text={`BEFORE WITHDRAWING FUNDS, CHECK THE INFORMATION ABOVE, IF YOU ACCIDENTALLY ENTERED INCORRECT DATA, RETURN TO THE PREVIOUS PAGE AND CHANGE IT.`}
      />
    </VStack>
  );
};

export default MasterWithDraw3;
