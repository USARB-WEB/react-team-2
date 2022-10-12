import { useEffect, useState } from "react";
import ListItems from "../components/list/ListItems";
import { LocalStorage, PRODUCTS } from "../helpers/localStorage";
import products from "../database/products/list.json";
import { updateAndSaveCart } from "../helpers/cart";

const ProductsPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const localData = LocalStorage.get(PRODUCTS) || products;

		setProducts(localData);
	}, []);

	const removeProductFromList = (id) => {
		const newProducts = updateAndSaveCart(id, false);
		setProducts(newProducts);
	};

	const addProductToCart = (id) => {
		const newProducts = updateAndSaveCart(id, true);
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
