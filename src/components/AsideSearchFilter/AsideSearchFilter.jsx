import React from "react";
import GenerateCategoryFilter from "./GenerateCategoryFilter";
import GenerateCheckFilter from "./GenerateCheckFilter";

function AsideSearchFilter(props) {
  const { searchTitle, searchAbout } = props;
  return (
    <div className="AsideSearchFilter">
      <GenerateCategoryFilter
        searchTitle={searchTitle}
        searchAbout={searchAbout}
      />
      <GenerateCheckFilter />
    </div>
  );
}

export default AsideSearchFilter;
