import React from "react";

function SearchLink(props) {
  return (
    <li>
      <a href={props.searchLink}>{props.searchText}</a>
    </li>
  );
}

export default SearchLink;
