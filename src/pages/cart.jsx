import { useEffect, useState } from "react";
import { LocalStorage, PRODUCTS } from "../helpers/localStorage";
import { updateAndSaveCart } from "../helpers/cart";
import ListItems from "../components/list/ListItems";
import products from "../database/products/list.json";
import { getFilteredData } from "../helpers/filter";

const ShoppingCartPage = () => {
  const [cartsProducts, setCartsProducts] = useState([]);

  useEffect(() => {
    const localData = LocalStorage.get(PRODUCTS) || products;

    updateCartsProducts(localData);
  }, []);

  const updateCartsProducts = (data) => {
    const mainData = data || products;

    const filterArguments = {
      data: mainData,
      key: "inCart",
      value: false,
    };

    const filteredProducts = getFilteredData(filterArguments);

    setCartsProducts(filteredProducts);
  };

  const removeProductFromList = (id) => {
    const updatedProducts = updateAndSaveCart(id, false);

    updateCartsProducts(updatedProducts);
  };

  return (
    <>
      <h2>Cart</h2>
      {cartsProducts && (
        <ListItems
          items={cartsProducts}
          removeProduct={removeProductFromList}
        />
      )}
    </>
  );
};

export default ShoppingCartPage;
