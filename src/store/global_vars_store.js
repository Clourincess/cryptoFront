import { makeAutoObservable } from "mobx";
const baseurl = "https://crypto-osiris.com:8008";

class GlobalVarsStore {
  tg_info = {};
  user_info = {};
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
}

export default GlobalVarsStore;
