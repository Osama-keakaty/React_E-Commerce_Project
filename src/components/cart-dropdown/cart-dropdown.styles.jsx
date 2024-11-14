import styled from 'styled-components'
import { BaseButton, 
    InvertedButton, 
    SignOutButton,
    GoogleSignInButton
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    ${'' /* //!that means each of button in this component, I want to add this property  */}
    ${BaseButton}, 
    ${InvertedButton}, 
    ${SignOutButton},
    ${GoogleSignInButton} {
        margin-top: auto;
    }
`
export const CartItems = styled.div`
 height: 240px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        appearance: none;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        &::-webkit-scrollbar-thumb {
            background: #888;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
`

export const EmptyMessage = styled.span`
        font-size: 18px;
        margin: 50px auto;
`

    // .cart-dropdown-container {
    // position: absolute;
    // width: 240px;
    // height: 340px;
    // display: flex;
    // flex-direction: column;
    // padding: 20px;
    // border: 1px solid black;
    // background-color: white;
    // top: 90px;
    // right: 40px;
    // z-index: 5;

    //     .empty-message {
    // font-size: 18px;
    // margin: 50px auto;
    //     }
    //     .checkout-btn-container{
    
//         // width: fit-content;
//     }
//     .cart-items {
// height: 240px;
// display: flex;
// flex-direction: column;
// overflow-y: scroll;
// appearance: none;

// &::-webkit-scrollbar {
//     width: 10px;
// }

// /* Track */
// &::-webkit-scrollbar-track {
//     background: #f1f1f1;
// }

// /* Handle */
// &::-webkit-scrollbar-thumb {
//     background: #888;
// }

// /* Handle on hover */
// &::-webkit-scrollbar-thumb:hover {
//     background: #555;
// }
//     }
//! instead we have to import and write each of type of button style from its style file
    // button {
    //     // font-size: 12px;
    //     margin-top: auto;
    // }
// }