import React from "react";
import CustomCartSection from "../../components/CustomCartSection/CustomCartSection";
import DiscountPanel from "../../components/DiscountPanel/DiscountPanel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MyCart from "../../components/MyCart/MyCart";
import SavedForLateSection from "../../components/SavedForLaterSection/SavedForLaterSection";

function CartPage() {
  return (
    <>
      <Header />
      <main>
        <MyCart />
        <CustomCartSection />
        <SavedForLateSection />
        <DiscountPanel />
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
