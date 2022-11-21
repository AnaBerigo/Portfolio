/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useEffect } from "react";
import { ToggleButtonDiv } from "./styled";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);
  const body = document.getElementById("body");
  const lRoxa = document.getElementById("lRoxa");

  useEffect(() => {
    if (toggle) {
      body.style.backgroundColor = "#090E16";
    } else {
      body.style.backgroundColor = "#fff";
    }
  }, [toggle]);

  console.log("toggle", toggle);

  return (
    <ToggleButtonDiv>
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        onClick={() => setToggle(!toggle)}
      />
      <label className="label" htmlFor="chk">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </ToggleButtonDiv>
  );
};

export default ToggleButton;
