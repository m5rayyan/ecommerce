import React from "react";
import FilterCategoryList from "./FilterCategoryList";
import SearchCategoryLi from "./SearchCategoryLi";

function GenerateFilter() {
  const searchFilters = [
    {
      id: 0,
      title: "Category",
      about: [
        { id: 0, searchHref: "#", searchType: "Mobile accessory" },
        { id: 1, searchHref: "#", searchType: "Electronics" },
        { id: 2, searchHref: "#", searchType: "Smartphones" },
        { id: 3, searchHref: "#", searchType: "Modern tech" },
      ],
      seeAllHref: "#",
    },
  ];
  return (
    <>
      {searchFilters.map((filter) => {
        return (
          <FilterCategoryList
            key={filter.id}
            searchTitle={filter.title}
            seeAllLink={filter.seeAllHref}
            searchAbout={filter.about.map((cat) => {
              return (
                <SearchCategoryLi
                  key={cat.id}
                  searchLink={cat.searchHref}
                  searchText={cat.searchType}
                />
              );
            })}
          />
        );
      })}
    </>
  );
}

export default GenerateFilter;
