import React from "react";
import {
  StyledServiceCard,
  StyledServiceImg,
  StyledServiceImgBox,
  StyledServiceIconBox,
  StyledServiceInfoBox,
} from "./OurExtraServicesSection.style";
import { StyledBoldProductName } from "../global/ProductName/ProductName.style";

function ServiceCard(props) {
  const { href, serviceImg, serviceIcon, serviceName } = props;
  return (
    <StyledServiceCard href={href}>
      <StyledServiceImgBox>
        <StyledServiceImg
          src={serviceImg}
          alt={serviceName}
          className="service-img"
        />
      </StyledServiceImgBox>
      <StyledServiceInfoBox>
        <StyledServiceIconBox>
          <img src={serviceIcon} alt={serviceIcon} className="ServiceIcon" />
        </StyledServiceIconBox>
        <StyledBoldProductName>{serviceName}</StyledBoldProductName>
      </StyledServiceInfoBox>
    </StyledServiceCard>
  );
}

export default ServiceCard;
