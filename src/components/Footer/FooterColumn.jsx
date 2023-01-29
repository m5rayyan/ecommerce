import React from "react";
import { StyledBoldProductName } from "../global/ProductName/ProductName.style";
import { StyledFooterColumn } from "./Footer.style";

function FooterColumn(props) {
  return (
    <StyledFooterColumn>
      <StyledBoldProductName>{props.columnName}</StyledBoldProductName>
      {props.children}
    </StyledFooterColumn>
  );
}

export default FooterColumn;
