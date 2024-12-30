import { HStack, Image, VStack, Text } from "@chakra-ui/react";

import telegramm_icon from "./../../assets/images/telegram.svg";
import { useNavigate } from "react-router";
import { useStores } from "../../store/store_context";
import { observer } from "mobx-react-lite";
import NoPhoto from "./../../assets/images/no_photo_user.png";
import { useEffect, useState } from "react";
const InfoHeaderMainPage = observer(() => {
  const navigate = useNavigate();
  const { GlobalVars } = useStores();
  let first_name = "";
  let last_name = "";
  const tg = window.Telegram.WebApp;
  if (tg.initDataUnsafe.user != undefined) {
    first_name = tg.initDataUnsafe?.user?.first_name;
    last_name = tg.initDataUnsafe?.user?.last_name;
  }

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getOneUser = async () => {
      const response = await fetch(
        `https://osiriscrypto.su:8008/getUserById?telegramm_id=${GlobalVars.tg_id}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const result = await response.json();
      setUserInfo(result);
    };
    getOneUser();
  }, [GlobalVars?.tg_id]);

  const rank =
    userInfo?.count_bonuses == 20
      ? "IRON"
      : userInfo?.count_bonuses == 40
      ? "SILVER"
      : userInfo?.count_bonuses == 60
      ? "GOLD"
      : userInfo?.count_bonuses == 80
      ? "DIAMOND"
      : "COAL";

  return (
    <HStack width={"100%"} justify={"space-between"}>
      <HStack align={"center"} onClick={() => navigate("/profile")}>
        <VStack justify={"center"}>
          {tg.initDataUnsafe?.user?.photo_url !== "" ? (
            <Image
              width={"33px"}
              height={"33px"}
              src={`${tg.initDataUnsafe?.user?.photo_url}`}
              objectFit={"cover"}
              borderRadius={"50%"}
            />
          ) : (
            <Image
              width={"33px"}
              height={"33px"}
              src={NoPhoto}
              objectFit={"cover"}
              borderRadius={"50%"}
            />
          )}
        </VStack>

        <VStack
          justify={"flex-start"}
          align={"flex-start"}
          spacing={0}
          padding={0}
        >
          <Text fontSize={"15px"} color={"white"} fontWeight={800}>
            {first_name} {last_name}
            {">"}
          </Text>
          <Text
            fontSize={"9px"}
            color={"black"}
            backgroundColor={"white"}
            borderRadius={"4px"}
            padding={"0px 8px"}
            fontWeight={800}
          >
            {rank}
          </Text>
        </VStack>
      </HStack>
      <a href="#">
        <HStack
          backgroundColor={"rgba(20, 20, 20, 0.6)"}
          borderRadius={"32px"}
          width={"105px"}
          height={"35px"}
          padding={"3px"}
        >
          <Image src={telegramm_icon} />
        </HStack>
      </a>
    </HStack>
  );
});

export default InfoHeaderMainPage;
