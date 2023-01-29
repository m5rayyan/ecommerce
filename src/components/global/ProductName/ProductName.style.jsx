import styled from "styled-components";

export const StyledProductName = styled.h3`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;

export const StyledGrayProductName = styled(StyledProductName)`
  color: #8b96a5;
`;
export const StyledBoldProductName = styled(StyledProductName)`
  font-weight: 500;
`;
export const StyledExtraBoldProductName = styled(StyledProductName)`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 24px;
`;
