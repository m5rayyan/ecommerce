import React from "react";
import {
  StyledSendRequestsForm,
  StyledFormInput,
  StyledFormTextArea,
  StyledQuantityBox,
} from "./SendRequestsSection.style";
import { StyledExtraBoldProductName } from "../global/ProductName/ProductName.style";
import StyledButton from "../global/Button/Button";
function SendRequestsForm() {
  return (
    <StyledSendRequestsForm>
      <StyledExtraBoldProductName>
        Send quote to suppliers
      </StyledExtraBoldProductName>
      <StyledFormInput type="text" placeholder="What item you need?" />
      <StyledFormTextArea
        name=""
        id=""
        as="textarea"
        placeholder="Type more details"
      ></StyledFormTextArea>
      <StyledQuantityBox>
        <StyledFormInput type="text" placeholder="Quantity" />
        <StyledFormInput as="select" name="" id="">
          <option value="Pcs">Pcs</option>
          <option value="Pcs1">Pcs1</option>
          <option value="Pcs2">Pcs2</option>
        </StyledFormInput>
      </StyledQuantityBox>
      <StyledButton width="129">Send inquiry</StyledButton>
    </StyledSendRequestsForm>
  );
}

export default SendRequestsForm;
