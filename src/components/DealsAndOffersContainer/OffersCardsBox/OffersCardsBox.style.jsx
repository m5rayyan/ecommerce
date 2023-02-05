import styled from "styled-components";

export const OffersCardsBoxStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const OfferedProductImg = styled.img`
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 20px;
  transition: all 0.3s;
`;

export const OfferCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #e0e0e0;
  padding: 17px 0;
  &:hover ${OfferedProductImg} {
    transform: scale(1.05);
  }
`;
export const StyledOfferedProductImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
`;

export const OfferAmount = styled.p`
  color: #eb001b;
  font-weight: 500;
  font-size: 14px;
  background: #ffe3e3;
  border-radius: 29px;
  padding: 3px 13px 4px;
  margin-top: 7px;
`;
