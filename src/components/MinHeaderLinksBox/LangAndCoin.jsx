import React from "react";
import dropDown from "../../assets/Images/Icons/dropDown.svg";
import { DropDownImg, LangAndCoinStyled } from "./MinHeaderLinksBox.Styled";

function LangAndCoin() {
  return (
    <LangAndCoinStyled>
      <p className="lang">English</p>,<p className="coin">USD</p>
      <DropDownImg src={dropDown} />
    </LangAndCoinStyled>
  );
}

export default LangAndCoin;
