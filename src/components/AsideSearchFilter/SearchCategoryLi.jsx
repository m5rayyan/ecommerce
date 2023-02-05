import React from "react";
import {
  StyledCategorySearchLink,
  StyledFilterLi,
} from "./AsideSearchFilter.style";

function SearchCategoryLink(props) {
  return (
    <StyledFilterLi>
      <StyledCategorySearchLink href={props.searchLink}>
        {props.searchText}
      </StyledCategorySearchLink>
    </StyledFilterLi>
  );
}

export default SearchCategoryLink;
