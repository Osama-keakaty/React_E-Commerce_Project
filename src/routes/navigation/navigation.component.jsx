import { CartContext } from '../../contexts/cart.context';
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { React, Fragment, useContext } from "react";

// import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import Cart from "../../components/cart/cart.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx';


import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';
const Navigation = () => {
    const { isCartOpen } = useContext(CartContext)
    // const { currentUser } = useContext(UserContext);
    const currentUser = useSelector(selectCurrentUser)
    const signOutHandler = () => {
        signOutUser();
    }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    {currentUser ?
                        (
                            <NavLink as={'span'} onClick={signOutHandler}>SIGN OUT</NavLink>
                        )
                        : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <Cart />
                </NavLinks>
                {/*//TODO - new way to toggle it means true && true */}
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;



//! using Context API 
// import { CartContext } from '../../contexts/cart.context';
// import { Outlet } from "react-router-dom";

// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
// import { React, Fragment, useContext } from "react";

// import { UserContext } from "../../contexts/user.context";
// import { signOutUser } from "../../utils/firebase/firebase.utils";

// import Cart from "../../components/cart/cart.component";
// import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx';
// const Navigation = () => {
//     const { isCartOpen } = useContext(CartContext)
//     const { currentUser } = useContext(UserContext);
//     const signOutHandler = () => {
//         signOutUser();
//     }
//     return (
//         <Fragment>
//             <NavigationContainer>
//                 <LogoContainer to='/'>
//                     <CrwnLogo className='logo' />
//                 </LogoContainer>
//                 <NavLinks>
//                     <NavLink to='/shop'>
//                         SHOP
//                     </NavLink>

//                     {currentUser ?
//                         (
//                             <NavLink as={'span'} onClick={signOutHandler}>SIGN OUT</NavLink>
//                         )
//                         : (
//                             <NavLink to='/auth'>
//                                 SIGN IN
//                             </NavLink>
//                         )
//                     }
//                     <Cart />
//                 </NavLinks>
//                 {/*//TODO - new way to toggle it means true && true */}
//                 {isCartOpen && <CartDropdown />}
//             </NavigationContainer>
//             <Outlet />
//         </Fragment>
//     );
// }
// export default Navigation;