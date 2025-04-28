import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import Note from "../components/note";
import { useNavigate } from "react-router";
import coal from "./../assets/images/coal.svg";
import iron from "./../assets/images/iron.svg";
import silver from "./../assets/images/silver.svg";
import gold from "./../assets/images/gold.svg";
import diamond from "./../assets/images/diamond.svg";
import lamp from "./../assets/images/lamp.svg";
import { useEffect, useState } from "react";

import galka from "./../assets/images/galka.svg";
import { useStores } from "../store/store_context";
import { observer } from "mobx-react-lite";

const ProfilePage = observer(() => {
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;
  const backButton = tg.BackButton;
  backButton.show();
  backButton.onClick(back_page);
  function back_page() {
    navigate("/");
    backButton.hide();
  }
  const { GlobalVars } = useStores();

  const rank =
    GlobalVars.user_info?.count_bonuses == 20
      ? "IRON"
      : GlobalVars.user_info?.count_bonuses == 40
      ? "SILVER"
      : GlobalVars.user_info?.count_bonuses == 60
      ? "GOLD"
      : GlobalVars.user_info?.count_bonuses == 80
      ? "DIAMOND"
      : "COAL";
  return (
    <VStack width={"100%"} gap={"20px"}>
      <VStack width={"100%"} gap={0}>
        <VStack marginTop={"50px"} gap={0}>
          <Image
            src={
              GlobalVars.user_info?.count_bonuses == 20
                ? iron
                : GlobalVars.user_info?.count_bonuses == 40
                ? silver
                : GlobalVars.user_info?.count_bonuses == 60
                ? gold
                : GlobalVars.user_info?.count_bonuses == 80
                ? diamond
                : coal
            }
            width={"120px"}
            height={"120px"}
          />
          <Text
            fontSize={"21px"}
            fontWeight={"800"}
            color={
              GlobalVars.user_info?.count_bonuses == 20
                ? "rgba(150, 195, 254, 1)"
                : GlobalVars.user_info?.count_bonuses == 40
                ? "rgba(45, 139, 236, 1)"
                : GlobalVars.user_info?.count_bonuses == 60
                ? "rgba(100, 81, 255, 1)"
                : GlobalVars.user_info?.count_bonuses == 80
                ? "rgba(161, 45, 246, 1)"
                : "rgba(84, 84, 84, 1)s"
            }
          >
            {rank}.
          </Text>
        </VStack>
        <VStack width={"inherit"} gap={0} marginTop={"22px"}>
          <HStack
            width={"100%"}
            justifyContent={"space-between"}
            padding={"0 61px"}
            spacing={0}
          >
            <Text
              color={"rgba(255, 255, 255, 1)"}
              fontSize={"9px"}
              fontWeight={800}
            >
              SCORE
            </Text>
            <svg
              width="8"
              height="11"
              viewBox="0 0 8 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.30346 4.44055C6.81678 4.44055 7.3301 4.44055 7.84184 4.44055C7.89554 4.44055 7.9445 4.45096 7.97767 4.4926C8.01084 4.53275 8.0061 4.62346 7.96978 4.66212C7.77392 4.87179 7.57649 5.08145 7.38064 5.29112C7.16899 5.51864 6.95735 5.74615 6.7457 5.97217C6.59092 6.13872 6.43613 6.30378 6.28134 6.47032C6.15499 6.60564 6.02705 6.74245 5.9007 6.87777C5.69221 7.1023 5.4853 7.32536 5.27681 7.54989C5.07306 7.76849 4.86932 7.98708 4.66557 8.20567C4.525 8.35585 4.38442 8.50455 4.24385 8.65326C4.07327 8.83616 3.90585 9.01906 3.73527 9.20196C3.54258 9.41015 3.34988 9.61684 3.15561 9.82502C2.9645 10.0302 2.77339 10.234 2.58227 10.4392C2.43222 10.5998 2.28376 10.7633 2.13213 10.9239C2.10844 10.9492 2.07843 10.97 2.04842 10.9864C1.99945 11.0117 1.95049 10.9998 1.90943 10.967C1.86362 10.9299 1.85415 10.8808 1.86836 10.8273C1.91574 10.6518 1.96155 10.4763 2.00893 10.3024C2.04684 10.1626 2.0879 10.0243 2.12581 9.8845C2.15582 9.77595 2.18267 9.6674 2.21268 9.55885C2.23795 9.46517 2.2648 9.37148 2.29007 9.2778C2.32008 9.16925 2.35009 9.0607 2.37852 8.95215C2.41011 8.83765 2.44012 8.72463 2.47171 8.61013C2.50804 8.47333 2.54594 8.33801 2.58227 8.20121C2.62334 8.05399 2.6644 7.90678 2.70389 7.75956C2.74653 7.60491 2.78444 7.44878 2.82709 7.29413C2.87289 7.12758 2.92185 6.96104 2.96766 6.793C3.00241 6.66661 3.03399 6.54021 3.06716 6.41382C3.07348 6.38705 3.08296 6.36028 3.08928 6.33352C3.10033 6.29486 3.09401 6.28742 3.05295 6.28742C3.00556 6.28593 2.95818 6.28593 2.9108 6.28593C2.0263 6.28593 1.14181 6.28742 0.257321 6.28742C0.216256 6.28742 0.17519 6.28742 0.132545 6.28445C0.0804234 6.28147 0.0377779 6.25917 0.0156656 6.21456C-0.00802618 6.16697 -0.00644674 6.1179 0.0314601 6.07627C0.102535 6.00043 0.17677 5.92608 0.247845 5.85024C0.396313 5.69559 0.544781 5.54094 0.694829 5.38778C0.86541 5.21231 1.03757 5.03684 1.20815 4.86138C1.40716 4.65766 1.60459 4.45245 1.8036 4.24873C2.02473 4.02121 2.24743 3.7937 2.46855 3.56619C2.68809 3.34016 2.90606 3.11414 3.1256 2.8896C3.36884 2.63978 3.61207 2.38996 3.85373 2.14014C4.01325 1.97657 4.1712 1.81151 4.33072 1.64646C4.47445 1.49776 4.61976 1.34905 4.76507 1.20035C4.9246 1.03678 5.08412 0.87321 5.24365 0.708152C5.39369 0.553503 5.54374 0.397366 5.69379 0.242717C5.76013 0.174315 5.82646 0.107399 5.89596 0.0419706C5.9465 -0.00561378 6.01758 -0.0115619 6.0697 0.0181783C6.09971 0.0360225 6.11076 0.0613017 6.1155 0.0925289C6.12498 0.159444 6.09655 0.220412 6.07601 0.282867C6.04759 0.372087 6.016 0.459821 5.98757 0.547555C5.94808 0.665029 5.90701 0.782503 5.86911 0.899976C5.82804 1.0234 5.78698 1.14682 5.74591 1.27024C5.71748 1.35352 5.68747 1.43679 5.66062 1.52155C5.63219 1.60779 5.60534 1.69404 5.57691 1.78029C5.50583 1.99293 5.43318 2.20706 5.36052 2.4197C5.32736 2.51785 5.29577 2.61599 5.26418 2.71413C5.21995 2.85094 5.17573 2.98923 5.12835 3.12603C5.06359 3.31934 4.99883 3.51117 4.93249 3.70448C4.86932 3.88887 4.80772 4.07475 4.74612 4.25914C4.73032 4.30523 4.71611 4.35282 4.70189 4.4004C4.69242 4.4346 4.69873 4.44204 4.73506 4.44204C4.8551 4.44204 4.97672 4.44204 5.09676 4.44204C5.50268 4.44204 5.90386 4.44204 6.30346 4.44055Z"
                fill="white"
              />
            </svg>
          </HStack>
          <HStack spacing={0} marginTop={"5px"}>
            <HStack
              w={"58px"}
              h={"15px"}
              background={
                GlobalVars.user_info?.count_bonuses == 0
                  ? "rgba(25, 25, 25, 1)"
                  : "linear-gradient(90deg, rgba(5,177,221,1) 0%, rgba(50,132,222,1) 100%)"
              }
              borderRadius={"4px"}
            />
            <HStack
              w={"58px"}
              h={"15px"}
              background={
                GlobalVars.user_info?.count_bonuses > 20
                  ? "linear-gradient(90deg, rgba(50,132,222,1) 0%, rgba(103,78,222,1) 100%)"
                  : "rgba(25, 25, 25, 1)"
              }
              borderRadius={"4px"}
            />
            <HStack
              w={"58px"}
              h={"15px"}
              background={
                GlobalVars.user_info?.count_bonuses > 40
                  ? "linear-gradient(90deg, rgba(103,78,222,1) 0%, rgba(137,44,223,1) 100%)"
                  : "rgba(25, 25, 25, 1)"
              }
              borderRadius={"4px"}
            />
            <HStack
              w={"58px"}
              h={"15px"}
              background={
                GlobalVars.user_info?.count_bonuses > 60
                  ? "linear-gradient(90deg, rgba(137,44,223,1) 0%, rgba(171,10,223,1) 100%)"
                  : "rgba(25, 25, 25, 1)"
              }
              borderRadius={"4px"}
            />
          </HStack>
          <HStack
            spacing={0}
            justify={"space-between"}
            width={"100%"}
            padding={" 0 61px"}
            fontSize={"9px"}
            fontWeight={800}
            marginTop={"5px"}
          >
            <Text color={"rgba(84, 84, 84, 1)"}>0</Text>
            <Text
              color={
                GlobalVars.user_info?.count_bonuses > 0
                  ? "rgba(150, 195, 254, 1)"
                  : "rgba(84, 84, 84, 1)"
              }
            >
              20
            </Text>
            <Text
              color={
                GlobalVars.user_info?.count_bonuses > 20
                  ? "rgba(45, 139, 236, 1)"
                  : "rgba(84, 84, 84, 1)"
              }
            >
              40
            </Text>
            <Text
              color={
                GlobalVars.user_info?.count_bonuses > 40
                  ? "rgba(100, 81, 255, 1)"
                  : "rgba(84, 84, 84, 1)"
              }
            >
              60
            </Text>
            <Text
              color={
                GlobalVars.user_info?.count_bonuses > 60
                  ? "rgba(161, 45, 246, 1)"
                  : "rgba(84, 84, 84, 1)"
              }
            >
              80
            </Text>
          </HStack>
          <HStack
            width={"100%"}
            spacing={0}
            justify={"flex-start"}
            padding={"0 50px"}
            marginTop={"5px"}
          >
            <VStack gap={"2px"} justify={"space-between"}>
              <Text fontSize={"8px"} color={"rgba(84, 84, 84, 1)"}>
                COAL
              </Text>
              <Image src={coal} w={"28px"} h={"28px"} />
            </VStack>
            <VStack marginLeft={"24px"} gap={"2px"} justify={"space-between"}>
              <Text fontSize={"8px"} color={"rgba(150, 195, 254, 1)"}>
                IRON
              </Text>
              <Image src={iron} w={"28px"} h={"28px"} />
            </VStack>
            <VStack marginLeft={"27px"} gap={"2px"} justify={"space-between"}>
              <Text fontSize={"8px"} color={"rgba(45, 139, 236, 1)"}>
                SILVER
              </Text>
              <Image src={silver} w={"28px"} h={"28px"} />
            </VStack>
            <VStack marginLeft={"25px"} gap={"2px"} justify={"space-between"}>
              <Text fontSize={"8px"} color={"rgba(100, 81, 255, 1)"}>
                GOLD
              </Text>
              <Image src={gold} w={"28px"} h={"28px"} />
            </VStack>
            <VStack marginLeft={"18px"} gap={"2px"} justify={"space-between"}>
              <Text fontSize={"8px"} color={"rgba(161, 45, 246, 1)"}>
                DIAMOND
              </Text>
              <Image src={diamond} w={"28px"} h={"28px"} />
            </VStack>
          </HStack>
        </VStack>
        <VStack width={"100%"}>
          <HStack
            width={"100%"}
            justify={"space-between"}
            padding={"0 47px"}
            marginTop={"20px"}
            color={"rgba(255, 255, 255, 1)"}
            fontSize={"9px"}
            fontWeight={800}
          >
            <Text>MILESTONES</Text>
            <Text>REWARDS</Text>
          </HStack>
          <HStack
            justify={"space-between"}
            w={"100%"}
            padding={"0 46px"}
            marginTop={"20px"}
          >
            <HStack>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#96C3FF" />
              </svg>
              <Text
                w={"100px"}
                fontSize={"9px"}
                letterSpacing={"-2%"}
                color={"rgba(150, 195, 255, 1)"}
              >
                MAKE 1ST DEPOSIT IN STANDARD ACCOUNT
              </Text>
            </HStack>
            {GlobalVars.user_info?.achievements?.first_standart_deposit ==
            "Y" ? (
              <Image src={galka} />
            ) : (
              <HStack
                h={"18px"}
                w={"27px"}
                background={"linear-gradient(90deg, #05B1DD 0%, #AB0ADF 100%)"}
                borderRadius={"5px"}
                justifyContent={"center"}
                gap={"3px"}
              >
                <Text fontSize={"9px"} color={"rgba(0, 0, 0, 1)"}>
                  20
                </Text>
                <Image src={lamp} w={"7px"} h={"10px"} />
              </HStack>
            )}
          </HStack>

          <HStack
            justify={"space-between"}
            w={"100%"}
            padding={"0 46px"}
            marginTop={"14px"}
          >
            <HStack>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#96C3FF" />
              </svg>
              <Text
                w={"100px"}
                fontSize={"9px"}
                letterSpacing={"-2%"}
                color={"rgba(150, 195, 255, 1)"}
              >
                MAKE 1ST DEPOSIT IN PREMIUM ACCOUNT
              </Text>
            </HStack>
            {GlobalVars.user_info?.achievements?.first_master_deposit == "Y" ? (
              <Image src={galka} />
            ) : (
              <HStack
                h={"18px"}
                w={"27px"}
                background={"linear-gradient(90deg, #05B1DD 0%, #AB0ADF 100%)"}
                borderRadius={"5px"}
                justifyContent={"center"}
                gap={"3px"}
              >
                <Text fontSize={"9px"} color={"rgba(0, 0, 0, 1)"}>
                  20
                </Text>
                <Image src={lamp} w={"7px"} h={"10px"} />
              </HStack>
            )}
          </HStack>

          <HStack
            justify={"space-between"}
            w={"100%"}
            padding={"0 46px"}
            marginTop={"14px"}
          >
            <HStack>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#96C3FF" />
              </svg>
              <Text
                w={"100px"}
                fontSize={"9px"}
                letterSpacing={"-2%"}
                color={"rgba(150, 195, 255, 1)"}
              >
                ACTIVATE SOMEONES REFERRAL CODE
              </Text>
            </HStack>
            {GlobalVars.user_info?.achievements?.activate_someone_referal ==
            "Y" ? (
              <Image src={galka} />
            ) : (
              <HStack
                h={"18px"}
                w={"27px"}
                background={"linear-gradient(90deg, #05B1DD 0%, #AB0ADF 100%)"}
                borderRadius={"5px"}
                justifyContent={"center"}
                gap={"3px"}
              >
                <Text fontSize={"9px"} color={"rgba(0, 0, 0, 1)"}>
                  20
                </Text>
                <Image src={lamp} w={"7px"} h={"10px"} />
              </HStack>
            )}
          </HStack>

          <HStack
            justify={"space-between"}
            w={"100%"}
            padding={"0 46px"}
            marginTop={"14px"}
          >
            <HStack>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#96C3FF" />
              </svg>
              <Text
                w={"100px"}
                fontSize={"9px"}
                letterSpacing={"-2%"}
                color={"rgba(150, 195, 255, 1)"}
              >
                SOMEONE ACTIVATED YOUR REFERRAL CODE
              </Text>
            </HStack>
            {GlobalVars.user_info?.achievements
              ?.activate_current_user_referal == "Y" ? (
              <Image src={galka} />
            ) : (
              <HStack
                h={"18px"}
                w={"27px"}
                background={"linear-gradient(90deg, #05B1DD 0%, #AB0ADF 100%)"}
                borderRadius={"5px"}
                justifyContent={"center"}
                gap={"3px"}
              >
                <Text fontSize={"9px"} color={"rgba(0, 0, 0, 1)"}>
                  20
                </Text>
                <Image src={lamp} w={"7px"} h={"10px"} />
              </HStack>
            )}
          </HStack>
        </VStack>
      </VStack>
      <Note text={"THE MORE POINTS YOU GET, THE HIGHER RANK YOU ATTAIN."} />
    </VStack>
  );
});

export default ProfilePage;
