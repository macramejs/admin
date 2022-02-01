import Button from './ui/Button.vue';
import Card from './ui/Card.vue';
import Toggle from './ui/Toggle.vue';
import Chip from './ui/Chip.vue';
import Badge from './ui/Badge.vue';
import Drawer from './ui/Drawer.vue';
import DrawerSection from './ui/DrawerSection.vue';
import Tab from './ui/Tab.vue';
import TabPanel from './ui/TabPanel.vue';
import TabGroup from './ui/TabGroup.vue';
import Form from './ui/Form.vue';
import FormField from './ui/FormField.vue';
import FormFieldLabel from './ui/FormFieldLabel.vue';
import Modal from './ui/Modal.vue';
import CheckboxSwitch from './ui/CheckboxSwitch.vue';
import Checkbox from './ui/Checkbox.vue';
import FormCheckboxes from './ui/FormCheckboxes.vue';
import DatePicker from './ui/DatePicker.vue';
import DateRange from './ui/DateRange.vue';
import RadioGroup from './ui/RadioGroup.vue';
import Index from './ui/Index.vue';
// import Slider from './ui/Slider.vue';
import Input from './ui/Input.vue';
// import Nested from './ui/Nested.vue';
import List from './ui/List.vue';
import Search from './ui/Search.vue';
import Select from './ui/Select.vue';
import Sidebar from './ui/Sidebar.vue';
import SidebarLink from './ui/SidebarLink.vue';
import SidebarSection from './ui/SidebarSection.vue';
import SidebarPrimary from './ui/SidebarPrimary.vue';
import SidebarSecondary from './ui/SidebarSecondary.vue';
import Pagination from './ui/Pagination.vue';
import Table from './ui/Table.vue';
import Textarea from './ui/Textarea.vue';
import Tr from './ui/Tr.vue';
import Th from './ui/Th.vue';
import Td from './ui/Td.vue';
// import Wysiwyg from './ui/Wysiwyg.vue';

const plugin = {
    install(app) {
        app.component('UiCard', Card);
        app.component('UiToggle', Toggle);
        app.component('UiButton', Button);
        app.component('UiBadge', Badge);
        app.component('UiForm', Form);
        app.component('UiModal', Modal);
        app.component('UiCheckbox', Checkbox);
        app.component('UiFormCheckboxes', FormCheckboxes);
        // app.component('UiFormSelect', FormSelect);
        // app.component('UiFormTextarea', FormTextarea);
        app.component('UiRadioGroup', RadioGroup);
        app.component('UiIndex', Index);
        app.component('UiInput', Input);
        app.component('UiSelect', Select);
        app.component('UiSidebar', Sidebar);
        app.component('UiPagination', Pagination);
        app.component('UiTable', Table);
        app.component('UiTextarea', Textarea);
    },
};

export { plugin };

import DefaultLayout from './layouts/default/DefaultLayout.vue';
import DefaultLayoutHeader from './layouts/default/DefaultLayoutHeader.vue';
import DefaultLayoutBurger from './layouts/default/DefaultLayoutBurger.vue';

export {
    DefaultLayout,
    DefaultLayoutHeader,
    DefaultLayoutBurger
};

import GuestLayout from './layouts/guest/GuestLayout.vue';
import GuestLayoutInput from './layouts/guest/GuestLayoutInput.vue';

export {
    GuestLayout,
    GuestLayoutInput
};

import LoginPage from './pages/Login.vue';
import ForgotPasswordPage from './pages/ForgotPassword.vue';
import ResetPasswordPage from './pages/ResetPassword.vue';

const AuthPages = {
    "Auth/Login": LoginPage,
    "Auth/ForgotPassword": ForgotPasswordPage,
    "Auth/ResetPassword": ResetPasswordPage,
}

const Pages = { ...AuthPages };

export { Pages, AuthPages };

// Components
export {
    Card,
    Toggle,
    Chip,
    Button,
    Badge,
    Drawer,
    DrawerSection,
    Tab,
    TabPanel,
    TabGroup,
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
    // Slider,
    // Nested,
    List,
    Search,
    Select,
    Sidebar,
    SidebarLink,
    SidebarSection,
    SidebarPrimary,
    SidebarSecondary,
    RadioGroup,
    Pagination,
    Textarea,
    Table, Tr, Th, Td,
    // Wysiwyg
};
