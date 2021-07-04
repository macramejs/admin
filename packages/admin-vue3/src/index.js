import Button from './ui/Button.vue';
import Card from './ui/Card.vue';
import Toggle from './ui/Toggle.vue';
import Badge from './ui/Badge.vue';
import Form from './ui/Form.vue';
import Checkbox from './ui/Checkbox.vue';
import FormCheckboxes from './ui/FormCheckboxes.vue';
import FormInput from './ui/FormInput.vue';
import FormSelect from './ui/FormSelect.vue';
import FormTextarea from './ui/FormTextarea.vue';
import RadioGroup from './ui/RadioGroup.vue';
import Index from './ui/Index.vue';
import Input from './ui/Input.vue';
import Select from './ui/Select.vue';
import Sidebar from './ui/Sidebar.vue';
import Pagination from './ui/Pagination.vue';
import Table from './ui/Table.vue';
import Textarea from './ui/Textarea.vue';
import Dropdown from './ui/Dropdown.vue';
import DropdownItem from './ui/DropdownItem.vue';
import DropdownGroup from './ui/DropdownGroup.vue';
import DropdownDivider from './ui/DropdownDivider.vue';

import BasePage from './pages/BasePage';

const plugin = {
    install(app) {
        app.component('UiCard', Card);
        app.component('UiToggle', Toggle);
        app.component('UiButton', Button);
        app.component('UiBadge', Badge);
        app.component('UiForm', Form);
        app.component('UiCheckbox', Checkbox);
        app.component('UiFormCheckboxes', FormCheckboxes);
        app.component('UiFormInput', FormInput);
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
        app.component('UiDropdown', Dropdown);
        app.component('UiDropdownItem', DropdownItem);
        app.component('UiDropdownGroup', DropdownGroup);
        app.component('UiDropdownDivider', DropdownDivider);
    },
};

const pages = { BasePage };

export { plugin, pages };
