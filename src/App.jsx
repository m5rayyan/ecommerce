import "./App.css";
import Home from "./pages/Home";
import StoreList from "./pages/StoreList";
import GlobalStyle from "./components/global/GlobalStyle";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ViewProductPage from "./pages/ViewProductPage/ViewProductPage";
import CartPage from "./pages/Cart/CartPage";

import SignIn from "./pages/Signs/SignIn";
import Register from "./pages/Signs/Register";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/storeList" element={<StoreList />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/viewProductPage" element={<ViewProductPage />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
