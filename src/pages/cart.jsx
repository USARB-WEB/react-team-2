import { useEffect } from "react";
import { NavBar } from "../components/NavBar";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ShoppingCartPage() {
  const [products, setProducts] = useLocalStorage("products");

  const removeFromCart = (productId, newState) => {
    setProducts(products.filter((product) => product.id !== productId));
  };
  useEffect(() => {
    setProducts((prevProduct) => {
      return prevProduct;
    });
  }, [setProducts]);

  return (
    <>
      <NavBar />
      <div>Shopping cart</div>
      {products &&
        products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span> |<strong>{product.price}</strong> |
            <button
              onClick={() => {
                removeFromCart(product.id, false);
              }}
            >
              Remove from cart
            </button>
          </li>
        ))}
    </>
  );
}
