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
export const Content : Component;
export const ContentBody : Component;
export const ContentSidebar : Component;
export const ContextMenu : Component;
export const ContextMenuDivider : Component;
export const ContextMenuItem : Component;
export const ContextButton : Component;
export const Button : Component;
export const ButtonRound : Component;
export const DatePicker : Component;
export const DateRange : Component;
export const Drawer : Component;
export const DrawerSection : Component;
export const InteractionButton : Component;
export const Tab : Component;
export const TabPanel : Component;
export const TabGroup : Component;
export const TabList : Component;
export const Badge : Component;
export const Form : Component;
export const FormField : Component;
export const FormFieldLabel : Component;
export const RadioGroup : Component;


export const Tree : Component;

// TreeItem
export type TTreeItem = DefineComponent<{
    item: any,
    children: object[],
    isActive?: boolean,
    background?: boolean,
    outline?: boolean,
}>;
export declare const TreeItem : TTreeItem;


export const Modal : Component;
export const Checkbox : Component;
export const CheckboxSwitch : Component;
export const Input : Component;
export const Slider : Component;
export const Nested : Component;
export const Search : Component;
export const Select : Component;
export const Section : Component;
export const Sections : Component;

// Sidebar
export type TSidebar = DefineComponent<{
    open: boolean
}>;
export declare const Sidebar : TSidebar;

// SidebarLink
export type TSidebarLink = DefineComponent<{
    title: string,
    href?: string,
    hideTitle?: boolean,
    secondray?: boolean,
    active?: boolean,
}>;
export declare const SidebarLink : TSidebarLink;

// SidebarSection
export type TSidebarSection =  DefineComponent<{
    title?: string,
    expanded?: boolean,
    expandable?: boolean,
}>;
export declare const SidebarSection : TSidebarSection;

// SidebarPrimary
export type TSidebarPrimary = DefineComponent<{
    locked: boolean
}>;
export declare const SidebarPrimary: TSidebarPrimary;

// SidebarSecondary
export type TSidebarSecondary = DefineComponent<{}>;
export declare const SidebarSecondary: TSidebarSecondary;

// SidebarSecondaryHeader
export type TSidebarSecondaryHeader = DefineComponent<{
    title: string
}>;
export declare const SidebarSecondaryHeader: TSidebarSecondaryHeader

export const SidebarSecondarySection : Component;
export const Header : Component;
export const Pagination : Component;
export const Textarea : Component;
export const AuthPages : { [k: string]: Component };
export const Pages : { [k: string]: Component };

export const IconDraggable: Component;
export const IconTrash: Component;
export const IconMoreHorizontal: Component;
export const IconEditPencil: Component;
export const IconCaret: Component;
export const IconAddImage: Component;
export const IconBookStack: Component;
export const IconMediaImageFolder: Component;
export const IconPlus: Component;
export const IconLocked: Component;
export const IconUnlocked: Component;
export const IconPages: Component;
export const IconDashboard: Component;
export const IconList: Component;
export const IconDuplicatePage: Component;
export const IconSettings: Component;
export const IconLogout: Component;
export const IconPartials: Component;
export const IconBlocks: Component;