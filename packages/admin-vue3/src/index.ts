import Button from './ui/Button.vue';
import Card from './ui/Card.vue';
import Toggle from './ui/Toggle.vue';
import Badge from './ui/Badge.vue';
import Form from './ui/Form.vue';
import FormField from './ui/FormField.vue';
import FormFieldLabel from './ui/FormFieldLabel.vue';
import Modal from './ui/Modal.vue';
import Checkbox from './ui/Checkbox.vue';
import FormCheckboxes from './ui/FormCheckboxes.vue';
import RadioGroup from './ui/RadioGroup.vue';
import Index from './ui/Index.vue';
import Input from './ui/Input.vue';
import Search from './ui/Search.vue';
import Select from './ui/Select.vue';
import Sidebar from './ui/Sidebar.vue';
import Pagination from './ui/Pagination.vue';
import Table from './ui/Table.vue';
import Textarea from './ui/Textarea.vue';
import Tr from './ui/Tr.vue';
import Th from './ui/Th.vue';
import Td from './ui/Td.vue';

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
        app.component('UiFormSelect', FormSelect);
        app.component('UiFormTextarea', FormTextarea);
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
import DefaultLayoutHeader from './layouts/default/DefaultLayout.vue';
import DefaultLayoutBurger from './layouts/default/DefaultLayout.vue';

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
    Button,
    Badge,
    Form,
    FormField,
    FormFieldLabel,
    Modal,
    Checkbox,
    Index, 
    Input,
    Search,
    Select,
    Sidebar,
    Pagination,
    Textarea,
    Table, Tr, Th, Td,
};
