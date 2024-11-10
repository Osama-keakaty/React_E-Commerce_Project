import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";




const defaultFormData = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''

}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormData);
    const { displayName, email, password, confirmPassword } = formFields;

    const onSubmitHandler = async (event) => {
        // this method prevents the default action that belongs to the event from occurring.
        event.preventDefault();
        if (formFields.password !== formFields.confirmPassword) {
            console.log("passwords are not matched");
            return;
        }
        try {
            // TODO you need to create a user in firebase and import createAuthUserWithEmailAndPassword function
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName, email });
            // the additional object (the second argument ) must contain the same name values in createUserDocumentFromAuth function    
            setFormFields(defaultFormData);
        } catch (error) {
            console.log("error", error.message)
        }
    }
    const onChangeHandlerFunction = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }


    return (
        <div className="sign-up-container">

            <h2>Don't have an account?</h2>
            <span> sign up with your email and password</span>

            <form onSubmit={onSubmitHandler}>
                <FormInput
                    label="Display Name"
                    // this is a new way to pass props
                    inputAttribute={{
                        required: true,
                        name: "displayName",
                        type: "text",
                        onChange: onChangeHandlerFunction,
                        value: displayName
                    }}
                />

                <FormInput
                    label="Email"
                    // this is a new way to pass props
                    inputAttribute={{
                        required: true,
                        name: "email",
                        type: "email",
                        onChange: onChangeHandlerFunction,
                        value: email
                    }}
                />

                <FormInput
                    label="Password"
                    // this is a new way to pass props
                    inputAttribute={{
                        required: true,
                        name: "password",
                        type: "password",
                        onChange: onChangeHandlerFunction,
                        value: password
                    }}
                />

                <FormInput
                    label="Confirm Password"
                    // this is a new way to pass props
                    inputAttribute={{
                        required: true,
                        name: "confirmPassword",
                        type: "password",
                        onChange: onChangeHandlerFunction,
                        value: confirmPassword
                    }}
                />
                <Button
                    children={"SIGN UP"}
                    type='submit' />
            </form>
        </div>
    );
}
export default SignUpForm;