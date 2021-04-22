import axios from "axios";

const LOGIN_URL = "http://localhost:8086/logIn";
const REGISTER_URL = "http://localhost:8086/signUp";
class AuthService {
  login(loginData) {
    return axios.post(LOGIN_URL, loginData).then(({ data }) => {
      if (data.jwt) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(registerData) {
    return axios.post(REGISTER_URL, registerData);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();