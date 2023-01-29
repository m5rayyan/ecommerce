import React from "react";
import HeaderLinksBox from "../HeaderLinksBox/HeaderLinksBox";
import MinHeaderLinksBox from "../MinHeaderLinksBox/MinHeaderLinksBox";
import styled from "styled-components";
import Container from "../global/Container/Container";

function SecondNav() {
  return (
    <SecondSecondNave>
      <Container>
        <SecondNavContentStyled>
          <HeaderLinksBox />
          <MinHeaderLinksBox />
        </SecondNavContentStyled>
      </Container>
    </SecondSecondNave>
  );
}

export default SecondNav;

const SecondSecondNave = styled.div`
  padding: 17px 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`;
const SecondNavContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
