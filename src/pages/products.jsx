import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import allProducts from "../data/allProducts";


export default function ProductsPage() {

  const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  const [products, setProducts] = useState(allProducts.map(product => {
    return {
      ...product,
      inCart: getFromLocalStorage().find(cartProduct => cartProduct.id === product.id) ? true : false
    }
  }))

  const changeCartState = (productId, newState) => {
    setProducts(
      products.map(product => {
        if (product.id === productId) {

          return {
            ...product, inCart: newState
          };
        }

        return product;
      })
    )
  }

  const addToCart = (productId) => {
    changeCartState(productId, true);
  }

  const removeFromCart = (productId) => {
    changeCartState(productId, false);
  }



  const saveToLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(products.filter(product => product.inCart)))
  }


  useEffect(() => {
    saveToLocalStorage();
  }, [products])



  return (
    <>
      <NavBar />
      <div>Products</div>
      <div>
        <ul>
          {
            products && products.map(product =>
              <li key={product.id}>
                <span>{product.name}</span> |
                <strong>{product.price}</strong> |
                {!product.inCart && <button onClick={() => { addToCart(product.id) }}>Add to cart</button>}
                {product.inCart && <button onClick={() => { removeFromCart(product.id) }}>Remove from cart</button>}
              </li>
            )
          }
        </ul>
      </div>
    </>
  )
}