import React from "react";
import { HeaderLinksBoxStyled, HeaderLinkStyled } from "./HeaderLinksBox.style";
import categorySvg from "../../assets/Images/Icons/categoryList.svg";
import dropDown from "../../assets/Images/Icons/dropDown.svg";
function HeaderLinksBox() {
  return (
    <HeaderLinksBoxStyled>
      <li>
        <HeaderLinkStyled Href="#">
          <img src={categorySvg} alt="category" />
          All category
        </HeaderLinkStyled>
      </li>
      <li>
        <HeaderLinkStyled Href="#">Hot offers</HeaderLinkStyled>
      </li>
      <li>
        <HeaderLinkStyled Href="#">Gift boxes</HeaderLinkStyled>
      </li>
      <li>
        <HeaderLinkStyled Href="#">Projects</HeaderLinkStyled>
      </li>
      <li>
        <HeaderLinkStyled Href="#">Menu item</HeaderLinkStyled>
      </li>
      <li>
        <HeaderLinkStyled>
          Help
          <img src={dropDown} alt="dropDown" />
        </HeaderLinkStyled>
      </li>
    </HeaderLinksBoxStyled>
  );
}

export default HeaderLinksBox;
