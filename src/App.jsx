import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import ContactsPage from "./pages/contacts";
import ProfilePage from "./pages/profile";
import ProductsPage from "./pages/products";
import ShoppingCartPage from "./pages/cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </>
  );
};

export default App;
