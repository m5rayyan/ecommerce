import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function NavIcon(props) {
  return (
    <Link to={props.test}>
      <NavIconStyled>
        <img src={props.Src} alt={props.IconName} />
        <p>{props.IconName}</p>
      </NavIconStyled>
    </Link>
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
