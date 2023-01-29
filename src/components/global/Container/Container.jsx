import React from "react";
import styled from "styled-components";

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;

const StyledContainer = styled.div`
  margin: auto;
  @media (min-width: 576px) {
    width: 100%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 540px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 720px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 960;
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1320px;
  }
`;
