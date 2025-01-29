import { makeAutoObservable } from "mobx";
const baseurl = "https://crypto-osiris.com:8008";

class GlobalVarsStore {
  tg_info = {};
  user_info = {};
  referral_program = {};
  report_standart = {};
  report_master = {};

  constructor() {
    makeAutoObservable(this);
  }

  updateTgInfo = (new_info) => {
    this.tg_info = new_info;
  };

  createUser = async () => {
    const response = await fetch(`${baseurl}/register`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        telegramm_id: this.tg_info?.id,
        user_name: this.tg_info?.username,
        count_bonuses: 0,
        used_referal_code: "string",
        is_blocked: false,
      }),
    });
    console.log("Регистрация", response.ok);
  };

  getOneUser = async () => {
    const response = await fetch(
      `${baseurl}/getUser?telegramm_name=${this.tg_info?.username}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    this.user_info = result;
    console.log("Инфо пользователя", result);
  };

  getReferralProgram = async () => {
    const response = await fetch(
      `${baseurl}/getReferalProgramm?telegramm_id=${this.tg_info?.id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    this.referral_program = result;
    console.log("ref program", result);
  };

  getReportAccount = async (type_account) => {
    const response = await fetch(
      `${baseurl}/getReportAccount?type_account=${type_account}&user_name=${this.tg_info?.username}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    if (type_account == "standart") {
      this.report_standart = result;
    } else {
      this.report_master = result;
    }
    console.log("report", result);
  };
}

export default GlobalVarsStore;
