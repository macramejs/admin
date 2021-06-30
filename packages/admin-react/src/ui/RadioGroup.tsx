import classNames from 'classnames';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';

type RadioGroupProps = {
    labelKey?: string,
    valueKey?: string,
    disabledKey?: string,
    options?: string[] | number[] | {[k: string]: any}[],
    onChange?: (value: any) => void,
    value?: string | number | any,
    [k: string]: any
}

const RadioGroup = function ({ 
    labelKey = null, 
    valueKey = null, 
    disabledKey = null, 
    options = [], 
    value = null,
    onChange = (v) => null,
    ...props
}: RadioGroupProps, context) {

    const optionValue = (option) => {
        if (valueKey === null) {
            return option;
        }

        return option[valueKey];
    };

    const optionLabel = (option) => {
        if (labelKey === null) {
            return option;
        }

        return option[labelKey];
    };

    const isDisabled = (option) => {
        if (disabledKey === null) {
            return false;
        }

        return option[disabledKey] == true;
    };

    return (
        <HeadlessRadioGroup value={value} onChange={onChange}>
            {options.map((option, index) => (
                <HeadlessRadioGroup.Option
                    key={index}
                    value={optionValue(option)}
                    disabled={isDisabled(option)}
                >
                    {({ checked, disabled }) => (
                        <div className="flex">
                            <div className="flex items-center w-6 h-6">
                                <div
                                    className={classNames({
                                        'flex items-center justify-center w-3.5 h-3.5 border rounded-lg': true,
                                        'bg-blue': checked && !disabled,
                                        'bg-gray-700': checked && disabled,
                                        'border-gray-700': !disabled,
                                        'border-gray-600': disabled,
                                    })}
                                >
                                    <div className="w-1 h-1 bg-white rounded-lg"></div>
                                </div>
                            </div>
                            <HeadlessRadioGroup.Label
                                as="p"
                                className={classNames('flex-1 cursor-pointer', {
                                    'text-gray-600': disabled
                                })}
                            >
                                {optionLabel(option)}
                            </HeadlessRadioGroup.Label>
                        </div>
                    )}
                </HeadlessRadioGroup.Option>
            ))}
        </HeadlessRadioGroup>
    );
};

export default RadioGroup;
