import { FieldTitle } from '@macramejs/macrame-react';
import { FormCheckboxes as BaseFormCheckboxes } from '@macramejs/macrame-react';

export default function FormCheckbox(props) {
    return (
        <div>
            <FieldTitle {...props} />
            <BaseFormCheckboxes {...props} />
        </div>
    );
}
