import classNames from 'classnames';
import { Menu } from '@headlessui/react'

type DropdownProps = {
    as?: string | any,
    text?: string | JSX.Element,
    left?: boolean,
    right?: boolean,
    [k: string]: any
}

type DropdownGroupProps = {
    title?: string,
    [k: string]: any
}

type DropdownItemProps = {
    href?: string,
    [k: string]: any
}


const Divider = () => (
    <div className="h-px my-2 -mx-2 bg-gray-200"></div>
)

const Group = ({
    title = null,
    ...props
}: DropdownGroupProps) => (
    <div className="dropdown-group">
        <div className="px-2 pt-2 text-xs text-gray-600">
            {title}
        </div>
        {props.children}
    </div>
)

const Item = ({
    href = null,
    ...props
}: DropdownItemProps) => {
    const Tag = href ? 'a' : 'button';
    return (
        <Menu.Item v-slot="{ active }">
            {({ active }) => (
                <Tag
                    href={href}
                    className={classNames({
                        'bg-gray text-white': active,
                        'text-gray-900' : !active,
                        'dropdown-menu-item group flex rounded-sm items-center w-full px-2 py-2 text-sm': true,
                    })}
                >
                    {props.children}
                </Tag>
            )}
        </Menu.Item>
    );
}

const Dropdown = ({ 
    text = null, 
    left = false, 
    right = false,
    as = "div",
    ...props
}: DropdownProps, context) => (
    <div className="text-left">
        <Menu as="div" className="relative inline-block">
            <Menu.Button as={as}>{text}</Menu.Button>

            <Menu.Items
                className={classNames({
                    'left-0 origin-top-left': left || !right,
                    'right-0 origin-top-right': !left || right,
                    'absolute w-56 p-2 bg-white rounded-md shadow  dropdown-menu-items focus:outline-none': true
                })}
            >
                {props.children}
            </Menu.Items>
        </Menu>
    </div>
);

Dropdown.Divider = Divider;
Dropdown.Group = Group;
Dropdown.Item = Item;

export default Dropdown;
