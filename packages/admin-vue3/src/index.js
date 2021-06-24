import Button from './ui/Button.vue';
import Card from './ui/Card.vue';
import Badge from './ui/Badge.vue';
import Checkbox from './ui/Checkbox.vue';
import Form from './ui/Form.vue';
import FormCheckboxes from './ui/FormCheckboxes.vue';
import FormInput from './ui/FormInput.vue';
import FormSelect from './ui/FormSelect.vue';
import FormTextarea from './ui/FormTextarea.vue';
import Index from './ui/Index.vue';
import Input from './ui/Input.vue';
import Select from './ui/Select.vue';
import Pagination from './ui/Pagination.vue';
import Table from './ui/Table.vue';
import Textarea from './ui/Textarea.vue';
import BasePage from './pages/BasePage';

const plugin = {
    install(app) {
        app.component('UiCard', Card);
        app.component('UiButton', Button);
        app.component('UiBadge', Badge);
        app.component('UiCheckbox', Checkbox);
        app.component('UiForm', Form);
        app.component('UiFormCheckboxes', FormCheckboxes);
        app.component('UiFormInput', FormInput);
        app.component('UiFormSelect', FormSelect);
        app.component('UiFormTextarea', FormTextarea);
        app.component('UiIndex', Index);
        app.component('UiInput', Input);
        app.component('UiSelect', Select);
        app.component('UiPagination', Pagination);
        app.component('UiTable', Table);
        app.component('UiTextarea', Textarea);
    },
};

const pages = { BasePage };

export { plugin, pages };
