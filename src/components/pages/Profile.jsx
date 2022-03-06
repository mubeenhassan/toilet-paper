import * as React from "react";
import { useEffect, useState } from "react"

import pilzschafLogo from "../../assets/images/pilzschaf_channel_button.png";
import profileBatch from "../../assets/images/profile_dev_batch.png";
import frame from "../../assets/images/general_frame_background.png";
import english from "../../assets/images/english.png";
import flyCele from "../../assets/images/flying_toiletpaper_celebration.png";
import tCrystal from "../../assets/images/toiletpaper_crystal_pink.png";

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
export default function Profile(props) {
  const [items, setItems] = useState([])

  useEffect(() => {
    if(props.isAuth === null){
      window.location.replace("/login")
    }
    if(props.isAuth !== null){
    fetch(
      "https://toiletpapertycoon.com:8080/user/getUserByName?username=Moldiy"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.data.user)
        },
        (error) => {
          console.log(error)
        }
      )
  }}, [])
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
            <p>Account created: {items.userCreated}</p>
            <p>Highest paper amount:{items.highestPaperAmount} Tri</p>
            <p>Current paper amount: {items.currentPaperAmount} K</p>
            <p>Paper per click: {items.paperPerClick} Mio</p>
            <p>Mio Paper per second: {items.paperPerSecond} Mio</p>
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
