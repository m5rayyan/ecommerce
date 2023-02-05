import React from "react";
import DiscountPanel from "../../components/DiscountPanel/DiscountPanel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PathLinks from "../../components/PathLinks/PathLinks";
import RelatedProductsSection from "../../components/RelatedProductsSection/RelatedProductsSection";
import ViewProductSecondSection from "../../components/ViewProductSecondSection/ViewProductSecondSection";
import ViewProductSection from "../../components/ViewProductSection/ViewProductSection";

function ViewProductPage() {
  return (
    <>
      <Header />
      <main>
        <PathLinks />
        <ViewProductSection />
        <ViewProductSecondSection />
        <RelatedProductsSection />
        <DiscountPanel />
      </main>
      <Footer />
    </>
  );
}

export default ViewProductPage;
