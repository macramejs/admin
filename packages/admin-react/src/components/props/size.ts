import { useEffect, useState } from 'react';

export default function getSize(props) {
    let [size, setSize] = useState('md');

    useEffect(() => {
        if (props.variant) {
            setSize(props.size);
        } else if (props.sm) {
            setSize('sm');
        } else if (props.md) {
            setSize('md');
        } else if (props.lg) {
            setSize('lg');
        } else {
            setSize('md');
        }
    }, [props]);

    return size || 'md';
}
