import React from "react";
import LangAndCoin from "./LangAndCoin";
import ShipTo from "./ShipTo";

import { MinHeaderLinksBoxStyled } from "./MinHeaderLinksBox.Styled";
function MinHeaderLinksBox() {
  return (
    <MinHeaderLinksBoxStyled>
      <LangAndCoin />
      <ShipTo />
    </MinHeaderLinksBoxStyled>
  );
}

export default MinHeaderLinksBox;
