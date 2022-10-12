import { LocalStorage, PRODUCTS } from "./localStorage";

const changeCartState = (productId, state) => {
  const products = LocalStorage.get(PRODUCTS);

  return products.map((product) => {
    const { id } = product;

    if (id === productId) {
      return {
        ...product,
        inCart: state,
      };
    }

    return product;
  });
};

const updateAndSaveCart = (id, inCart) => {
  const updatedProducts = changeCartState(id, inCart);

  LocalStorage.set(PRODUCTS, updatedProducts);

  return updatedProducts;
};

export { updateAndSaveCart };
