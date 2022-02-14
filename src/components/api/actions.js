import axios from "axios"
import qs from "qs"
import "react-toastify/dist/ReactToastify.css"

const baseURL = "https://toiletpapertycoon.com:8080/"

export const LoginAPI = async (username, password) => {
  let datas = {
    username: username,
    password: password,
  }
  let options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(datas),
    baseURL,
  }
  axios(`${baseURL}login`, options)
    .then((res) => {
      console.log("yeh we have", res.data.data.tokens.accessToken)
      localStorage.setItem('accessToken', res.data.data.tokens.accessToken);
    })
    .catch((er) => {
      console.log("no data sorry ", er)
    })
}
