import { useEffect } from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import useLocalStorage from "../hooks/useLocalStorage";
import { allProducts } from "../mock/products";

export default function ProductsPage() {
  const [cart, setCart] = useLocalStorage("products", []);
  const [products, setProducts] = useState(
    allProducts.map((product) => {
      return {
        ...product,
        inCart: cart.find((cartProduct) => cartProduct.id === product.id) ? true : false,
      };
    })
  );

  const addProductToCart = (selectedProduct) => {
    const newState = !selectedProduct.inCart ? true : false;
    setProducts(
      products.map((product) => {
        if (product.id === selectedProduct.id) {
          return {
            ...product,
            inCart: newState,
          };
        }

        return product;
      })
    );
  };

  useEffect(() => {
    setCart(products.filter((product) => product.inCart));
  }, [products]);

  return (
    <>
      <NavBar />
      <div>Products</div>
      <div>
        <ul>
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <span>{product.name}</span> |<strong>{product.price}</strong> |
                <button
                  onClick={() => {
                    addProductToCart(product);
                  }}
                >
                  {!product.inCart ? "Add to cart" : "Remove from cart"}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
