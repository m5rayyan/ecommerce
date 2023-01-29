import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PathLinks from "../../components/PathLinks/PathLinks";
import StoreListMainSection from "../../components/StoreListMainSection/StoreListMainSection";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";

function index() {
  return (
    <>
      <Header />
      <main>
        <PathLinks />
        <StoreListMainSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}

export default index;
