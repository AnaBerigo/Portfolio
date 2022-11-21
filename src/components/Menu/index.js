import React from "react";
// import React, { useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import * as Icon from "react-icons/md";
// import { Sidebar } from "./sidebar";
// import { MenuDiv } from "./styled";
// import bgMenu from "../../assets/images/bgMenu.png";

export default function Menu() {
  // const [sidebar, setSidebar] = useState(false);
  // let navigate = useNavigate();
  // const { pathname } = useLocation();

  // const showSidebar = () => {
  //   document.body.style.overflow = "hidden";
  //   setSidebar(true);
  // };
  // const closeSidebar = () => {
  //   document.body.style.overflow = "auto";
  //   setSidebar(false);
  // };
  return (
    <div />
    // <MenuDiv>
    //   <div className="navbar">
    //     <Link to="#" className="menu-bars">
    //       <Icon.MdMenu onClick={showSidebar} />
    //     </Link>
    //     {pathname !== "/" && (
    //       <Icon.MdArrowBackIosNew
    //         className="buttonBack"
    //         onClick={() => {
    //           // localStorage.setItem("PathName", pathname);
    //           if (
    //             pathname === "/linha" ||
    //             pathname === "/endereco" ||
    //             pathname === "/viagens"
    //           ) {
    //             localStorage.removeItem("BuslineShiftID");
    //           }
    //           if (pathname !== "/endereco") {
    //             localStorage.removeItem("address");
    //             localStorage.removeItem("addressList");
    //           }

    //           navigate(-1);
    //         }}
    //       />
    //     )}
    //   </div>
    //   <div
    //     className={sidebar ? "overflow active " : "overflow"}
    //     onClick={closeSidebar}
    //   ></div>
    //   <nav className={sidebar ? "nav-menu active " : "nav-menu"}>
    //     <ul className="nav-menu-items">
    //       {Sidebar.map((item, index) => {
    //         return (
    //           <li
    //             key={index}
    //             className={
    //               pathname === item.path ? `${item.cName} active` : item.cName
    //             }
    //           >
    //             <Link
    //               to={item.path}
    //               onClick={() => {
    //                 if (pathname === "/linha" || pathname === "/endereco") {
    //                   localStorage.removeItem("BuslineShiftID");
    //                 }
    //                 if (pathname === "/viagens")
    //                   localStorage.removeItem("LinhaID");
    //                 if (pathname !== "/endereco") {
    //                   localStorage.removeItem("address");
    //                   localStorage.removeItem("addressList");
    //                 }

    //                 closeSidebar();
    //               }}
    //             >
    //               {item.icon}
    //               <span>{item.title}</span>
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //     <img className="imageBG" alt="bgMenu" src={bgMenu} />
    //   </nav>
    // </MenuDiv>
  );
}
