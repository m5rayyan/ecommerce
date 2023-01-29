import React from "react";
import StyledButton from "../global/Button/Button";
import {
  SearchInput,
  SearchBoxContainer,
  SearchCategories,
} from "./SearchBox.style";
import dropDown from "./../../assets/Images/Icons/dropDown.svg";
function SearchBox() {
  return (
    <SearchBoxContainer>
      <SearchInput />

      <SearchCategories>
        <p>All categories</p>
        <img src={dropDown} alt="dropDown" />
      </SearchCategories>

      <StyledButton width="100" borderWidth="0" borderRadius="zero">
        Search
      </StyledButton>
    </SearchBoxContainer>
  );
}

export default SearchBox;
