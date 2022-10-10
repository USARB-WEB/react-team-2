import { useState, useEffect } from "react";
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


export default function ShoppingCartPage() {

    const getFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('products'));
    }

    const [products, setProducts] = useState(getFromLocalStorage())

    const changeCartState = (productId, newState) => {
        setProducts(
            products.filter(product => product.id !== productId)
        )
    }
    const saveToLocalStorage = () => {
        localStorage.setItem('products', JSON.stringify(products.filter(product => product.inCart)))
    }


    useEffect(() => {
        saveToLocalStorage();
    }, [products])

    const removeFromCart = (productId) => {
        changeCartState(productId, false);
        // console.log('change state');
        // console.log(products);
    }

    useEffect(() => {
        //console.log(getFromLocalStorage());
        
    }, [])



    return (
        <>
            <NavBar />
            <div>Shopping cart</div>
            {
                products && products.map(product =>
                    <li key={product.id}>
                        <span>{product.name}</span> |
                        <strong>{product.price}</strong> |

                        <button onClick={() => { removeFromCart(product.id) }}>Remove from cart</button>
                    </li>
                )
            }
            <hr />
            <pre>
                { JSON.stringify(products, undefined, 2) }
            </pre>
        </>
    )
}