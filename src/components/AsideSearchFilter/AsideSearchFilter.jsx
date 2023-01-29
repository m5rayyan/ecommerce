import React from "react";
import GenerateFilter from "./GenerateFilter";

function AsideSearchFilter(props) {
  const { searchTitle, searchAbout } = props;
  return (
    <div className="AsideSearchFilter">
      <GenerateFilter searchTitle={searchTitle} searchAbout={searchAbout} />
    </div>
  );
}

export default AsideSearchFilter;
