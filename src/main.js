import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(VueRouter);


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

}).$mount('#app')

$.material.init();
