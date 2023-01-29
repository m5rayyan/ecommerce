import React from "react";
import AsideSearchList from "./AsideSearchList";
import SearchLink from "./SearchLink";

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
    },
    {
      id: 1,
      title: "Category",
      about: [
        { id: 0, searchHref: "#", searchType: "Mobile accessory" },
        { id: 1, searchHref: "#", searchType: "Electronics" },
        { id: 2, searchHref: "#", searchType: "Smartphones" },
        { id: 3, searchHref: "#", searchType: "Modern tech" },
      ],
    },
  ];
  return (
    <div className="TT">
      {searchFilters.map((filter) => {
        return (
          <AsideSearchList
            key={filter.id}
            searchTitle={filter.title}
            searchAbout={filter.about.map((cat) => {
              return (
                <SearchLink
                  key={cat.id}
                  searchLink={cat.searchHref}
                  searchText={cat.searchType}
                />
              );
            })}
          />
        );
      })}
    </div>
  );
}

export default GenerateFilter;
