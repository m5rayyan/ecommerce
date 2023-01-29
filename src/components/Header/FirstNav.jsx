import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo/Logo.style";
import NavIconsBox from "../NavIconsBox/NavIconsBox";
import SearchBox from "../SearchBox/SearchBox";
import logo from "./../../assets/Images/Logo.png";
import Container from "../global/Container/Container";

function FirstNav() {
  return (
    <div className="first-nav">
      <Container>
        <FirstNavContentStyled>
          <Logo src={logo} />
          <SearchBox />
          <NavIconsBox />
        </FirstNavContentStyled>
      </Container>
    </div>
  );
}

export default FirstNav;

const FirstNavContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 0;
`;
