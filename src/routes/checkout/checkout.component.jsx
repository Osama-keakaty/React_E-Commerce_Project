import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const { cartItems,totalItemPrice } = useContext(CartContext)
    return (
        <div className="checkout-container ">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} item={cartItem} />
            ))} 
            <span className='total'>Total : {totalItemPrice}$</span>
        </div>
    );
}
export default Checkout;