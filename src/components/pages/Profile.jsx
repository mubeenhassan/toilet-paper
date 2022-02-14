import * as React from "react";
import { useEffect, useState } from "react"

import pilzschafLogo from "../../assets/images/pilzschaf_channel_button.png";
import profileBatch from "../../assets/images/profile_dev_batch.png";
import frame from "../../assets/images/general_frame_background.png";
import english from "../../assets/images/english.png";
import flyCele from "../../assets/images/flying_toiletpaper_celebration.png";
import tCrystal from "../../assets/images/toiletpaper_crystal_pink.png";
import { useNavigate } from "react-router-dom"

import "../../assets/css/profile.css"
const ACHIEVEMENTS = [
  {
    name: "1 Jahr",
    no: "1",
  },
  {
    name: "2 Jahre",
    no: "2",
  },
  {
    name: "3 Jahre",
    no: "3",
  },
  {
    // name: "3 Jahre",
    // no: "3",
  },
  {
    // name: "3 Jahre",
    // no: "3",
  },
  {
    // name: "3 Jahre",
    // no: "3",
  },
];
const LEGENDARYSKINS = [
  {
    name: "1 Jahr",
    no: "1",
  },
  {
    name: "2 Jahre",
    no: "2",
  },
  {
    name: "3 Jahre",
    no: "3",
  },
];
export default function Profile(isAuth) {
  const navigate = useNavigate()
  useEffect(() => {
    if(!(isAuth === null)){
       navigate("/login")}
    console.log("is pro", isAuth === null)
  })

  return (
    <div
      className="profile-container"
    >
     
      <div
        className="main-container"
        style={{ backgroundImage: `url(${frame})` }}
      >
        <div className="logo-flag">
          <img className="pilz-logo" src={pilzschafLogo} />
          <div className="plz-heading">
            <h1>Pilzschaf</h1>
            <img src={profileBatch} />
          </div>
          <img className="english" src={english} />
        </div>
        <div className="statistics-section">
          <h2>Statistics:</h2>
          <div className="statistics-list">
            <p>Account created: 28 December 2021| 5pm</p>
            <p>Highest paper amount: 58,2 Tri</p>
            <p>Current paper amount: 38,5 K</p>
            <p>Paper per click: 15 Mio</p>
            <p>Mio Paper per second: 36 Mio</p>
          </div>
        </div>
        <div className="achievements-section">
          <h2>Achievements:</h2>
          {ACHIEVEMENTS.map((item, key) => (
            <div key={key} className="achieve-box">
              <div className="img-contain">
                <img src={flyCele} />

                <span>{item.no}</span>
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="achievements-section">
          <h2>Legendary Skins:</h2>
          {LEGENDARYSKINS.map((item, key) => (
            <div key={key} className="skin-box">
              <div className="img-contain">
                <img src={tCrystal} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
