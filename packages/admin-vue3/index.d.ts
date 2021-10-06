import { DefineComponent, Component, Plugin } from "vue";

export const Layout : DefineComponent;

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
export const Card : Component;
export const Toggle : Component;
export const Button : Component;
export const Badge : Component;
export const Form : Component;
export const Modal : Component;
export const Checkbox : Component;
export const Input : Component;
export const Select : Component;
export const Sidebar : Component;
export const Pagination : Component;
export const Textarea : Component;