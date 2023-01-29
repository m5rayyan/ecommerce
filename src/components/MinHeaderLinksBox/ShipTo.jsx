import React from "react";
import flag from "../../assets/Images/flag.png";
import dropDown from "../../assets/Images/Icons/dropDown.svg";

import { DropDownImg, Flag, ShipToStyled } from "./MinHeaderLinksBox.Styled";
function ShipTo() {
  return (
    <ShipToStyled>
      <p>Ship to</p>
      <Flag src={flag} />
      <DropDownImg src={dropDown} />
    </ShipToStyled>
  );
}

export default ShipTo;
