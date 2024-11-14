import { useState, useContext } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInUserWithEmailAndPassword, signOutUser } from '../../utils/firebase/firebase.utils.js';

import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { UserContext } from "../../contexts/user.context.jsx";
const defaultSignInFields = {
    email: '',
    password: ''
}
const SignInForm = () => {
    const { currentUser } = useContext(UserContext);
    const [signInFields, setSignInFields] = useState(defaultSignInFields);
    const { email, password } = signInFields;

    const signInWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
        } catch (error) {
            console.log("there is an error");
        }
    }

    const emailAndPasswordSignIn = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user);
            setSignInFields(defaultSignInFields);
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                console.log("invalid email or password");

            }
            console.log("error", error.message)
        }

    }

    const signOutHandler = () => {
        signOutUser();
    }

    const onChangeSignInHadler = (event) => {
        const { name, value } = event.target;
        setSignInFields({ ...signInFields, [name]: value });
    }

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={emailAndPasswordSignIn}>
                <FormInput
                    label="Email"
                    inputAttribute={{
                        type: "email",
                        name: 'email',
                        required: true,
                        value: email,
                        onChange: onChangeSignInHadler
                    }}
                />
                <FormInput
                    label="Password"
                    inputAttribute={{
                        type: "password",
                        name: 'password',
                        required: true,
                        value: password,
                        onChange: onChangeSignInHadler
                    }}
                />
                <div className="buttons-container">

                    {currentUser ?
                        <Button buttonType={BUTTON_TYPE_CLASSES.signout} children={"SIGN OUT"} onClick={signOutHandler} />
                        :
                        <Button children={"SIGN IN"} type="submit" />
                    }

                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" children={"GOOGLE SIGN IN"} onClick={signInWithGoogle} />
                </div>
            </form>
        </div>
    );
}
export default SignInForm;