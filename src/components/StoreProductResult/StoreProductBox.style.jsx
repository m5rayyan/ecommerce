import styled from "styled-components";

export const StyledStoreProductBox = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 12px;
  margin-bottom: 10px;
  padding: 9px;
`;
export const StyledImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
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
export const StyledDotBetween = styled.div`
  width: 6px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #e3e8ee;
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
export const StyledNumberOfOrders = styled.p`
  color: #8b96a5;
  line-height: 19px;
`;
export const StyledFreeShipping = styled(StyledNumberOfOrders)`
  color: #00b517;
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
export const StyledViewDetails = styled.div`
  a {
    font-weight: 500;
    line-height: 19px;
    color: #0d6efd;
  }
`;
export const StyledStoreProductInfoBox = styled.div`
  position: relative;
  padding-top: 14px;
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
  top: 14px;
  right: 20px;
`;
