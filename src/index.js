import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

const date = new Date(2022, 1, 1, 11);
const currentTime = date.getHours();
const customStyle = {
  color: ""
};

let greet;
if (currentTime < 12) {
  (greet = "Good Morning"), (customStyle.color = "red");
} else if (currentTime < 18) {
  (greet = "Good Afternoon"), (customStyle.color = "green");
} else {
  (greet = "Good Night"), (customStyle.color = "blue");
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greet}
  </h1>,
  document.getElementById("root")
);
