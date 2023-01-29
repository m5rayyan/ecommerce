import React from "react";
import { StyledUserAndBenefitsColumn } from "./BannerSection.style";
import BenefitsCard from "./BenefitsCard";
import UserCard from "./UserCard";

function UserAndBenefitsColumn() {
  return (
    <StyledUserAndBenefitsColumn>
      <UserCard />
      <BenefitsCard
        href="#"
        benefitsText="Get US $10 off with a new supplier"
      />
      <BenefitsCard
        href="#"
        BgColor="#55BDC4"
        benefitsText="Send quotes with supplier preferences"
      />
    </StyledUserAndBenefitsColumn>
  );
}

export default UserAndBenefitsColumn;
