import axios from "axios"
import qs from "qs"

//const baseURL = "https://toiletpapertycoon.com:8080/"
const baseURL = "http://localhost:8080/"

export const LoginAPI = async (username, password) => {
  let options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: "username=" + username + "&password=" + password,
    baseURL,
  }
  console.log(options.data)
  axios(`${baseURL}login`, options)
    .then((res) => {
      console.log("yeh we have", res.data.data.tokens.accessToken)
      localStorage.setItem("accessToken", res.data.data.tokens.accessToken)
      window.location.replace("/profile")
    })
    .catch((er) => {
      console.log("no data sorry ", er)
    })
}

export const RegisterAPI = async (username, email, password, callBack) => {
   
  const registerForm = []
  registerForm.push(username)
  registerForm.push(email)
  registerForm.push(password)
  let options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(registerForm),
  }

  fetch(`${baseURL}register`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(registerForm),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then(async (data) => {
        callBack(data)

    })
}
