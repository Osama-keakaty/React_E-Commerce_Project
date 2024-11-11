import './cart.style.scss'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
const Cart = () => {
    const {isCartOpen,setIsCartOpen,productNum} = useContext(CartContext);
    console.log(productNum)
    const onClickHandler = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={onClickHandler}>
            <ShoppingBag className='shopping-icon'/>
                <span className='item-count'>{productNum}</span>
        </div>
    );
}

export default Cart;