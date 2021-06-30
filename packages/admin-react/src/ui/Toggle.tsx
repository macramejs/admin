import classNames from 'classnames';
import getVariant from './props/variant';
import getSize from './props/size';
import { Switch } from '@headlessui/react';

type ToggleProps = {
    label?: String,
    disabled?: boolean,
    checked?: boolean,
    onChange?: (value: boolean) => void,
    [k: string]: any
}

const Toggle = function ({ 
    label = null, 
    disabled = false, 
    checked = false,
    onChange = (v) => null,
    ...props
}: ToggleProps, context) {
    const variant = getVariant(props);
    const size = getSize(props);

    return (
        <Switch.Group>
            <div className="inline-flex flex-col">
                {('children' in props || label !== null) && 
                    <Switch.Label className="mr-4">
                        {props.children || label}
                    </Switch.Label>
                }
                <Switch
                    checked={checked}
                    onChange={onChange}
                    className={classNames({
                        'relative inline-flex items-center transition-all rounded-full  focus:outline-none focus:ring-4 focus:ring-blue-300': true,
                        'bg-gray-500': !checked,
                        'bg-blue-500':
                            (variant == null && checked) ||
                            (variant == 'blue' && checked),

                        'bg-green-500': variant == 'green' && checked,

                        'bg-red-500': variant == 'red' && checked,

                        'bg-yellow-500': variant == 'yellow' && checked,

                        'text-lg': size == 'lg',
                        'text-base': size == 'md' || size == null,
                        'text-xs': size == 'sm',

                        'w-16': size == 'lg',
                        'w-10': size == 'md' || size == null,
                        'w-8': size == 'sm',

                        'h-8 rounded-lg': size == 'lg',
                        'h-5 rounded-md': size == 'md' || size == null,
                        'h-4 rounded-sm': size == 'sm',
                        [props.className]: true
                    })}
                >
                    <span
                        className={classNames({
                            'inline-block transition-all transform bg-white border-2 rounded-full': true,
                            'w-8 h-8': size == 'lg',
                            'w-5 h-5': size == 'md',
                            'w-4 h-4': size == 'sm',

                            'border-blue-500':
                                (variant == 'blue' && checked) ||
                                (variant == null && checked),
                            'border-green-500': variant == 'green' && checked,
                            'border-yellow-500': variant == 'yellow' && checked,
                            'border-red-500': variant == 'red' && checked,
                            'border-gray-500': !checked,

                            'translate-x-0':
                                (size == 'lg' && !checked) ||
                                (size == 'md' && !checked) ||
                                (size == 'sm' && !checked),

                            'translate-x-8': size == 'lg' && checked,
                            'translate-x-5': size == 'md' && checked,
                            'translate-x-4': size == 'sm' && checked,
                            [props.className]: true
                        })}
                    />
                </Switch>
            </div>
        </Switch.Group>
    );
};

export default Toggle;
