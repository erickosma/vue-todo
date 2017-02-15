import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import jQuery from 'jquery'
global.jQuery = jQuery
//var Bootstrap = require('bootstrap')

import VueMaterial from 'vue-material';
import '../node_modules/vue-material/dist/vue-material.css'



import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueMaterial)


Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red',
    warn: 'red',
    background: 'grey'
});

const Completa = { template: '<div>bar</div>' }
const routes = [
    { path: '/',   name: 'home', component: Home },
    { path: '/completa',  name: 'completas', component:Completa }
]

const router = new VueRouter({
    routes
})


new Vue({
    router: router,
    render: h => h(App),

}).$mount('#app');
