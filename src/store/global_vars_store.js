import { makeAutoObservable } from "mobx";
const baseurl = "https://osiriscrypto.su:8008";

class GlobalVarsStore {
  tgInfo = "";
  tg_id = null;
  registered = false;
  username = "";
  standartBalance = 0;
  masterBalance = 0;
  rank = "";
  standartStats = {
    id: 10,
    deposit_sum: 0,
    withdrawal_sum: 0,
    profit: 0,
    standart_account_id: 8,
  };
  masterStats = {
    id: 10,
    deposit_sum: 0,
    withdrawal_sum: 0,
    profit: 0,
    standart_account_id: 8,
  };
  referalStats = {
    id: 0,
    code: 0,
    count_referal_user: 0,
    total_profit_referal: 0,
    app_user_id: 0,
  };
  constructor() {
    makeAutoObservable(this);
  }
  updateTgInfo = (newValue) => {
    this.tgInfo = newValue;
  };
  register = async (values) => {
    const response = await fetch("https://osiriscrypto.su:8008/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(values),
    });
    this.registered = response.status == 200 ? true : false;
    const result = await response.json();
    this.username = result.user_name;
    this.tg_id = result.telegramm_id;
  };
  getStandart = async () => {
    const response = await fetch(
      baseurl + `/getAccountStandart?userName=${this.username}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    this.standartBalance = result.balance;
  };
  getMaster = async () => {
    const response = await fetch(
      baseurl + `/getAccountMaster?user_name=${this.username}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    this.masterBalance = result.balance == undefined ? 0 : result.balance;
  };
  getStats = async (isMaster = false) => {
    const response = await fetch(
      baseurl +
        `/getReportAccount?type_account=${
          isMaster ? "master" : "standart"
        }&user_name=${this.username}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    {
      isMaster ? (this.masterStats = result) : (this.standartStats = result);
    }
  };
  getReferalStats = async () => {
    const response = await fetch(
      baseurl + `/getReferalProgramm?telegramm_id=${this.tg_id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    this.referalStats = result;
    console.log("refstst", result);
  };
  updateRank = (newRank) => {
    this.rank = newRank;
  };

  getAllReferralPrograms = async () => {
    const response = await fetch(baseurl + "/getAllReferalProgramms", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  };
}

export default GlobalVarsStore;
