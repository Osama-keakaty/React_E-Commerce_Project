import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
// TODO anouther way to navigate to link is using useNavigate
import { useNavigate } from "react-router-dom";
import { useCartStore } from '../../zustand-store/cart/cart.store';
import { useShallow } from 'zustand/shallow';

const CartDropdown = () => {
    // const { cartItems, updateCartState } = useContext(CartContext)
    const { cartItems, setIsCartOpen } = useCartStore(useShallow((state)=>({
        setIsCartOpen:state.setIsCartOpen,
        cartItems:state.cartItems,
        
    })))
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/checkout')
        setIsCartOpen(false)
    }
    return (
        <CartDropdownContainer>
            <CartItems >
                {cartItems.length ?
                    (cartItems.map((item => <CartItem key={item.id} cartItem={item} />)))
                    : (<EmptyMessage>The cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button children={"GO TO CHECKOUT"} onClick={onClickHandler} />
        </CartDropdownContainer>
    );
}
export default CartDropdown;