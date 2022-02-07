import { DefineComponent, Component, Plugin } from "vue";

export const DefaultLayout : DefineComponent;
export const DefaultLayoutBurger : DefineComponent;
export const DefaultLayoutHeader : DefineComponent;
export const GuestLayout : DefineComponent;
export const GuestLayoutInput : DefineComponent;

export const pages : { [k: string]: DefineComponent}; 

export const plugin : Plugin;

export type TSidebar = {
    isOpen: boolean;
    show: () => void;
    close: () => void;
    toggle: () => void;
};

export const Index : Component;
export const Table : Component;
export const Tr : Component;
export const Th : Component;
export const Td : Component;
export const Wysiwyg : Component;
export const Card : Component;
export const Toggle : Component;
export const Chip : Component;
export const FileUpload : Component;
export const ChipInput : Component;
export const Button : Component;
export const DatePicker : Component;
export const DateRange : Component;
export const Drawer : Component;
export const DrawerSection : Component;
export const Tab : Component;
export const TabPanel : Component;
export const TabGroup : Component;
export const TabList : Component;
export const Badge : Component;
export const Form : Component;
export const FormField : Component;
export const FormFieldLabel : Component;
export const RadioGroup : Component;
export const List : Component;
export const Modal : Component;
export const Checkbox : Component;
export const CheckboxSwitch : Component;
export const Input : Component;
export const Slider : Component;
export const Nested : Component;
export const Search : Component;
export const Select : Component;
export const Sections : Component;
export const Sidebar : Component;
export const SidebarLink : Component;
export const SidebarSection : Component;
export const SidebarPrimary : Component;
export const SidebarSecondary : Component;
export const Pagination : Component;
export const Textarea : Component;
export const AuthPages : { [k: string]: Component };
export const Pages : { [k: string]: Component };