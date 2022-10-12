import ListItems from "../components/list/ListItems";
import { PRODUCTS } from "../utils/localStorage";
import { getUpdatedProducts } from "../utils/updateProducts";
import defaultProducts from "../database/products/list.json";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductsPage = () => {
  const [products, setProducts] = useLocalStorage(PRODUCTS, defaultProducts);

  const removeProductFromList = (id) => {
    const newProducts = getUpdatedProducts(id, false);

    setProducts(newProducts);
  };

  const addProductToCart = (id) => {
    const newProducts = getUpdatedProducts(id, true);

    setProducts(newProducts);
  };

  return (
    <>
      <h2>PRODUCTS</h2>
      {products && (
        <ListItems
          items={products}
          addProduct={addProductToCart}
          removeProduct={removeProductFromList}
        />
      )}
    </>
  );
};

export default ProductsPage;
