import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
// TODO anouther way to navigate to link is using useNavigate
import { useNavigate } from "react-router-dom";


const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext)
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/checkout')
        setIsCartOpen(false)
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems.map((item => <CartItem key={item.id} cartItem={item} />))}
            </div>
            <Button children={"GO TO CHECKOUT"} onClick={onClickHandler} />
        </div>
    );
}
export default CartDropdown;