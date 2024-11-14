import { BaseButton, 
    InvertedButton, 
    SignOutButton,
     GoogleSignInButton
     } from './button.styles';
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
    signout: 'signout'
}
const getButton = (buttontype=BUTTON_TYPE_CLASSES.base)=> (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.signout]: SignOutButton,
    }[buttontype]);
    


const Button = ({ children, buttonType, ...otherProps }) => {
    // TODO this way to change the state of the Tag that extend some features from the main one
    const CustomButton = getButton(buttonType)
    console.log(CustomButton)
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    );
}

export default Button;