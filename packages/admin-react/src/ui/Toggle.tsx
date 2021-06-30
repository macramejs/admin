import classNames from 'classnames';
import getVariant from './props/variant';
import getSize from './props/size';
import { useState } from 'react'
import { Switch } from '@headlessui/react';

type ToggleProps = {
    label?: String,
    disabled?: boolean,
    [k: string]: any
}

const Toggle = function ({ 
    label = '', 
    disabled = false, 
    ...props
}: ToggleProps, context) {
    const variant = getVariant(props);
    const size = getSize(props);
    const [modelValue, setModelValue] = useState(false);

    return (
        <Switch.Group>
            <div className="inline-flex flex-col">
            <Switch.Label className="mr-4">
                <slot> {{ label }} </slot>
            </Switch.Label>
            <Switch
                checked={modelValue}
                onChange={setModelValue}
                className={classNames({
                    'relative inline-flex items-center transition-all rounded-full  focus:outline-none focus:ring-4 focus:ring-blue-300': true,
                    'bg-gray-500': !modelValue,
                    'bg-blue-500':
                        (variant == null && modelValue) ||
                        (variant == 'blue' && modelValue),

                    'bg-green-500': variant == 'green' && modelValue,

                    'bg-red-500': variant == 'red' && modelValue,

                    'bg-yellow-500': variant == 'yellow' && modelValue,

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
                            (variant == 'blue' && modelValue) ||
                            (variant == null && modelValue),
                        'border-green-500': variant == 'green' && modelValue,
                        'border-yellow-500': variant == 'yellow' && modelValue,
                        'border-red-500': variant == 'red' && modelValue,
                        'border-gray-500': !modelValue,

                        'translate-x-0':
                            (size == 'lg' && !modelValue) ||
                            (size == 'md' && !modelValue) ||
                            (size == 'sm' && !modelValue),

                        'translate-x-8': size == 'lg' && modelValue,
                        'translate-x-5': size == 'md' && modelValue,
                        'translate-x-4': size == 'sm' && modelValue,
                        [props.className]: true
                    })}
                />
            </Switch>
        </div>
        </Switch.Group>
    );
};

export default Toggle;
