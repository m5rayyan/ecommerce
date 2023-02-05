import styled from "styled-components";

export const StyledSaveForLaterSection = styled.section``;
export const StyledSaveForLaterContent = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 22px 33px;
`;
export const StyledSavedForLaterProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;
export const StyledSavedForLaterProduct = styled.a``;
export const StyledSavedForLaterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 14px;
  h3 {
    height: 38.4px;
    overflow: hidden;
  }
`;
export const StyledProductPrice = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #1c1c1c;
`;

export const StyledSavedForLaterImgBox = styled.div`
  background: #eeeeee;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  aspect-ratio: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
  }
`;
