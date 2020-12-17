import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/flexible";
import "./assets/icon/search/iconfont.css";
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
import {
    Button,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Breadcrumb,
    Select,
    Option,
    Cascader,
    BreadcrumbItem,
    Tree,
    TimePicker,
    DatePicker,
    TimeSelect,
    Table,
    TableColumn,
    Pagination,
    Dialog,
    Form,
    FormItem,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Radio,
    RadioGroup,
    RadioButton,
    Switch,
    Upload,
    Divider,
    Tabs,
    MessageBox,
    Message,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Cascader);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tree);
Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Switch);
Vue.use(Upload);
Vue.use(Divider);
Vue.use(Tabs)
import "@/assets/css/common.scss";
import "@/assets/css/el.scss";
import ElementUI from "element-ui";

Vue.use(ElementUI);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false;

import axios from 'axios'
Vue.prototype.$axios = axios;
axios.create({
    baseURL:"/management"
})

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
