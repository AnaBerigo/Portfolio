import styled from "styled-components";

export const MenuDiv = styled.header`
  /* display: flex; */
  /* position: fixed; */
  z-index: 2 !important;
  .navbar {
    z-index: 2 !important;
    padding: 10px 10px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .menu-bars {
    z-index: 2 !important;
    font-size: 2rem;
    background: none;
    color: #213f9a;
  }
  .buttonBack {
    z-index: 2 !important;
    font-size: 2rem;
    padding: 5px;
    color: #213f9a;
    border: 2px solid #213f9a;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background: #213f9a;
      color: #ffffff;
      border: 2px solid #ffffff;
    }
  }
  .overflow {
    z-index: 2 !important;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000000;
    opacity: 0.5;
    display: none;
    top: 0;
  }
  .overflow.active {
    z-index: 2 !important;
    display: block;
  }
  .nav-menu {
    z-index: 2 !important;
    padding-top: 50px;
    background-color: white;
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }
  .nav-menu.active {
    z-index: 2 !important;
    left: 0;
    transition: 350ms;
  }
  .nav-text {
    z-index: 2 !important;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }
  .nav-text.active a {
    z-index: 2 !important;
    border-bottom: 3px solid #72c546;
  }
  .nav-text a {
    z-index: 2 !important;
    text-decoration: none;
    color: #213f9a;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
  }
  .nav-text a:hover {
    z-index: 2 !important;
    border-bottom: 3px solid #72c546;
  }
  .nav-menu-items {
    z-index: 2 !important;
    width: 100%;
  }
  span {
    z-index: 2 !important;
    margin-left: 16px;
  }
  .imageBG {
    width: 190px;
  }
  /* @media screen and (max-width: 480px) {
    .imageBG {
      width: 200px;
    } */
  /* } */
`;
