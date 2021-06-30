import { FieldTitle } from '@macramejs/macrame-react';
import FormField from './FormField';

const CheckboxField = function (props) {
    return (
        <FormField {...props}>
            <FieldTitle {...props} />
            {props.children}
        </FormField>
    );
};

export default CheckboxField;
