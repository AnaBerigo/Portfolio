import React from "react";
import * as Icon from "react-icons/md";

export const Sidebar = [
  {
    title: "Mapa",
    path: "/",
    icon: <Icon.MdMap />,
    cName: "nav-text",
  },
  {
    title: "Linhas",
    path: "/linha",
    icon: <Icon.MdDepartureBoard />,
    cName: "nav-text",
  },
  {
    title: "Endereço",
    path: "/endereco",
    icon: <Icon.MdRoom />,
    cName: "nav-text",
  },
];
