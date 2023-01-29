import React from "react";
import { StyledBenefitsCard, StyledBenefitsLink } from "./BannerSection.style";

function BenefitsCard(props) {
  return (
    <StyledBenefitsCard BgColor={props.BgColor}>
      <StyledBenefitsLink href={props.href}>
        {props.benefitsText}
      </StyledBenefitsLink>
    </StyledBenefitsCard>
  );
}

export default BenefitsCard;
