import { FieldTitle } from '@macramejs/macrame-react';
import { FormSelect as BaseFormSelect } from '@macramejs/macrame-react';

const FormSelect = function (props) {
    return (
        <div>
            <FieldTitle {...props} />
            <BaseFormSelect {...props} />
        </div>
    );
};

export default FormSelect;
