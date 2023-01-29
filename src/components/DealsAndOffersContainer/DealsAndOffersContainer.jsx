import React from "react";
import Container from "../global/Container/Container";
import DealsAndOffersBox from "./DealsAndOffersBox/DealsAndOffersBox";
import { DealsAndOffersContainerStyled } from "./DealsAndOffersContainer.style";
import OffersCardsBox from "./OffersCardsBox/OffersCardsBox";

function DealsAndOffersContainer() {
  return (
    <section className="deals-and-offers-container">
      <Container>
        <DealsAndOffersContainerStyled>
          <DealsAndOffersBox />
          <OffersCardsBox />
        </DealsAndOffersContainerStyled>
      </Container>
    </section>
  );
}

export default DealsAndOffersContainer;
