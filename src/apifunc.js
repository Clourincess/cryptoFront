const baseUrl = "https://osiriscrypto.su:8008";
export const register = async (values) => {
  const response = await fetch(baseUrl + "/register", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  return response.status;
};

export const getStandart = async (username) => {
  const response = await fetch(
    baseUrl + `/getAccountStandart?userName=${username}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
};

export const getStats = async (username, isMaster = false) => {
  const response = await fetch(
    baseUrl +
      `getReportAccount?type_account=${
        isMaster ? "master" : "standart"
      }&user_name=${username}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
};
