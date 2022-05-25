import Button from './ui/Button.vue';
import Header from './ui/Header.vue';
import ButtonRound from './ui/ButtonRound.vue';
import Card from './ui/Card.vue';
import Toggle from './ui/Toggle.vue';
import Chip from './ui/Chip.vue';
import FileUpload from './ui/FileUpload.vue';
import ChipInput from './ui/ChipInput.vue';
import Content from './ui/Content.vue';
import ContentBody from './ui/Content.vue';
import ContentSidebar from './ui/ContentSidebar.vue';
import ContextMenu from './ui/ContextMenu.vue';
import ContextMenuDivider from './ui/ContextMenuDivider.vue';
import ContextMenuItem from './ui/ContextMenuItem.vue';
import ContextButton from './ui/ContextButton.vue';
import Badge from './ui/Badge.vue';
import Drawer from './ui/Drawer.vue';
import DrawerSection from './ui/DrawerSection.vue';
import Tab from './ui/Tab.vue';
import TabPanel from './ui/TabPanel.vue';
import TabGroup from './ui/TabGroup.vue';
import TabList from './ui/TabList.vue';
import Form from './ui/Form.vue';
import FormField from './ui/FormField.vue';
import FormFieldLabel from './ui/FormFieldLabel.vue';
import Modal from './ui/Modal.vue';
import CheckboxSwitch from './ui/CheckboxSwitch.vue';
import Checkbox from './ui/Checkbox.vue';
import DatePicker from './ui/DatePicker.vue';
import DateRange from './ui/DateRange.vue';
import RadioGroup from './ui/RadioGroup.vue';
import Index from './ui/Index.vue';
import InteractionButton from './ui/InteractionButton.vue';
// import Slider from './ui/Slider.vue';
import Input from './ui/Input.vue';
// import Nested from './ui/Nested.vue';
import Tree from './ui/Tree.vue';
import TreeItem from './ui/TreeItem.vue';
import Search from './ui/Search.vue';
import Select from './ui/Select.vue';
import Section from './ui/Section.vue';
import Sections from './ui/Sections.vue';
import Sidebar from './ui/Sidebar.vue';
import SidebarLink from './ui/SidebarLink.vue';
import SidebarSection from './ui/SidebarSection.vue';
import SidebarPrimary from './ui/SidebarPrimary/SidebarPrimary.vue';
import SidebarSecondary from './ui/SidebarSecondary.vue';
import SidebarSecondarySection from './ui/SidebarSecondarySection.vue';
import Pagination from './ui/Pagination.vue';
import Table from './ui/Table.vue';
import Textarea from './ui/Textarea.vue';
import Tr from './ui/Tr.vue';
import Th from './ui/Th.vue';
import Td from './ui/Td.vue';
import Wysiwyg from './ui/Wysiwyg.vue';

import DefaultLayout from './layouts/default/DefaultLayout.vue';
import DefaultLayoutHeader from './layouts/default/DefaultLayoutHeader.vue';
import DefaultLayoutBurger from './layouts/default/DefaultLayoutBurger.vue';

export { DefaultLayout, DefaultLayoutHeader, DefaultLayoutBurger };

import GuestLayout from './layouts/guest/GuestLayout.vue';
import GuestLayoutInput from './layouts/guest/GuestLayoutInput.vue';

export { GuestLayout, GuestLayoutInput };

import LoginPage from './pages/Auth/Login.vue';
import ForgotPasswordPage from './pages/Auth/ForgotPassword.vue';
import ResetPasswordPage from './pages/Auth/ResetPassword.vue';

const AuthPages = {
    'Auth/Login': LoginPage,
    'Auth/ForgotPassword': ForgotPasswordPage,
    'Auth/ResetPassword': ResetPasswordPage,
};

const Pages = {
    auth: AuthPages,
};

export { Pages, AuthPages };

// Icons
export * from './icons';

// Components
export {
    Card,
    Toggle,
    Chip,
    FileUpload,
    ChipInput,
    Content,
    ContentBody,
    ContentSidebar,
    ContextMenu,
    ContextMenuDivider,
    ContextMenuItem,
    ContextButton,
    Button,
    ButtonRound,
    Badge,
    Drawer,
    DrawerSection,
    Tab,
    TabPanel,
    TabGroup,
    TabList,
    Section,
    Sections,
    Form,
    FormField,
    FormFieldLabel,
    Modal,
    Checkbox,
    CheckboxSwitch,
    DatePicker,
    DateRange,
    Index,
    Input,
    InteractionButton,
    // Slider,
    // Nested,
    Tree,
    TreeItem,
    Search,
    Select,
    Header,
    Sidebar,
    SidebarLink,
    SidebarSection,
    SidebarPrimary,
    SidebarSecondary,
    SidebarSecondarySection,
    RadioGroup,
    Pagination,
    Textarea,
    Table,
    Tr,
    Th,
    Td,
    Wysiwyg,
};
