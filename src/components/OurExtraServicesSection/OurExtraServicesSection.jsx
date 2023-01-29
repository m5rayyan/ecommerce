import React from "react";
import Container from "../global/Container/Container";
import {
  StyledOurExtraServicesSection,
  StyledOurExtraServicesContent,
} from "./OurExtraServicesSection.style";
import { StyledExtraBoldProductName } from "../global/ProductName/ProductName.style";
import ServiceCard from "./ServiceCard";

// Import Images
import IndustryImg from "../../assets/Images/IndustryImg.png";
import CustomizeYourProductsImg from "../../assets/Images/CustomizeYourProductsImg.png";
import planeImg from "../../assets/Images/plane.png";
import ProductMonitoringImg from "../../assets/Images/ProductMonitoring.png";
// Import Icons
import searchIcon from "../../assets/Images/Icons/search.svg";
import customizeProductIcon from "../../assets/Images/Icons/customizeProduct.svg";
import shippingIcon from "../../assets/Images/Icons/shipping.svg";
import MonitoringIcon from "../../assets/Images/Icons/Monitoring.svg";

function OurExtraServicesSection() {
  return (
    <StyledOurExtraServicesSection>
      <Container>
        <StyledExtraBoldProductName as="h2">
          Our extra services
        </StyledExtraBoldProductName>
        <StyledOurExtraServicesContent>
          <ServiceCard
            href="#"
            serviceImg={IndustryImg}
            serviceIcon={searchIcon}
            serviceName="Source from Industry Hubs"
          />

          <ServiceCard
            href="#"
            serviceImg={CustomizeYourProductsImg}
            serviceIcon={customizeProductIcon}
            serviceName="Customize Your Products"
          />

          <ServiceCard
            href="#"
            serviceImg={planeImg}
            serviceIcon={shippingIcon}
            serviceName="Fast, reliable shipping by ocean or air"
          />

          <ServiceCard
            href="#"
            serviceImg={ProductMonitoringImg}
            serviceIcon={MonitoringIcon}
            serviceName="Product monitoring and inspection"
          />
        </StyledOurExtraServicesContent>
      </Container>
    </StyledOurExtraServicesSection>
  );
}

export default OurExtraServicesSection;
