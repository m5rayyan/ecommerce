import React from "react";
import HomeCategorySection from "./HomeCategorySection";
import Container from "../global/Container/Container";

//Import Images
import HomeAndOutdoorBg from "../../assets/Images/HomeAndOutdoorBg.png";
import ConsumerElectronicsAndGadgetsBg from "../../assets/Images/ConsumerElectronicsAndGadgetsBg.png";
import HomeAndOutdoor from "./HomeAndOutdoor";
import ConsumerElectronicsAndGadgets from "./ConsumerElectronicsAndGadgets";
function HomeCategoryContainer() {
  return (
    <div className="HomeCategoryContainer">
      <Container>
        <HomeCategorySection
          src={HomeAndOutdoorBg}
          title="Home and outdoor"
          CategoryType={<HomeAndOutdoor />}
        />
        <HomeCategorySection
          src={ConsumerElectronicsAndGadgetsBg}
          title="Consumer electronics and gadgets"
          CategoryType={<ConsumerElectronicsAndGadgets />}
        />
      </Container>
    </div>
  );
}

export default HomeCategoryContainer;
