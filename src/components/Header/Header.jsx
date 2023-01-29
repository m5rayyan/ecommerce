import React from "react";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <FirstNav />
      <SecondNav />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  background-color: #fff;
`;
