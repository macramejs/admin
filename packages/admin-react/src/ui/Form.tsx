import { Form as BaseForm, useForm } from '@macramejs/macrame-react';

export default function Form(props) {
    const form = useForm(props);

    return <BaseForm {...props} form={form} />;
}
