import axios from "axios";
import { useState } from "react";
import qs from "qs";   

const baseURL = "https://toiletpapertycoon.com:8080/paperAmountSurvey/ranking?limit=100";

export const LoginAPI=async(data)=>{
  let datas = {
    username: "TestTest",
    password: "1234qwer"
  };
  let options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(datas),
    baseURL
  };
  axios(options)
    .then(res => {
      console.log("yeh we have", res.data);
    })
    .catch(er => {
      console.log("no data sorry ", er);
    });
}

