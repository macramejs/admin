import { FieldTitle } from '@macramejs/macrame-react';

const FormInput = function (props) {
    return (
        <div>
            <FieldTitle {...props} />
            {props.children}
        </div>
    );
};

export default FormInput;
