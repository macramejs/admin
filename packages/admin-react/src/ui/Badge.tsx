import { Checkbox as BaseCheckbox } from '@macramejs/macrame-react';
import classNames from 'classnames';
import getVariant from './props/variant';

const Button = function (props, context) {
    const Tag = 'href' in props ? 'a' : 'button';
    const variant = getVariant(props);

    return (
        <Tag className={classNames({
            'inline-flex items-center justify-center px-2 text-sm rounded-xs': true,
            'bg-blue text-white ': variant == 'blue',
            'bg-gray-700 text-white': variant == 'gray',
            'bg-green text-green-700': variant == 'green',
            'bg-red text-red-700': variant == 'red',
            'bg-yellow text-yellow-700': variant == 'yellow',
            [props.className]: true
        })}>
            {props.children}
        </Tag>
    );
};

export default Button;
