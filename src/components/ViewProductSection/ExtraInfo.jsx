import React, { Fragment } from "react";
import {
  StyledInfoRow,
  StyledInfoRowBorder,
  StyledInfoType,
  StyledInfo,
} from "./ViewProductSection.style";

function ExtraInfo() {
  return (
    <div className="StyledExtraInfo">
      <StyledInfoRowBorder>
        <StyledInfoType>Price:</StyledInfoType>
        <StyledInfo>Negotiable</StyledInfo>
      </StyledInfoRowBorder>

      <StyledInfoRow>
        <StyledInfoType>Type:</StyledInfoType>
        <StyledInfo>Classic shoes</StyledInfo>
      </StyledInfoRow>

      <StyledInfoRow>
        <StyledInfoType>Material:</StyledInfoType>
        <StyledInfo>Plastic material</StyledInfo>
      </StyledInfoRow>

      <StyledInfoRowBorder>
        <StyledInfoType>Design:</StyledInfoType>
        <StyledInfo>Modern nice</StyledInfo>
      </StyledInfoRowBorder>

      <StyledInfoRow>
        <StyledInfoType>Customization:</StyledInfoType>
        <StyledInfo>Customized logo and design custom packages</StyledInfo>
      </StyledInfoRow>

      <StyledInfoRow>
        <StyledInfoType>Protection:</StyledInfoType>
        <StyledInfo>Refund Policy</StyledInfo>
      </StyledInfoRow>

      <StyledInfoRowBorder>
        <StyledInfoType>Warranty:</StyledInfoType>
        <StyledInfo>2 years full warranty</StyledInfo>
      </StyledInfoRowBorder>
    </div>
  );
}

export default ExtraInfo;
