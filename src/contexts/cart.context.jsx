import { createContext, useEffect, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find(item => item.id === productToAdd.id);
    if (existingItem) {
        return cartItems.map(item => item.id === productToAdd.id ?
            { ...item, quantity: item.quantity + 1 }
            : item)
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem => cartItem.id !== productToRemove.id));
}
const increaseCartItem = (cartItems, productToIncrease) => {
    return cartItems.map(item => item.id === productToIncrease.id ?
        { ...item, quantity: item.quantity + 1 }
        : item)
}
const decreaseCartItem = (cartItems, productToDecrease) => {
    if (productToDecrease.quantity === 1) {
        return cartItems.filter((cartItem => cartItem.id !== productToDecrease.id));
    } else {
        return cartItems.map(item => item.id === productToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item)

    }
}



export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    setCartItems: () => { },
    productNum: 0,
    setProductNum: () => { },
    totalItemPrice: 0,
    setTotalItemPrice: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    increaseItemInCart: () => { },
    decreaseItemInCart: () => { },

});
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [productNum, setProductNum] = useState(0);
    const [totalItemPrice, setTotalItemPrice] = useState(0);
    useEffect(() => {
        // TODO new way to to count array Items by usign total variable with attribution an initial value for total (0);
        const newProductNum = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setProductNum(newProductNum);
    }, [cartItems])

    useEffect(() => {
        const totalPriceValue = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
        setTotalItemPrice(totalPriceValue);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }
    const increaseItemInCart = (productToDecrease) => {
        setCartItems(increaseCartItem(cartItems, productToDecrease));
    }
    const decreaseItemInCart = (productToIncrease) => {
        setCartItems(decreaseCartItem(cartItems, productToIncrease));
    }

    const value = {
        totalItemPrice,
        increaseItemInCart,
        decreaseItemInCart,
        removeItemFromCart,
        productNum,
        addItemToCart,
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
