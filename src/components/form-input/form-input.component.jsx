
import { FormInputLabel, Input, Group } from './form-input.styles.jsx';
const FormInput = ({ label, inputAttribute }) => {

    return (
        <Group>
            <Input
                // pass props to input element
                {...inputAttribute} spellCheck={false} />
            {label &&
                // if label exist render this label 
                /* <label className={`${inputAttribute.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> */ 
                    (
                        <FormInputLabel shrink={inputAttribute.value.length}>
                        {label}
                        </FormInputLabel>

                    )}
        </Group>


    );
}
export default FormInput;