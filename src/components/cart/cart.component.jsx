import {CartIconcontainer,ShoppingIcon,ItemCount} from './cart.styles.jsx'
// import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg' //! we don't need it any more
// import { CartContext  } from '../../contexts/cart.context'
// import { useContext } from 'react'

import { useCartStore } from '../../zustand-store/cart/cart.store.js'; 
import { useShallow } from 'zustand/shallow';

const Cart = () => {
    // const {isCartOpen,updateCartState,productNum} = useContext(CartContext);
    const {isCartOpen,setIsCartOpen,productNum} = useCartStore(useShallow((state)=>({
        isCartOpen:state.isCartOpen,
        productNum:state.productNum,
        setIsCartOpen:state.setIsCartOpen,

    })));
    const onClickHandler = () =>{
        setIsCartOpen(!isCartOpen)
    };
    return (
        <CartIconcontainer onClick={onClickHandler}>
            <ShoppingIcon/>
                <ItemCount>{productNum}</ItemCount>
        </CartIconcontainer>
    );
}

export default Cart;