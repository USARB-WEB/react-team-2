import ListItems from "../components/cartList/ListItems";
import { PRODUCTS } from "../utils/localStorage";
import { getUpdatedProducts } from "../utils/updateProducts";
import defaultProducts from "../database/products/list.json";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductsPage = () => {
  const [storageProducts, setStorageProducts] = useLocalStorage(
    PRODUCTS,
    defaultProducts
  );

  const removeProductFromList = (id) => {
    const newProducts = getUpdatedProducts(id, false);

    setStorageProducts(newProducts);
  };

  const addProductToCart = (id) => {
    const newProducts = getUpdatedProducts(id, true);

    setStorageProducts(newProducts);
  };

  return (
    <>
      <h2>PRODUCTS</h2>
      {storageProducts && (
        <ListItems
          items={storageProducts}
          addProduct={addProductToCart}
          removeProduct={removeProductFromList}
        />
      )}
    </>
  );
};

export default ProductsPage;
