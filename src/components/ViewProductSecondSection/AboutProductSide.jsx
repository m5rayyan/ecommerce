import React from "react";
import {
  StyledPillsUl,
  StyledAboutProductSide,
  StyledPillsLi,
  StyledDescription,
  StyledPillsBody,
  StyedDescriptionTable,
  StyledDescRow,
  StyledDescType,
  StyledDescInfo,
  StyledExtraInfoBox,
  StyledExtraInfoContent,
} from "./ViewProductSecondSection.style";

import grayTrue from "../../assets/Images/Icons/grayTrue.svg";

function AboutProductSide() {
  const productDesc = [
    { id: 0, type: "Model", info: "#8786867" },
    { id: 1, type: "Style", info: "Classic style" },
    { id: 2, type: "Certificate", info: "ISO-898921212" },
    { id: 3, type: "Size", info: "34mm x 450mm x 19mm" },
    { id: 4, type: "Memory", info: "36GB RAM" },
  ];
  const extraInfo = [
    { id: 0, icon: grayTrue, info: "Some great feature name here" },
    { id: 1, icon: grayTrue, info: "Lorem ipsum dolor sit amet, consectetur " },
    { id: 2, icon: grayTrue, info: "Duis aute irure dolor in reprehenderit" },
    { id: 3, icon: grayTrue, info: "Some great feature name here" },
  ];
  return (
    <StyledAboutProductSide>
      <StyledPillsUl>
        <StyledPillsLi className="active">Description</StyledPillsLi>
        <StyledPillsLi>Reviews</StyledPillsLi>
        <StyledPillsLi>Shipping</StyledPillsLi>
        <StyledPillsLi>About company</StyledPillsLi>
      </StyledPillsUl>
      <StyledPillsBody>
        <StyledDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </StyledDescription>
        <StyledDescription>
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </StyledDescription>

        <StyedDescriptionTable>
          {productDesc.map((product) => {
            return (
              <StyledDescRow key={product.id}>
                <StyledDescType>{product.type}</StyledDescType>
                <StyledDescInfo>{product.info}</StyledDescInfo>
              </StyledDescRow>
            );
          })}
        </StyedDescriptionTable>

        <StyledExtraInfoContent>
          {extraInfo.map((info) => {
            return (
              <StyledExtraInfoBox key={info.id}>
                <img src={info.icon} alt="True Icon" />
                <StyledDescription>{info.info}</StyledDescription>
              </StyledExtraInfoBox>
            );
          })}
        </StyledExtraInfoContent>
      </StyledPillsBody>
    </StyledAboutProductSide>
  );
}

export default AboutProductSide;
