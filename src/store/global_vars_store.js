import { makeAutoObservable } from "mobx";
const baseurl = "https://ossctgapp.com:8008";

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
  all_tariffs = [];
  all_referals = [];

  created_standart_deposit_id = null;
  created_master_deposit_id = null;

  tarrif_id = "";

  selected_deposit = {};

  constructor() {
    makeAutoObservable(this);
  }

  updateSelectedDeposit = (new_deposit) => {
    this.selected_deposit = new_deposit;
  };

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
      //
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
        sum: Number(this.deposit_amount),
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
        sum: Number(this.deposit_amount),
        deposit_date: new Date().toISOString().split("T")[0],
        account_id: this.master_balance?.id,
        verification: false,
        account_number: this.vallet_amount.toString(),
        type_of_network: "trc20",
        tariff_id: this.tarrif_id,
        result_balance: 0,
        completion_date: 0,
      }),
    });
    const result = await response.json();

    this.created_master_deposit_id = result;
    return response.ok;
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

  updateTarrifId = (new_tarrif_id) => {
    this.tarrif_id = new_tarrif_id;
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

  getallTarrif = async () => {
    const response = await fetch(`${baseurl}/getAllTariffs`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const result = await response.json();
    this.all_tariffs = result;
    console.log("tariffs", result);
  };

  updateTariff = async (name, coef, period) => {
    const response = await fetch(`${baseurl}/updateTariff`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        name: name,
        coefficient: coef,
        mounth_period: period,
      }),
    });
    console.log("update tariff", response.ok);
    return response.ok;
  };

  createWithdravalStandart = async () => {
    const response = await fetch(`${baseurl}/createWithdravalStandart`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        sum: Number(this.deposit_amount),
        withdrawal_date: new Date().toISOString().split("T")[0],
        //
        account_id: this.standart_balance?.id,
        verification: false,
        account_number: this.vallet_amount.toString(),
        type_of_network: "trc20",
      }),
    });
    console.log("withdrawal standart", response);
    return response.ok;
  };

  createWithdravalMaster = async () => {
    const response = await fetch(`${baseurl}/createWithdravalMaster`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        sum: this.master_balance?.balance,
        withdrawal_date: new Date().toISOString().split("T")[0],
        account_id: this.master_balance?.id,
        verification: false,
        account_number: this.vallet_amount.toString(),
        deposit_id: this.selected_deposit?.id,
        type_of_network: "trc20",
      }),
    });
    console.log("withdrawal master", response);
    return response.ok;
  };

  getAllReferralProgram = async () => {
    const response = await fetch(`${baseurl}/getAllReferalProgramms`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const result = await response.json();
    this.all_referals = result;
  };

  createWithdrawReferal = async () => {
    const response = await fetch(`${baseurl}/createWithdravalReferal`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        app_user_id: this.tg_info?.id,
        count_bonuses: Number(this.deposit_amount),
        verification: false,
        account_number: this.vallet_amount.toString(),
        type_of_network: "trc20",
      }),
    });
    return response.ok;
  };
}

export default GlobalVarsStore;
