import styled from "styled-components";

export const StyledMyCart = styled.section`
  margin-top: 27px;
  margin-bottom: 26px;
`;

export const StyledMyCartContent = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px;
`;

export const StyledMyCartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 20px;
`;
export const StyledProductInCart = styled.div`
  display: grid;
  padding: 20px 0;
  grid-template-columns: 80px 1fr 123px;
  gap: 10px;
  border-bottom: 1px solid #e3e8ee;
`;
export const StyledProductInCartImgBox = styled.div`
  width: 80px;
  height: 80px;
  background: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const StyledProductInCatDescription = styled.div`
  padding-top: 4px;
  h3 {
    margin-bottom: 8px;
  }
`;

export const StyledProductInCatInfo = styled.div`
  display: flex;
  color: #8b96a5;
  gap: 4px;
  margin-bottom: 3px;
`;
export const StyledCartButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  height: 30px;
  padding: 5px 12px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  color: ${(props) => props.variant};
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  cursor: pointer;
`;
export const StyledPriceInCart = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
  margin-bottom: 12px;
  text-align: end;
`;
export const StyledSelect = styled.select`
  filter: drop-shadow(0px 1px 2px rgba(56, 56, 56, 0.08));
  width: 100%;
  height: 40px;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
`;
export const StyledOption = styled.option`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  cursor: pointer;
`;

export const StyledMyCartCheckOut = styled.div`
  display: grid;
  gap: 12px;
  height: fit-content;
`;
export const StyledCouponBox = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 16px;
  height: fit-content;
`;
export const StyledCouponText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 9px;
  color: ${(props) => (props.variant ? props.variant : "#505050")};
`;
export const StyledTotal = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
`;
export const StyledTotalPrice = styled(StyledTotal)`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
`;

export const StyledCouponInputBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 85px;
  height: 40px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  overflow: hidden;
`;
export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  &::placeholder {
    color: #8b96a5;
  }
`;
export const CouponButton = styled.button`
  background: transparent;
  border: none;
  border-left: 1px solid #e3e8ee;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #0d6efd;
  cursor: pointer;
`;
export const StyledCheckoutButton = styled.button`
  width: 100%;
  height: 54px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  background: #00b517;
  border: none;

  padding: 5px;
  margin-top: 22px;
  cursor: pointer;
`;
export const StyledCheckOutBox = styled(StyledCouponBox)`
  box-shadow: 0px 4px 10px rgba(56, 56, 56, 0.1);
`;

export const StyledPricesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  &:last-of-type {
    border-top: 1px solid #e3e8ee;
    padding-top: 17px;
  }
`;
export const StyledPaymentsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
  img {
    width: 38px;
    height: 22px;
    object-fit: contain;
  }
`;
export const StyledCartTail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 20px;
  button {
    height: 40px;
  }
`;
export const StyledBackToShop = styled.a`
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  padding: 9px;
`;
