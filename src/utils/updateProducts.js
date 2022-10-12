import { PRODUCTS } from "./localStorage";

const getUpdatedProducts = (productId, state) => {
  const products = JSON.parse(localStorage.getItem(PRODUCTS));

  if (!Array.isArray(products)) return;

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

export { getUpdatedProducts };
