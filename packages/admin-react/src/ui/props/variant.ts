import { useEffect, useState } from 'react';

type VariantOptions = {
    DEFAULT?: string
}

export default function getVariant(props, options?: VariantOptions) {
    let { DEFAULT = 'blue' } = options;
    let [variant, setVariant] = useState('blue');

    useEffect(() => {
        if (props.variant) {
            setVariant(props.variant);
        } else if (props.blue) {
            setVariant('blue');
        } else if (props.gray) {
            setVariant('gray');
        } else if (props.green) {
            setVariant('green');
        } else if (props.yellow) {
            setVariant('yellow');
        } else if (props.red) {
            setVariant('red');
        } else {
            setVariant(DEFAULT);
        }
    }, [props]);

    return variant;
}
