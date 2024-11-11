import './product-card.styles.scss'
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
const ProductCard = ({ product }) => {
    const { name,imageUrl, price } = product;
    const{addItemToCart} = useContext(CartContext)
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
            <Button children={"ADD TO CARD"} buttonType={"inverted"} onClick={onClickHandler} />
        </div>
    );
}
export default ProductCard;