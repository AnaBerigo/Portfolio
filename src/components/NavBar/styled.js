import styled from "styled-components";

export const NavBarDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10%;
  margin: 1% 2%;
  border-radius: 20px;
  background-color: #0f1120;
  flex-direction: row-reverse;
  li,
  a {
    color: #c0c0c5;
  }

  .nav_links {
    list-style: none;
  }
  .nav_links li {
    padding: 0px 20px;
    display: inline-block;
  }
  .nav_links li a {
    transition: all 0.3s ease 0s;
  }
  .nav_links li a:hover {
    color: #452e81;
  }
`;
