import {CartIconcontainer,ShoppingIcon,ItemCount} from './cart.styles.jsx'
// import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg' //! we don't need it any more
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
const Cart = () => {
    const {isCartOpen,setIsCartOpen,productNum} = useContext(CartContext);
    const onClickHandler = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconcontainer onClick={onClickHandler}>
            <ShoppingIcon/>
                <ItemCount>{productNum}</ItemCount>
        </CartIconcontainer>
    );
}

export default Cart;