import Vue from 'vue'
import App from './App.vue'
// import { router } from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    // router,
    vuetify,
    render: h => h(App),
})

// require('./bootstrap');
// window.Vue = require('vue').default;
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// const app = new Vue({
//     el: '#app',
// });
