import styled from "styled-components";

export const StyledDiscountPanel = styled.section`
  margin: 20px 0 88px;
`;
export const StyledDiscountTextBox = styled.div`
  background: #237cff;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  h2 {
    color: #ffff;
    margin: 0;
  }
`;
export const StyledDiscountPanelContent = styled.div`
  height: 120px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background: #237cff;
  border-radius: 8px;
  overflow: hidden;
`;
export const StyledPanelLinkBox = styled.div`
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 5% 100%);
  background: #005ade;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 32px;
`;
export const StyledPanelExtraText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  opacity: 0.7;
`;
