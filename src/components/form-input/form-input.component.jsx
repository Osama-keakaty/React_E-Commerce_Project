
import './form-input.styles.scss';
const FormInput = ({ label,inputAttribute }) => {

    return (
        <div className="group">
            <input
            className="form-input"
            // pass props to input element
                {... inputAttribute}
                spellCheck={false}
            />
        {
            
        // if label exist render this label 
            label && 
            <label className={`${inputAttribute.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        } 
        
        </div>


    );
}
export default FormInput;