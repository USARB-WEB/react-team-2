import { useEffect } from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
export default function ProductsPage() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 12.34,
            inCart: false
        },
        {
            id: 2,
            name: "Product 2",
            price: 11.22,
            inCart: false
        },
        {
            id: 3,
            name: "Product 3",
            price: 7.55,
            inCart: false
        },
        {
            id: 4,
            name: "Product 4",
            price: 7.55,
            inCart: false
        },
        {
            id: 5,
            name: "Product 5",
            price: 7.55,
            inCart: false
        }
    ])

    const [cartItems, setCartItems] = useState([]);

    const changeCartState = (productId, newState) => {
        setProducts(
            products => products.map(product => {
                if (product.id === productId) {

                    return {
                        ...product, inCart: newState
                    };
                } 
                
                return product;
            })
        )
        saveToLocalStorage();
    }

    const addToCart = (productId) => {
        changeCartState(productId, true);  
    }

    const removeFromCart = (productId) => {
        changeCartState(productId, false);
    }

    const saveToLocalStorage = () => {
        console.log(products);
        localStorage.setItem('products', JSON.stringify(products.filter(product => product.inCart)))
    }

    const getFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('products'));
    }

    useEffect(() => {
        setCartItems(getFromLocalStorage());
    }, [])

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

                    <hr />

                    {
                        cartItems && cartItems.map(product =>
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