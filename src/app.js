import "./style.css";
window.onload = function() {
  let colorMapping = {
    "&#9824;": "black",
    "&#9827;": "black",
    "&#9830;": "red",
    "&#9829;": "red"
  };
  let suite = ["&#9824;", "&#9827;", "&#9830;", "&#9829;"];
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
    "J",
    "Q",
    "K"
  ];

  let generator = () => {
    return suite[Math.floor(Math.random() * suite.length)];
  };
  let benerator = () => {
    return number[Math.floor(Math.random() * number.length)];
  };

  let topElement = document.getElementById("top");
  let bottomElement = document.getElementById("bottom");

  let randomSuite = generator();
  let randomColor = colorMapping[randomSuite];
  topElement.innerHTML = randomSuite;
  topElement.style.color = randomColor;
  bottomElement.innerHTML = randomSuite;
  bottomElement.style.color = randomColor;

  document.getElementById("middle").innerHTML = benerator();
};
