import React from "react";
import FilterSearchByCheck from "./FilterSearchByCheck";
import SearchByCheckLi from "./SearchByCheckLi";

import star from "../../assets/Images/Icons/star.svg";
import emptyStar from "../../assets/Images/Icons/emptyStar.svg";
import Ratings from "./Ratings";

function GenerateCheckFilter() {
  const searchFilters = [
    {
      keyId: 0,
      title: "Brands",
      inputName: "brands",
      about: [
        {
          keyId: 0,
          checkId: "checkId1",
          inputType: "checkbox",
          checkName: "Samsung",
        },
        {
          keyId: 1,
          checkId: "checkId2",
          inputType: "checkbox",
          checkName: "Apple",
        },
        {
          keyId: 2,
          checkId: "checkId3",
          inputType: "checkbox",
          checkName: "Huawei",
        },
        {
          keyId: 3,
          checkId: "checkId4",
          inputType: "checkbox",
          checkName: "Pocco",
        },
        {
          keyId: 4,
          checkId: "checkId5",
          inputType: "checkbox",
          checkName: "Lenovo",
        },
      ],
      seeAllHref: "#",
    },
    {
      keyId: 1,
      title: "Features",
      inputName: "features",

      about: [
        {
          keyId: 0,
          checkId: "checkId6",
          inputType: "checkbox",
          checkName: "Metallic",
        },
        {
          keyId: 1,
          checkId: "checkId7",
          inputType: "checkbox",
          checkName: "Plastic cover",
        },
        {
          keyId: 2,
          checkId: "checkId8",
          inputType: "checkbox",
          checkName: "8GB Ram",
        },
        {
          keyId: 3,
          checkId: "checkId9",
          inputType: "checkbox",
          checkName: "Super power",
        },

        {
          keyId: 4,
          checkId: "checkId10",
          inputType: "checkbox",
          checkName: "Large Memory",
        },
      ],
      seeAllHref: "#",
    },
    {
      keyId: 3,
      title: "Condition",
      inputName: "condition",

      about: [
        {
          keyId: 0,
          checkId: "checkId11",
          inputType: "radio",
          checkName: "Any",
        },
        {
          keyId: 1,
          checkId: "checkId12",
          inputType: "radio",
          checkName: "Refurbished",
        },
        {
          keyId: 2,
          checkId: "checkId13",
          inputType: "radio",
          checkName: "Brand new",
        },
        {
          keyId: 3,
          checkId: "checkId14",
          inputType: "radio",
          checkName: "Old items",
        },
      ],
      seeAllHref: "#",
    },
  ];
  return (
    <div className="filter">
      {searchFilters.map((filter) => {
        return (
          <FilterSearchByCheck
            key={filter.keyId}
            searchTitle={filter.title}
            seeAllLink={filter.seeAllHref}
            checkToSearch={filter.about.map((item) => {
              return (
                <SearchByCheckLi
                  key={item.keyId}
                  inputName={filter.inputName}
                  id={item.checkId}
                  inputType={item.inputType}
                  checkName={item.checkName}
                />
              );
            })}
          />
        );
      })}

      <Ratings />
    </div>
  );
}

export default GenerateCheckFilter;
