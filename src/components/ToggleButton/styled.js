import styled from "styled-components";

export const ToggleButtonDiv = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    background-color: #2a2134;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    position: relative;
    height: 26px;
    width: 50px;
    transform: scale(1.5);
  }

  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }

  .fa-moon {
    color: #f1c40f;
  }

  .fa-sun {
    color: #f39c12;
  }
`;
