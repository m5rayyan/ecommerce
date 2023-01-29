import React from "react";
import BannerSection from "../../components/BannerSection/BannerSection";
import DealsAndOffersContainer from "../../components/DealsAndOffersContainer/DealsAndOffersContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeCategoryContainer from "../../components/HomeCategoryContainer/HomeCategoryContainer";
import OurExtraServicesSection from "../../components/OurExtraServicesSection/OurExtraServicesSection";
import RecommendedItemsSection from "../../components/RecommendedItemsSection/RecommendedItemsSection";
import SendRequestsSection from "../../components/SendRequestsSection/SendRequestsSection";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";
import SuppliersByRegion from "../../components/SuppliersByRegion/SuppliersByRegion";

function index() {
  return (
    <>
      <Header />
      <BannerSection />
      <DealsAndOffersContainer />
      <HomeCategoryContainer />
      <SendRequestsSection />
      <RecommendedItemsSection />
      <OurExtraServicesSection />
      <SuppliersByRegion />
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default index;
