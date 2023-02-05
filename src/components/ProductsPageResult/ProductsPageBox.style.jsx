import styled from "styled-components";

export const StyledStoreProductBox = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  height: 405px;
`;
export const StyledProductsPageResult = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: fit-content;
`;

export const StyledImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  width: 230px;
  margin: auto;
`;
export const StyledProductImg = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

export const StyledPricesBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 7px;
  margin-bottom: 6px;
`;
export const StyledProductStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 12px;
`;

export const StyledPrice = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const StyledOldPrice = styled.del`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
`;
export const StyledStarsBox = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledRating = styled.p`
  line-height: 19px;
  color: #ff9017;
  margin-left: 6px;
`;
export const StyledAboutProduct = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
  max-width: 607px;
  margin-bottom: 10px;
`;

export const StyledStoreProductInfoBox = styled.div`
  position: relative;
  padding: 18px 20px;
  border-top: 1px solid #eff2f4;
  h3 {
    margin-bottom: 16px;
  }
`;
export const StyledAddToCartIconBox = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  width: 40px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 22px;
  right: 20px;
`;
