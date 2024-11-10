import './product-card.styles.scss'
import Button from '../button/button.component';
const ProductCard = ({ name, imgURl, price }) => {
    const onClickHandler = () =>{}
    return (
        <div className='product-card-container' >
            <img src={imgURl} alt={name} />
            <div className="footer">
                <p className='name'>{name}</p>
                <p className='price'>{price}<span>$</span></p>
            </div>
            <Button children={"ADD TO CARD"} buttonType={"inverted"} onclick={onClickHandler}/>
        </div>
    );
}
export default ProductCard;