import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
const CartDropdown = () => {
    // const onClickHandler = () =>{

    // }
  
    return (
        <div className='cart-dropdown-container'>
            {/* <div className='cart-items' /> */}
            <Button children={"GO TO CHECKOUT"} />


        </div>
    );
}
export default CartDropdown;