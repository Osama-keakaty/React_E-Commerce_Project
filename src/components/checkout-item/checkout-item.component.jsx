import './checkout-item.styles.scss'
import { useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
const CheckoutItem = ({item}) =>{
    const {removeItemFromCart,increaseItemInCart,decreaseItemInCart} =useContext(CartContext)
    const {imageUrl,name,quantity,price} = item;

    const removeItemHandler = () =>{
        removeItemFromCart(item);
    }
    const increaseItemHandler= ()=>{
        increaseItemInCart(item);
    }
    const decreaseItemHandler= ()=>{
        decreaseItemInCart(item);
    }
return (
<div className='checkout-item-container '>
<div className="image-container">
<img src={imageUrl} alt={`${name}`}/>
</div>
<span className="name">{name}</span>
<span className="quantity">
<div className="arrow" onClick={decreaseItemHandler}>
    &#10094;
</div>
<span className='value'>{quantity}</span>
<div className="arrow" onClick={increaseItemHandler}>
&#10095;
</div>
</span>
<span className='price'>{price}$</span>
<div onClick={removeItemHandler} className='remove-button'>&#10005;</div>
</div>
);
}
export default CheckoutItem;