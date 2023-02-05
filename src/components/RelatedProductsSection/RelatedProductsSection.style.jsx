import styled from "styled-components";

export const StyledRelatedProductsSection = styled.section``;
export const StyledRelatedProductsContent = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 22px 33px;
`;
export const StyledRelatedProductsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;
export const StyledRelatedProduct = styled.a``;
export const StyledRelatedInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 14px;
`;
export const StyledRelatedImgBox = styled.div`
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
