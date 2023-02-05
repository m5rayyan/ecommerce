import React from "react";
import {
  StyledCheckBox,
  StyledFilterLi,
  StyledLabel,
  StyledCheckBoxContainer,
  StyledRadioInput,
} from "./AsideSearchFilter.style";

function SearchByCheckLi(props) {
  const { id, checkName, inputType, inputName } = props;
  return (
    <StyledFilterLi>
      <StyledLabel htmlFor={id}>
        {inputType === "checkbox" ? (
          <StyledCheckBoxContainer>
            <StyledCheckBox type={inputType} id={id} name={inputName} />
          </StyledCheckBoxContainer>
        ) : (
          <StyledRadioInput type={inputType} id={id} name={inputName} />
        )}
        <span>{checkName}</span>
      </StyledLabel>
    </StyledFilterLi>
  );
}

export default SearchByCheckLi;
