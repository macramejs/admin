import classNames from 'classnames';
import getVariant from './props/variant';
import getSize from './props/size';
import { Switch } from '@headlessui/react';

type CheckboxProps = {
    label?: String,
    disabled?: boolean,
    checked?: boolean,
    onChange?: (value: boolean) => void,
    [k: string]: any
}

const Checkbox = function ({
    label = null,
    disabled = false,
    checked = false,
    onChange = (v) => null,
    ...props
}: CheckboxProps) {
    const variant = getVariant(props);
    const size = getSize(props);

    return (
        <Switch
            checked={checked}
            onChange={onChange}
        >
            <div className="inline-flex items-center cursor-pointer">
                <div
                    className={classNames({
                        'bg-blue-500':
                            (variant == null && checked) ||
                            (variant == 'blue' && checked),
                        'bg-green-500': variant == 'green' && checked,
                        'bg-red-400': variant == 'red' && checked,
                        'bg-yellow-400': variant == 'yellow' && checked,
                        'bg-gray-700': variant == 'gray' && checked,
                        'bg-white': !checked,

                        'w-6 h-6': size == 'lg',
                        'w-5 h-5': size == 'md',
                        'w-4 h-4': size == 'sm',

                        'inline-flex items-center justify-center text-white border border-gray-700 rounded-xs': true
                    })}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={classNames('fill-current', {
                            'w-4 h-4': size == 'lg',
                            'w-3 h-3': size == 'md',
                            'w-2.5 h-2.5': size == 'sm',
                        })}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        />
                    </svg>
                </div>
                {('children' in props || label !== null) && 
                    <label className="pt-1 pl-2">{props.children || label}</label>
                }
            </div>
        </Switch>
    );
};

export default Checkbox;
