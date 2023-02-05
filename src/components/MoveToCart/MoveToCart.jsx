import React from "react";
import styled from "styled-components";

import moveToCart from "../../assets/Images/Icons/moveToCart.svg";
function MoveToCart() {
  return (
    <StyledMoveToCart>
      <img src={moveToCart} alt="Move to cart" />
      Move to cart
    </StyledMoveToCart>
  );
}

export default MoveToCart;

const StyledMoveToCart = styled.button`
  height: 40px;
  width: 156.58px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0d6efd;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  cursor: pointer;
`;
