import { Listbox, Transition } from '@headlessui/react'

const Select = function ({ options, value, onChange, ...props }) {
	return (
        <Listbox as="div" {...props} onChange={onChange} value={value}>
            <div className="mt-1 relative">
                <Listbox.Button>
                    {value}
                </Listbox.Button>
            </div>
            <Transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <Listbox.Options>
                    {Object.keys(options).map((value) => (
                        <Listbox.Option
                            key={value}
                            value={value}
                        >
                            {options[value]}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
};

export default Select;
