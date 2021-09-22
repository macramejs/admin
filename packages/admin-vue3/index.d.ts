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