import { DefineComponent, Component, Plugin, Ref } from "vue";

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

// Section
export type TSection = DefineComponent<{
    title: string
}>;
export declare const Section : TSection;

// Sections
export type TSections = DefineComponent;
export declare const Sections : TSections;

export declare const hideSections : Ref<boolean>;

// Sidebar
export type TSidebarComp = DefineComponent<{
    open: boolean
}>;
export declare const Sidebar : TSidebarComp;

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


export type TIconDraggable = DefineComponent;
export declare const IconDraggable: TIconDraggable;

export type TIconTrash = DefineComponent;
export declare const IconTrash: TIconTrash;

export type TIconMoreHorizontal = DefineComponent;
export declare const IconMoreHorizontal: TIconMoreHorizontal;

export type TIconEditPencil = DefineComponent;
export declare const IconEditPencil: TIconEditPencil;

export type TIconCaret = DefineComponent;
export declare const IconCaret: TIconCaret;

export type TIconAddImage = DefineComponent;
export declare const IconAddImage: TIconAddImage;

export type TIconBookStack = DefineComponent;
export declare const IconBookStack: TIconBookStack;

export type TIconMediaImageFolder = DefineComponent;
export declare const IconMediaImageFolder: TIconMediaImageFolder;

export type TIconPlus = DefineComponent;
export declare const IconPlus: TIconPlus;

export type TIconLocked = DefineComponent;
export declare const IconLocked: TIconLocked;

export type TIconUnlocked = DefineComponent;
export declare const IconUnlocked: TIconUnlocked;

export type TIconPages = DefineComponent;
export declare const IconPages: TIconPages;

export type TIconDashboard = DefineComponent;
export declare const IconDashboard: TIconDashboard;

export type TIconList = DefineComponent;
export declare const IconList: TIconList;

export type TIconDuplicatePage = DefineComponent;
export declare const IconDuplicatePage: TIconDuplicatePage;

export type TIconSettings = DefineComponent;
export declare const IconSettings: TIconSettings;

export type TIconLogout = DefineComponent;
export declare const IconLogout: TIconLogout;

export type TIconPartials = DefineComponent;
export declare const IconPartials: TIconPartials;

export type TIconBlocks = DefineComponent;
export declare const IconBlocks: TIconBlocks;
