import classNames from 'classnames';
import getVariant from './props/variant';
import getSize from './props/size';

type CardProps = {
    as?: string,
    [k: string]: any
}

const Card = function({ 
    as = 'div', 
    ...props
}: CardProps, context) {
    const Tag = as as keyof JSX.IntrinsicElements;
    const variant = getVariant(props, { DEFAULT: 'white' });
    const size = getSize(props, { only: ['sm', 'md'] });

    return (
        <Tag className={classNames({
            'rounded-sm p-6': true,
            'bg-white shadow': variant == 'white',
            'bg-gray-300': variant == 'gray',
            'p-12': size == 'md',
            'p-8': size == 'sm',
            [props.className]: true
        })}>
            {props.children}
        </Tag>
    );
}

export default Card;
