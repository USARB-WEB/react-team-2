import { useEffect } from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar";

const allProducts = [
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
];

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