import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, newQuantity) => {
	    const newCart = cart.filter(prod => prod.id !== item.id);
	    newCart.push({ ...item, quantity: newQuantity });
	    setCart(newCart);
	}

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

	const removeItem = (id) =>
		setCart(cart.filter((product) => product.id !== id));

	
	console.log('carrito', cart);

	
	return (
		<CartContext.Provider
			value={{ clearCart, isInCart, removeItem, addItem, cart }}
		>
			{children}
		</CartContext.Provider>
	);
};



export default CartProvider;