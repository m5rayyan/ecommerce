import React from "react";
import styled from "styled-components";

function NavIcon(props) {
  return (
    <NavIconStyled>
      <img src={props.Src} alt={props.IconName} />
      <p>{props.IconName}</p>
    </NavIconStyled>
  );
}

export default NavIcon;

const NavIconStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #8b96a5;
  font-weight: 400;
  font-size: 12px;
`;
