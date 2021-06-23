import { FieldTitle } from '@macramejs/macrame-react';
import { FormInput as BaseFormInput } from '@macramejs/macrame-react';

const FormInput = function (props) {
    return (
        <div>
            <FieldTitle {...props} />
            <BaseFormInput {...props} />
        </div>
    );
};

export default FormInput;
