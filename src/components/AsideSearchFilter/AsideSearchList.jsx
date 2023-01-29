import React from "react";
import { StyledSearchTitle } from "./AsideSearchFilter.style";

function AsideSearchList(props) {
  return (
    <div>
      <StyledSearchTitle>{props.searchTitle}</StyledSearchTitle>
      <ul>
        {props.searchAbout}

        <a href="" className="tset">
          See all
        </a>
      </ul>
    </div>
  );
}

export default AsideSearchList;
