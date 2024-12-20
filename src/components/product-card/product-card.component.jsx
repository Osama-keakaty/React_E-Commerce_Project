import './product-card.styles.scss'
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
// import { CartContext } from '../../contexts/cart.context';
// import { useContext } from 'react';

import { useCartStore } from '../../zustand-store/cart/cart.store';
import { useShallow } from 'zustand/shallow';

const ProductCard = ({ product }) => {
    const { name,imageUrl, price } = product;
    
    // const{addItemToCart} = useContext(CartContext)
    const addItemToCart = useCartStore(useShallow((state)=>state.addItemToCart))
    const onClickHandler = () => {  
        addItemToCart(product);
        
        }
    return (
        <div className='product-card-container' >
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <p className='name'>{name}</p>
                <p className='price'>{price}<span>$</span></p>
            </div>
            <Button children={"ADD TO CARD"} buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={onClickHandler} />
        </div>
    );
}
export default ProductCard;