import CONFIG from "../config";

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}users`,
  LOGIN: `${CONFIG.BASE_URL}login`,
  PREDICT: `${CONFIG.BASE_URL_PREDICT}`,
};

class DepPredictAPI {
  static async register({ name, email, password }) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (response.status >= 400) {
      throw new Error(
        responseJson.message || "Terjadi kesalahan saat mendaftar."
      );
    }

    return responseJson;
  }

  static async login({ email, password }) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (response.status >= 400) {
      throw new Error(responseJson.message || "Terjadi kesalahan saat login.");
    }

    return responseJson;
  }

  static async getPrediction({ features }) {
    const response = await fetch(API_ENDPOINT.PREDICT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ features }),
    });

    const responseJson = await response.json();

    if (response.status >= 400) {
      throw new Error(
        responseJson.message || "Terjadi kesalahan saat mendapatkan prediksi."
      );
    }

    return responseJson;
  }
}

export default DepPredictAPI;
