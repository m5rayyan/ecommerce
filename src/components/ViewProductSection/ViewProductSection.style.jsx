import styled from "styled-components";

export const StyledViewProductSection = styled.section`
  margin-bottom: 20px;
`;
export const StyledViewProductSectionContent = styled.div`
  padding: 20px 20px 44px;
  background-color: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr 280px;
  gap: 25px;
`;
export const StyledToBeViewImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 72px);
  gap: 9px;
`;
export const StyledViewedImgBox = styled.div`
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-bottom: 20px;
  img {
    max-width: 100%;
    object-fit: contain;
  }
`;
export const StyledToBeViewedImgBox = styled.div`
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    object-fit: contain;
  }
`;
export const StyledTopInfo = styled.div``;
export const StyledInStock = styled.p`
  letter-spacing: -0.2px;
  color: #00b517;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
`;
export const StyledViewedProductName = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const StyledDot = styled.div`
  width: 6px;
  height: 6px;
  background: #dbdbdb;
  border-radius: 50%;
  margin: 0 12px;
`;
export const StyledProductStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 5px;
`;
export const StyledProductRating = styled(StyledProductStatus)`
  gap: 8px;
  color: #ff9017;
`;
export const StyledRatingIcons = styled(StyledProductStatus)`
  gap: 0;
`;
export const StyledReviews = styled.div`
  display: flex;
  align-items: end;
  gap: 9px;
  color: #787a80;
`;
export const StyledSold = styled(StyledReviews)`
  align-items: baseline;
`;
export const StyledPricePerPieces = styled(StyledProductStatus)`
  background: #fff0df;
  padding: 16px;
`;
export const StyledPriceBox = styled.div`
  margin-right: 41px;
`;
export const StyledVerticalLine = styled.div`
  height: 44px;
  width: 1px;
  background-color: #bdc1c8;
  margin-right: 10px;
`;
export const StyledPrice = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 6px;
  color: #1c1c1c;
`;
export const StyledRedPrice = styled(StyledPrice)`
  color: #fa3434;
`;
export const StyledPiecesNumber = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #606060;
`;
export const StyledInfoRow = styled.div`
  display: grid;
  grid-template-columns: 115px 1fr;
  gap: 25px;
  padding: 16px 0;
`;
export const StyledInfoRowBorder = styled(StyledInfoRow)`
  border-bottom: 1px solid #e0e0e0;
`;
export const StyledInfoType = styled.p`
  color: #8b96a5;
  line-height: 19px;
`;
export const StyledInfo = styled(StyledInfoType)`
  color: #505050;
`;

// ViewProductInteractions
export const StyledViewProductInteractions = styled.div``;
export const StyledAboutSupplier = styled.div`
  padding: 16px;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  background: #ffffff;
`;
export const StyledSupplierImageAndNameBox = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 11px;
  padding-bottom: 20px;

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;
export const StyledSupplierName = styled.h2`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 24px;
  color: #1c1c1c;
`;
export const StyledSupplierInfoBox = styled.div`
  display: grid;
  gap: 8px;
  padding: 13px 0 28px;
  border-top: 1px solid #e0e0e0;
`;
export const StyledSupplierRow = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 18px;
`;
export const StyledInfoText = styled.p`
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #8b96a5;
`;
export const StyledSupplierLinksBox = styled.div`
  display: grid;
  gap: 8px;
  a {
    width: 100%;
    &:last-of-type {
      border: 1px solid #e3e8ee;
    }
  }
`;
export const StyledSaveLaterBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 23px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #0d6efd;
`;
export const StyledSaveLaterButton = styled.button.attrs({ type: "button" })`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
