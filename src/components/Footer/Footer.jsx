import React from "react";
import Container from "../global/Container/Container";
import { StyledGrayProductName } from "../global/ProductName/ProductName.style";
import { StyledFooter, StyledFooterContent } from "./Footer.style";
import FooterColumn from "./FooterColumn";
import FooterLogoColumn from "./FooterLogoColumn";

// Import Images
import AppStore from "../../assets/Images/AppStore.png";
import GooglePlay from "../../assets/Images/GooglePlay.png";
import CopyRightFooter from "./CopyRightFooter";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContent>
          <FooterLogoColumn />

          <FooterColumn columnName="About">
            <StyledGrayProductName>About Us</StyledGrayProductName>
            <StyledGrayProductName>Find store</StyledGrayProductName>
            <StyledGrayProductName>Categories</StyledGrayProductName>
            <StyledGrayProductName>Blogs</StyledGrayProductName>
          </FooterColumn>

          <FooterColumn columnName="Partnership">
            <StyledGrayProductName>About Us</StyledGrayProductName>
            <StyledGrayProductName>Find store</StyledGrayProductName>
            <StyledGrayProductName>Categories</StyledGrayProductName>
            <StyledGrayProductName>Blogs</StyledGrayProductName>
          </FooterColumn>

          <FooterColumn columnName="Information">
            <StyledGrayProductName>Help Center</StyledGrayProductName>
            <StyledGrayProductName>Money Refund</StyledGrayProductName>
            <StyledGrayProductName>Shipping</StyledGrayProductName>
            <StyledGrayProductName>Contact us</StyledGrayProductName>
          </FooterColumn>

          <FooterColumn columnName="For users">
            <StyledGrayProductName>Login</StyledGrayProductName>
            <StyledGrayProductName>Register</StyledGrayProductName>
            <StyledGrayProductName>Settings</StyledGrayProductName>
            <StyledGrayProductName>My Orders</StyledGrayProductName>
          </FooterColumn>

          <FooterColumn columnName="Get app">
            <img src={AppStore} alt="AppStore" />
            <img src={GooglePlay} alt="GooglePlay" />
          </FooterColumn>
        </StyledFooterContent>
      </Container>
      <CopyRightFooter />
    </StyledFooter>
  );
}

export default Footer;
