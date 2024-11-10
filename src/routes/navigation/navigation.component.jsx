import { CartContext } from '../../contexts/cart.context';
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { React, Fragment, useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import Cart from "../../components/cart/cart.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import './navigation.styles.scss';
const Navigation = () => {
    const { isCartOpen } = useContext(CartContext)
    const { currentUser } = useContext(UserContext);
    const signOutHandler = () => {
        signOutUser();
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>

                    {currentUser ?
                        (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        )
                        : (
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <Cart />
                </div>
                {/*//TODO - new way to toggle it means true && true */}
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;