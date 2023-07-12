/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let suite = ["spade", "heart", "club", "diamond"];
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"
  ];

  let generator = () => {
    return suite[Math.floor(Math.random() * suite.length)];
  };
  let benerator = () => {
    return number[Math.floor(Math.random() * number.length)];
  };
  document.getElementsByClassName("suite").innerHTML = generator();
  document.getElementById("middle").innerHTML = benerator();
};
