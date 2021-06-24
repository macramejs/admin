import { useEffect, useState } from 'react';

type SizeOptions = {
    DEFAULT?: string,
    only?: string[],
}

export default function getSize(props, options?:SizeOptions) {
    let { 
        DEFAULT = 'md', 
        only = ['sm', 'md', 'lg'], 
    } = options;
    let [size, setSize] = useState(DEFAULT);

    useEffect(() => {
        if (props.variant) {
            setSize(props.size);
        } else if (props.sm && only.includes('sm')) {
            setSize('sm');
        } else if (props.md && only.includes('md')) {
            setSize('md');
        } else if (props.lg && only.includes('lg')) {
            setSize('lg');
        } else {
            setSize('md');
        }
    }, [props]);

    return size || 'md';
}
