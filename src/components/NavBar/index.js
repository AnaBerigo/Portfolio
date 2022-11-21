import React from "react";
import { NavBarDiv } from "./styled";

const NavBar = () => {
  return (
    <NavBarDiv>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Sobre mim</a>
          </li>
          <li>
            <a href="/#">Portfólio</a>
          </li>
          <li>
            <a href="/#">Skills</a>
          </li>
          <li>
            <a href="/#">Carreira</a>
          </li>
          <li>
            <a href="/#">Contato</a>
          </li>
        </ul>
      </nav>
    </NavBarDiv>
  );
};
export default NavBar;
