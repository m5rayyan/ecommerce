import React from "react";
import {
  DealsAndOffersBoxStyled,
  DealsAndOffersBoxTitle,
  DealsAndOffersBoxSubTitle,
} from "./DealsAndOffersBox.style";
import Timer from "./Timer";

function DealsAndOffersBox() {
  return (
    <DealsAndOffersBoxStyled>
      <DealsAndOffersBoxTitle>Deals and offers</DealsAndOffersBoxTitle>
      <DealsAndOffersBoxSubTitle>Hygiene equipments</DealsAndOffersBoxSubTitle>
      <Timer />
    </DealsAndOffersBoxStyled>
  );
}

export default DealsAndOffersBox;
