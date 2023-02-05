import React from "react";
import {
  StyledMyCartCheckOut,
  StyledCouponBox,
  StyledCouponText,
  StyledCouponInputBox,
  StyledInput,
  CouponButton,
  StyledCheckOutBox,
  StyledPricesRow,
  StyledTotal,
  StyledTotalPrice,
  StyledCheckoutButton,
  StyledPaymentsBox,
} from "./MyCart.style";

import payment1 from "../../assets/Images/payment1.png";
import payment2 from "../../assets/Images/payment2.png";
import payment3 from "../../assets/Images/payment3.png";
import payment4 from "../../assets/Images/payment4.png";
import payment5 from "../../assets/Images/payment5.png";

function MyCartCheckOut() {
  return (
    <StyledMyCartCheckOut>
      <StyledCouponBox>
        <StyledCouponText>Have a coupon?</StyledCouponText>
        <StyledCouponInputBox>
          <StyledInput type="text" placeholder="Add coupon" />
          <CouponButton type="button">Apply</CouponButton>
        </StyledCouponInputBox>
      </StyledCouponBox>

      <StyledCheckOutBox>
        <StyledPricesRow>
          <StyledCouponText>Subtotal:</StyledCouponText>
          <StyledCouponText>$1403.97</StyledCouponText>
        </StyledPricesRow>

        <StyledPricesRow>
          <StyledCouponText>Discount:</StyledCouponText>
          <StyledCouponText variant="#FA3434">- $60.00</StyledCouponText>
        </StyledPricesRow>

        <StyledPricesRow>
          <StyledCouponText>Tax:</StyledCouponText>
          <StyledCouponText variant="#00B517">+ $14.00</StyledCouponText>
        </StyledPricesRow>

        <StyledPricesRow>
          <StyledTotal>Total:</StyledTotal>
          <StyledTotalPrice>$1357.97</StyledTotalPrice>
        </StyledPricesRow>
        <StyledCheckoutButton>Checkout</StyledCheckoutButton>
        <StyledPaymentsBox>
          <img src={payment1} alt="American Express" />
          <img src={payment2} alt="Master Card" />
          <img src={payment3} alt="PayPal" />
          <img src={payment4} alt="Visa" />
          <img src={payment5} alt="Apple Pay" />
        </StyledPaymentsBox>
      </StyledCheckOutBox>
    </StyledMyCartCheckOut>
  );
}

export default MyCartCheckOut;
