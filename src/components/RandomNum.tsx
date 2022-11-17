import React from "react";

// Get number in range of 200
const RandomNum = () => {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  const randomNum: number = getRandomInt(200) + 1;
  return randomNum;
};

export default RandomNum;
