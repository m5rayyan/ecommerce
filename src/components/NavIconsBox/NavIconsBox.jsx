import React from "react";
import NavIcon from "./NavIcon";
import profileSvg from "./../../assets/Images/Icons/profile.svg";
import messages from "./../../assets/Images/Icons/messages.svg";
import cart from "./../../assets/Images/Icons/cart.svg";
import orders from "./../../assets/Images/Icons/orders.svg";
import { NavIconsBoxStyled } from "./NavIconsBox.style";
function NavIconsBox() {
  return (
    <NavIconsBoxStyled>
      <NavIcon test="/cartPage" Src={profileSvg} IconName="Profile" />
      <NavIcon test="/cartPage" Src={messages} IconName="messages" />
      <NavIcon test="/cartPage" Src={orders} IconName="orders" />
      <NavIcon test="/cartPage" Src={cart} IconName="cart" />
    </NavIconsBoxStyled>
  );
}

export default NavIconsBox;
