import { useEffect } from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import allProducts from "../database/products/list";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ProductsPage() {

    const [cartProducts, setCartProducts] = useLocalStorage('products', [])

    const getCartProducts = () => {
        if(Array.isArray(cartProducts)){
            return cartProducts;
        }

        return [];
    }

    const productsInCart = allProducts.map(product => {
        return {
            ...product,
            inCart: getCartProducts().find(cartProduct => cartProduct.id === product.id) ? true : false
        }
    })

    const [products, setProducts] = useState(productsInCart)

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

    useEffect(() => {
        setCartProducts(products.filter(product => product.inCart))
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