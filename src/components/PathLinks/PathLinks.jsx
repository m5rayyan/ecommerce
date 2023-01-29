import React from "react";
import Container from "../global/Container/Container";
import {
  StyledPathLinks,
  StyledDropDownImg,
  StyledPathAnchor,
  StyledPathList,
  StyledPathLi,
} from "./PathLinks.style";

import dropDownIcon from "../../assets/Images/Icons/dropDown.svg";

function PathLinks() {
  const pathLinks = [
    { link: "#", path: "Home" },
    { link: "#", path: "Clothings" },
    { link: "#", path: "Men’s wear" },
    { link: "#", path: "Summer clothing" },
  ];

  return (
    <StyledPathLinks>
      <Container>
        <StyledPathList>
          {pathLinks.map((item) => {
            return (
              <StyledPathLi key={pathLinks.indexOf(item)}>
                <StyledPathAnchor href={item.link}>
                  {item.path}
                  <StyledDropDownImg src={dropDownIcon} alt="DropDown Icon" />
                </StyledPathAnchor>
              </StyledPathLi>
            );
          })}
        </StyledPathList>
      </Container>
    </StyledPathLinks>
  );
}

export default PathLinks;
