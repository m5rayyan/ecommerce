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
      <NavIcon Src={profileSvg} IconName="Profile" />
      <NavIcon Src={messages} IconName="messages" />
      <NavIcon Src={orders} IconName="orders" />
      <NavIcon Src={cart} IconName="cart" />
    </NavIconsBoxStyled>
  );
}

export default NavIconsBox;
