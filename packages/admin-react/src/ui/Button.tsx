import classNames from 'classnames';
import getVariant from './props/variant';
import getSize from './props/size';

type ButtonProps = {
    text?: boolean,
    square?: boolean,
    outline?: boolean,
    disabled?: boolean,
    [k: string]: any
}

const Button = function ({ 
    text = false, 
    square = false, 
    outline = false, 
    disabled = false, 
    ...props
}: ButtonProps, context) {
    const Tag = 'href' in props ? 'a' : 'button';
    const variant = getVariant(props);
    const size = getSize(props);

    return (
        <Tag className={classNames({
            'inline-flex items-center justify-center focus:outline-none': true,

            'focus:ring': !text && !disabled,

            'text-lg': size == 'lg',
            'text-base': size == 'md',
            'text-xs': size == 'sm',

            'w-12': square && size == 'lg',
            'w-10': square && size == 'md',
            'w-7': square && size == 'sm',

            'h-12 rounded-lg': size == 'lg' && !text,
            'h-10 rounded-md': size == 'md' && !text,
            'h-7 rounded-sm': size == 'sm' && !text,

            'px-6': size == 'lg' && !square && !text,
            'px-5': size == 'md' && !square && !text,
            'px-4': size == 'sm' && !square && !text,

            'bg-gray-300 text-gray-600 cursor-default':
                disabled && !outline && !text,

            'bg-blue hover:bg-blue-700 active:bg-blue-800 text-white focus:ring-blue-400 shadow':
                variant == 'blue' && !outline && !text && !disabled,
            'bg-white hover:bg-blue-100 active:bg-blue-300 text-blue hover:text-blue-600 active:text-blue-700 border border-blue focus:ring-blue-400':
                variant == 'blue' && outline && !text && !disabled,
            'text-blue hover:text-blue-700 active:text-blue-900 border-b border-blue':
                variant == 'blue' && text && !disabled,

            'bg-gray-700 hover:bg-gray-800 active:bg-gray-900 focus:ring-gray-400 text-white':
                variant == 'gray' && !outline && !text && !disabled,
            'bg-white hover:bg-gray-300 active:bg-gray-500 border border-gray-700 text-gray-700 focus:ring-gray-400':
                variant == 'gray' && outline && !text && !disabled,
            'text-gray hover:text-gray-700 active:text-gray-900 border-b border-gray':
                variant == 'gray' && text && !disabled,

            'bg-green hover:bg-green-700 active:bg-green-800 focus:ring-green-400 text-white':
                variant == 'green' && !outline && !text && !disabled,
            'bg-white hover:bg-green-100 active:bg-green-300 text-green hover:text-green-600 active:text-green-700 border border-green focus:ring-green-400':
                variant == 'green' && outline && !text && !disabled,
            'text-green hover:text-green-700 active:text-green-900 border-b border-green':
                variant == 'green' && text && !disabled,

            'bg-red hover:bg-red-500 active:bg-red-600 focus:ring-red-400 text-white':
                variant == 'red' && !outline && !text && !disabled,
            'bg-white hover:bg-red-100 active:bg-red-300 text-red hover:text-red-600 active:text-red-700 border border-red focus:ring-red-400':
                variant == 'red' && outline && !text && !disabled,
            'text-red hover:text-red-700 active:text-red-900 border-b border-red':
                variant == 'red' && text && !disabled,

            'bg-yellow hover:bg-yellow-700 active:bg-yellow-800 focus:ring-yellow-400 text-white':
                variant == 'yellow' && !outline && !text && !disabled,
            'bg-white hover:bg-yellow-100 active:bg-yellow-300 text-yellow hover:text-yellow-600 active:text-yellow-700 border border-yellow focus:ring-yellow-400':
                variant == 'yellow' && outline && !text && !disabled,
            'text-yellow hover:text-yellow-700 active:text-yellow-900 border-b border-yellow':
                variant == 'yellow' && text && !disabled,
            [props.className]: true
        })}>
            {props.children}
        </Tag>
    );
};

export default Button;
