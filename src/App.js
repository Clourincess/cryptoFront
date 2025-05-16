import { createMemoryRouter, RouterProvider } from "react-router";
import Main from "./pages/main_page";
import ProfilePage from "./pages/profile_pafe";
import MainContainerPage from "./components/main_container_page";
import MasterMain from "./pages/master_balance_main";
import MasterStats from "./pages/master_stats";
import StandartMain from "./pages/standart_main";
import StandartStats from "./pages/standart_stats";
import ReferalMain from "./pages/referral_main";
import ReferalStats from "./pages/referal_stats";
import CalcIncome from "./pages/calc_income";
import StandartDeposit1 from "./pages/standart_deposit1";
import StandartDeposit2 from "./pages/standart_deposit2";
import StandartDeposit3 from "./pages/standart_deposit3";
import StandartDeposit4 from "./pages/standart_deposit4";
import StandartWithDraw1 from "./pages/standart_withdraw1";
import StandartWithDraw2 from "./pages/standart_withdraw2";
import MasterDeposit1 from "./pages/master_deposit1";
import MasterDeposit2 from "./pages/master_deposit2";
import MasterChoose from "./pages/master_deposit_choose";
import MasterDeposit3 from "./pages/master_deposit3";
import MasterWithdrawList from "./pages/master_withdraw_list";
import MasterWithDraw2 from "./pages/master_withdraw2";
import MasterWithDraw3 from "./pages/master_withdraw3";
import MasterWithdraw4 from "./pages/master_withdraw4";
import ReferalWithDraw1 from "./pages/referal_withdraw1";
import ReferalWithDraw2 from "./pages/referal_withdraw2";
import ReferalWithdraw3 from "./pages/referal_withdraw3";
import ReferalCode1 from "./pages/referal_code1";
import ReferalCode2 from "./pages/referal_code2";
import PerehodPage from "./pages/perehod";
import tg from "./tg_vars";
import { useEffect } from "react";
import ReferalCode3 from "./pages/referal_code3";
import ReferalCode4 from "./pages/referal_code4";
import CreateMasterAccount from "./pages/create_master_account";
import DepositHistory from "./pages/deposit_history";
import MasterDeposit4 from "./pages/master_deposit4";
import StandartWithdraw3 from "./pages/st_withdraw_3";
import FaqPage from "./pages/faq_page";

const router = createMemoryRouter([
  {
    path: "/",
    element: (
      <MainContainerPage>
        <Main />
      </MainContainerPage>
    ),
  },
  {
    path: "/profile",
    element: (
      <MainContainerPage>
        <ProfilePage />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_main",
    element: (
      <MainContainerPage>
        <MasterMain />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_stats",
    element: (
      <MainContainerPage>
        <MasterStats />
      </MainContainerPage>
    ),
  },
  {
    path: "/standart_main",
    element: (
      <MainContainerPage>
        <StandartMain />
      </MainContainerPage>
    ),
  },
  {
    path: "/standart_stats",
    element: (
      <MainContainerPage>
        <StandartStats />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_main",
    element: (
      <MainContainerPage>
        <ReferalMain />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_stats",
    element: (
      <MainContainerPage>
        <ReferalStats />
      </MainContainerPage>
    ),
  },
  {
    path: "/calc_income",
    element: (
      <MainContainerPage>
        <CalcIncome />
      </MainContainerPage>
    ),
  },
  {
    path: "/st_deposit_1",
    element: (
      <MainContainerPage>
        <StandartDeposit1 />
      </MainContainerPage>
    ),
  },
  {
    path: "/st_deposit_2",
    element: (
      <MainContainerPage>
        <StandartDeposit2 />
      </MainContainerPage>
    ),
  },
  {
    path: "/st_deposit_3",
    element: (
      <MainContainerPage>
        <StandartDeposit3 />
      </MainContainerPage>
    ),
  },
  {
    path: "/st_deposit_4",
    element: (
      <MainContainerPage>
        <StandartDeposit4 />
      </MainContainerPage>
    ),
  },
  {
    path: "/st_withdraw_1",
    element: (
      <MainContainerPage>
        {" "}
        <StandartWithDraw1 />
      </MainContainerPage>
    ),
  },
  {
    path: "/st_withdraw_2",
    element: (
      <MainContainerPage>
        <StandartWithDraw2 />
      </MainContainerPage>
    ),
  },
  {
    path: "/st_withdraw_3",
    element: (
      <MainContainerPage>
        <StandartWithdraw3 />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_deposit1",
    element: (
      <MainContainerPage>
        <MasterDeposit1 />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_choose",
    element: (
      <MainContainerPage>
        <MasterChoose />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_deposit2",
    element: (
      <MainContainerPage>
        <MasterDeposit2 />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_deposit3",
    element: (
      <MainContainerPage>
        <MasterDeposit3 />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_deposit4",
    element: (
      <MainContainerPage>
        <MasterDeposit4 />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_withdraw1",
    element: (
      <MainContainerPage>
        <MasterWithdrawList />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_withdraw2",
    element: (
      <MainContainerPage>
        <MasterWithDraw2 />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_withdraw3",
    element: (
      <MainContainerPage>
        <MasterWithDraw3 />
      </MainContainerPage>
    ),
  },
  {
    path: "/master_withdraw4",
    element: (
      <MainContainerPage>
        <MasterWithdraw4 />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_withdraw1",
    element: (
      <MainContainerPage>
        <ReferalWithDraw1 />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_withdraw2",
    element: (
      <MainContainerPage>
        <ReferalWithDraw2 />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_withdraw3",
    element: (
      <MainContainerPage>
        <ReferalWithdraw3 />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_code1",
    element: (
      <MainContainerPage>
        <ReferalCode1 />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_code2",
    element: (
      <MainContainerPage>
        <ReferalCode2 />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_code3",
    element: (
      <MainContainerPage>
        <ReferalCode3 />
      </MainContainerPage>
    ),
  },
  {
    path: "/referal_code4",
    element: (
      <MainContainerPage>
        <ReferalCode4 />
      </MainContainerPage>
    ),
  },
  {
    path: "/perehod",
    element: (
      <MainContainerPage>
        <PerehodPage />
      </MainContainerPage>
    ),
  },
  {
    path: "/create_premium_acc",
    element: (
      <MainContainerPage>
        <CreateMasterAccount />
      </MainContainerPage>
    ),
  },
  {
    path: "/deposit_history",
    element: (
      <MainContainerPage>
        <DepositHistory />
      </MainContainerPage>
    ),
  },
  {
    path: "/faq_page",
    element: (
      <MainContainerPage>
        <FaqPage />
      </MainContainerPage>
    ),
  },
]);

const App = () => {
  tg.enableClosingConfirmation();
  tg.expand();
  useEffect(() => {
    if (!tg.isExpanded) tg.expand();
  });
  function big() {
    tg.expand();
  }
  tg.onEvent("viewportChanged", big);
  return <RouterProvider router={router} />;
};

export default App;
