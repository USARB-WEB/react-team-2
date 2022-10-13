import { useEffect, useState } from "react";
import { PRODUCTS } from "../utils/localStorage";
import ListItems from "../components/cartList/ListItems";
import { getFilteredData } from "../utils/filter";
import useLocalStorage from "../hooks/useLocalStorage";
import defaultProducts from "../database/products/list.json";
import { getUpdatedProducts } from "../utils/updateProducts";
import CartForm from "../forms/cart/CartForm";

const ShoppingCartPage = () => {
  const [storageProducts, setStorageProducts] = useLocalStorage(
    PRODUCTS,
    defaultProducts
  );
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    updateCartProducts(storageProducts);
  }, [storageProducts]);

  const updateCartProducts = (products) => {
    const mainData = products;

    const filterArguments = {
      data: mainData,
      key: "inCart",
      value: false,
    };

    const filteredProducts = getFilteredData(filterArguments);

    setCartProducts(filteredProducts);
  };

  const removeProductFromList = (id) => {
    const updatedProducts = getUpdatedProducts(id, false);

    updateCartProducts(updatedProducts);

    setStorageProducts(updatedProducts);
  };

  return (
    <>
      <h2>Cart</h2>
      {cartProducts && (
        <ListItems items={cartProducts} removeProduct={removeProductFromList} />
      )}
      <CartForm />
    </>
  );
};

export default ShoppingCartPage;
