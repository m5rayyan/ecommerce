import React from "react";

import Logo from "../Logo/Logo";
import logo from "./../../assets/Images/Logo.png";
import {
  StyledFooterLogoColumn,
  StyledInfoAboutCompany,
  StyledSocialMediaBox,
} from "./Footer.style";

// Import Social Media Icons
import facebook from "../../assets/Images/Icons/facebook.svg";
import twitter from "../../assets/Images/Icons/twitter.svg";
import linkedIn from "../../assets/Images/Icons/linkedIn.svg";
import instagram from "../../assets/Images/Icons/instagram.svg";
import youtube from "../../assets/Images/Icons/youtube.svg";

function FooterLogoColumn() {
  return (
    <StyledFooterLogoColumn>
      <Logo src={logo} />
      <StyledInfoAboutCompany>
        Best information about the company gies here but now lorem ipsum is
      </StyledInfoAboutCompany>
      <StyledSocialMediaBox>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={linkedIn} alt="linkedIn" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={youtube} alt="youtube" />
        </a>
      </StyledSocialMediaBox>
    </StyledFooterLogoColumn>
  );
}

export default FooterLogoColumn;
