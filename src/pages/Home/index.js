/* eslint-disable jsx-a11y/alt-text */
// import React, { useState, useEffect } from "react";
import { HomeDiv } from "./styled";
import ToggleButton from "../../components/ToggleButton";
import NavBar from "../../components/NavBar";
import imagemD from "../../assets/images/AvatarAndIconsDark.png";
// import imagemA from "../../assets/images/ana.png";
// import * as IconMD from "react-icons/md";
import * as IconAI from "react-icons/ai";

const Home = () => {
  return (
    <HomeDiv>
      <NavBar />
      <div className="toggleB">
        <ToggleButton />
      </div>
      <div>
        <div>
          <span className="saudacao">Saudação</span>
          <h1>Ana Paula Berigo e Silva</h1>
          <p>Front-end developer</p>
          <IconAI.AiFillLinkedin />
          <IconAI.AiFillGithub />
        </div>
        <div>
          <img src={imagemD} alt="AnaDesenho" className="imgDesenho" />
        </div>
        <div className="baixarCv">
          <div>
            <span>
              Baixar CV <IconAI.AiOutlineDownload />
            </span>
          </div>
          <div>
            <span>
              <IconAI.AiOutlineWhatsApp /> Vamos conversar
            </span>
          </div>
        </div>
      </div>

      {/* <img src={imagemA} alt="AnaFoto" className="imgFoto" /> */}
    </HomeDiv>
  );
};

export default Home;
