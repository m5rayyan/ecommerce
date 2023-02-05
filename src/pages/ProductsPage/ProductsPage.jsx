import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PathLinks from "../../components/PathLinks/PathLinks";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";
import ProductsPageListMainSection from "../../components/ProductsPageListMainSection/ProductsPageListMainSection";

function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <PathLinks />
        <ProductsPageListMainSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}

export default ProductsPage;
