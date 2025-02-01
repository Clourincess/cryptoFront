import { makeAutoObservable } from "mobx";
const baseurl = "https://crypto-osiris.com:8008";

class GlobalVarsStore {
  tg_info = {};
  user_info = {};
  referral_program = {};
  report_standart = {};
  report_master = {};
  coef = {};
  standart_balance = {};
  master_balance = {};
  deposit_amount = null;
  vallet_amount = "";
  standart_deposits = [];
  master_deposits = [];

  created_standart_deposit_id = null;
  created_master_deposit_id = null;

  constructor() {
    makeAutoObservable(this);
  }

  updateTgInfo = (new_info) => {
    this.tg_info = new_info;
  };
  updateCreatedStandart = (new_id) => {
    this.created_standart_deposit_id = new_id;
  };
  updateCreatedMaster = (new_id) => {
    this.created_master_deposit_id = new_id;
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

  getCoefStandart = async () => {
    const response = await fetch(`${baseurl}/app/coefficient/`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const result = await response.json();
    this.coef = result;
  };

  getStandartBalanceByUserId = async () => {
    const response = await fetch(
      `${baseurl}/getAccountStandartByUserId?user_id=${this.tg_info?.id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    this.standart_balance = result;
    console.log("standart balance", result);
  };

  getMasterBalanceByUserId = async () => {
    const response = await fetch(
      `${baseurl}/getAccountMasterByUserId?user_id=${this.tg_info?.id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    this.master_balance = result;
    console.log("master balance", result);
  };

  createMasterBalance = async () => {
    const response = await fetch(
      `${baseurl}/createAccountMaster?user_id=${this.tg_info?.id}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      }
    );
    console.log("create master", response.ok);
  };

  createDepositStandart = async () => {
    const response = await fetch(`${baseurl}/createDepositStandart`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        sum: parseInt(this.deposit_amount),
        deposit_date: new Date().toISOString().split("T")[0],
        account_id: this.standart_balance?.id,
        verification: false,
        account_number: this.vallet_amount.toString(),
        type_of_network: "trc20",
      }),
    });
    const result = await response.json();
    this.created_standart_deposit_id = result;
    return response.ok;
  };

  getStatusDepositStandart = async () => {
    const response = await fetch(
      `${baseurl}/getStatusDepositStandart/${this.created_standart_deposit_id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    console.log("result status standart", result);
    return result;
  };

  createDepositMaster = async () => {
    const response = await fetch(`${baseurl}/createDepositMaster`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        sum: parseInt(this.deposit_amount),
        deposit_date: new Date().toISOString().split("T")[0],
        account_id: this.master_balance?.id,
        verification: false,
        account_number: this.vallet_amount.toString(),
        type_of_network: "trc20",
      }),
    });
    const result = await response.json();
    this.created_master_deposit_id = result;
    return result;
  };

  getStatusDepositMaster = async () => {
    const response = await fetch(
      `${baseurl}/getStatusDepositMaster/${this.created_master_deposit_id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    console.log("result status master", result);
    return result;
  };

  updateDepositAmount = (new_deposit_amount) => {
    this.deposit_amount = new_deposit_amount;
  };

  updateValletAmount = (new_vallet_amount) => {
    this.vallet_amount = new_vallet_amount;
  };

  getAllDepositsByUserName = async (type_account) => {
    const response = await fetch(
      `${baseurl}/getAllDepositByUserName?user_name=${this.tg_info?.username}&type_account=${type_account}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    if (type_account == "standart") {
      this.standart_deposits = result;
    } else {
      this.master_deposits = result;
    }
    console.log("deposits", result);
  };
}

export default GlobalVarsStore;
