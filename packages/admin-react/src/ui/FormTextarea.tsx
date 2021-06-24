import { FieldTitle } from '@macramejs/macrame-react';
import { FormTextarea as BaseFormTextarea } from '@macramejs/macrame-react';

const FormTextarea = function (props) {
    return (
        <div>
            <FieldTitle {...props} />
            <BaseFormTextarea {...props} />
        </div>
    );
};

export default FormTextarea;
