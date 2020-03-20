import React, { useState, useEffect } from 'react';
// Components
import TopMenu from './components/TopMenu';
import Products from './components/Products';

import { ToastContainer, toast } from 'react-toastify';

import useFetch from './hooks/useFetch'; // hook personalizado
import { urlApiProducts, STORAGE_PRODUCTS_CART } from './utils/constants'; // constantes

function App() {
	const products = useFetch(urlApiProducts, null);

	const [productsCart, setProductsCart] = useState([]);

	useEffect(() => {
		getProductsCart();
	}, []);

	const getProductsCart = () => {
		const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
		if (idsProducts) {
			const idsProductsSplit = idsProducts.split(',');
			setProductsCart(idsProductsSplit);
		} else {
			setProductsCart([]);
		}
	};

	const addProductCard = (id, name) => {
		const idsProducts = productsCart;
		idsProducts.push(id);
		setProductsCart(idsProducts);
		localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
		getProductsCart();
		toast.success(`${name} añadido al carrito correctamente`);
	};

	return (
		<div>
			<TopMenu
				productsCart={productsCart}
				getProductsCart={getProductsCart}
				products={products}
			/>
			<Products products={products} addProductCard={addProductCard} />
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnVisibilityChange={false}
				draggable
				pauseOnHover={false}
			/>
		</div>
	);
}

export default App;
