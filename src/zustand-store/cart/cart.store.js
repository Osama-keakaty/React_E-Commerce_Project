
import { create } from 'zustand'

export const useCartStore = create((set) => ({
    isCartOpen: false,
    productNum: 0,
    cartItems: [],
    totalItemPrice: 0,
    setIsCartOpen: (value) => set({ isCartOpen: value }),
    addItemToCart: (productToAdd) => set((state) => {
        const existingItem = state.cartItems.find(item => item.id === productToAdd.id);
        if (existingItem) {
            return {
                cartItems: state.cartItems.map(item => item.id === productToAdd.id ?
                    { ...item, quantity: item.quantity + 1 }
                    : item)
            }
        }
        return { cartItems: [...state.cartItems, { ...productToAdd, quantity: 1 }] };
    }),

    removeItemFromCart: (productToRemove) => set((state) => ({ cartItems: state.cartItems.filter((cartItem => cartItem.id !== productToRemove.id)) })),
    increaseItemInCart: (productToIncrease) => set((state) => ({
        cartItems: state.cartItems.map(item => item.id === productToIncrease.id ?
            { ...item, quantity: item.quantity + 1 }
            : item)
    })),

    decreaseItemInCart: (productToDecrease) => set((state) => {
        if (productToDecrease.quantity === 1) {
            return { cartItem: state.cartItems.filter((cartItem => cartItem.id !== productToDecrease.id)) }
        } else {
            return { cartItems: state.cartItems.map(item => item.id === productToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item) }
        }
    }),
    setProductNum:(value)=>set({productNum:value}),
    setTotalItemPrice:(value)=>set({totalItemPrice:value}),
}));


//     useEffect(() => {
//         const newProductNum = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
//         setProductNum(newProductNum);
//     }, [cartItems])

//     useEffect(() => {
//         const totalPriceValue = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
//         setTotalItemPrice(totalPriceValue);

//     }, [cartItems]);

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

