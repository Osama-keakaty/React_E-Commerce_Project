import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
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
    totalItemPrice: 0,
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    increaseItemInCart: () => { },
    decreaseItemInCart: () => { },
});


export const CART_STATE_TYPES = {
    CART_IS_OPENED: "CART_IS_OPENED",
    SET_CART_ITEMS: "SET_CART_ITEMS"
}

const INITIAL_VALUES = {
    isCartOpen: false,
    productNum: 0,
    cartItems: [],
    totalItemPrice: 0,
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    if (type === CART_STATE_TYPES.CART_IS_OPENED) {
        return {
            ...state,
            isCartOpen: payload,
        }
    } else if (type === CART_STATE_TYPES.SET_CART_ITEMS) {
        return {
            ...state,
            ...payload,
        }

    } else {
        throw new Error(`the type ${type} is unhandled`);
    }
}

export const CartProvider = ({ children }) => {
    const [{ totalItemPrice, isCartOpen, productNum, cartItems }, dispatch] = useReducer(cartReducer, INITIAL_VALUES);

    const updateCartState = (newValue) => {

        dispatch(createAction(CART_STATE_TYPES.CART_IS_OPENED, newValue));
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newProductNum = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newTotalPrice = newCartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)

        dispatch(createAction(CART_STATE_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, productNum: newProductNum, totalItemPrice: newTotalPrice }));
    }
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems)
    }
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems)
    }
    const increaseItemInCart = (productToDecrease) => {
        const newCartItems = increaseCartItem(cartItems, productToDecrease);
        updateCartItemsReducer(newCartItems)
    }
    const decreaseItemInCart = (productToIncrease) => {
        const newCartItems = decreaseCartItem(cartItems, productToIncrease);
        updateCartItemsReducer(newCartItems)
    }

    const value = {
        isCartOpen,
        totalItemPrice,
        cartItems,
        productNum,
        updateCartState,
        addItemToCart,
        removeItemFromCart,
        increaseItemInCart,
        decreaseItemInCart,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}








// ! the cartContext using useState
// import { createContext, useEffect, useState } from "react";
// const addCartItem = (cartItems, productToAdd) => {
//     const existingItem = cartItems.find(item => item.id === productToAdd.id);
//     if (existingItem) {
//         return cartItems.map(item => item.id === productToAdd.id ?
//             { ...item, quantity: item.quantity + 1 }
//             : item)
//     }
//     return [...cartItems, { ...productToAdd, quantity: 1 }];
// }

// const removeCartItem = (cartItems, productToRemove) => {
//     return cartItems.filter((cartItem => cartItem.id !== productToRemove.id));
// }
// const increaseCartItem = (cartItems, productToIncrease) => {
//     return cartItems.map(item => item.id === productToIncrease.id ?
//         { ...item, quantity: item.quantity + 1 }
//         : item)
// }
// const decreaseCartItem = (cartItems, productToDecrease) => {
//     if (productToDecrease.quantity === 1) {
//         return cartItems.filter((cartItem => cartItem.id !== productToDecrease.id));
//     } else {
//         return cartItems.map(item => item.id === productToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item)

//     }
// }



// export const CartContext = createContext({
//     isCartOpen: false,
//     setIsCartOpen: () => { },
//     cartItems: [],
//     setCartItems: () => { },
//     productNum: 0,
//     totalItemPrice: 0,
//     addItemToCart: () => { },
//     removeItemFromCart: () => { },
//     increaseItemInCart: () => { },
//     decreaseItemInCart: () => { },

// });
// export const CartProvider = ({ children }) => {
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [cartItems, setCartItems] = useState([]);
//     const [productNum, setProductNum] = useState(0);
//     const [totalItemPrice, setTotalItemPrice] = useState(0);
//     useEffect(() => {
//         // TODO new way to to count array Items by usign total variable with attribution an initial value for total (0);
//         const newProductNum = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
//         setProductNum(newProductNum);
//     }, [cartItems])

//     useEffect(() => {
//         const totalPriceValue = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
//         setTotalItemPrice(totalPriceValue);
//     }, [cartItems]);

//     const addItemToCart = (productToAdd) => {
//         setCartItems(addCartItem(cartItems, productToAdd));
//     }
//     const removeItemFromCart = (productToRemove) => {
//         setCartItems(removeCartItem(cartItems, productToRemove));
//     }
//     const increaseItemInCart = (productToDecrease) => {
//         setCartItems(increaseCartItem(cartItems, productToDecrease));
//     }
//     const decreaseItemInCart = (productToIncrease) => {
//         setCartItems(decreaseCartItem(cartItems, productToIncrease));
//     }

//     const value = {
//         isCartOpen,
//         setIsCartOpen,
//         cartItems,
//         setCartItems,
//         productNum,
//         totalItemPrice,
//         addItemToCart,
//         removeItemFromCart,
//         increaseItemInCart,
//         decreaseItemInCart,
//     };
//     return (
//         <CartContext.Provider value={value}>{children}</CartContext.Provider>
//     )
// }
