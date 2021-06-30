import Button from './ui/Button';
import Card from './ui/Card';
import Checkbox from './ui/Checkbox';
import Form from './ui/Form';
import FormCheckboxes from './ui/FormCheckboxes';
import FormInput from './ui/FormInput';
import FormSelect from './ui/FormSelect';
import FormTextarea from './ui/FormTextarea';
import Index from './ui/Index';
import IndexSearch from './ui/IndexSearch';
import Input from './ui/Input';
import Select from './ui/Select';
import Toggle from './ui/Toggle';
import Textarea from './ui/Textarea';
import BasePage from './pages/BasePage';

const plugin = {
    install(addComponent) {
        addComponent('ui-checkbox', Checkbox);
        addComponent('ui-card', Card);
        addComponent('ui-form', Form);
        addComponent('ui-form-checkboxes', FormCheckboxes);
        addComponent('ui-form-input', FormInput);
        addComponent('ui-form-select', FormSelect);
        addComponent('ui-form-textarea', FormTextarea);
        addComponent('ui-index', Index);
        addComponent('ui-index-search', IndexSearch);
        addComponent('ui-input', Input);
        addComponent('ui-select', Select);
        addComponent('ui-textarea', Textarea);
        addComponent('ui-toggle', Toggle);
    },
};

const pages = { BasePage };

export { 
    plugin, 
    pages, 
    Button,
    Card,
    Toggle
};
