import Vue from 'vue'
import App from './App.vue'
import Home from './components/controllers/Home.vue'
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
    primary: { color: 'cyan',
        hue: 'A700'
    },
    //accent: 'light-blue',
    warn: 'deep-orange',
    background: 'white'
});
/*
Vue.material.registerTheme({
    app: {
        primary: { color: 'indigo',
            hue: 'A200'
        } //'cyan'
    },
    about: {
        primary: 'indigo'
    },
    contact: {
        primary: 'teal'
    }
});
*/
const Task = { template: '<div>bar</div>' }
const routes = [
    { path: '/',   name: 'home', component: Home },
    { path: '/tasks',  name: 'tasks', component:Task }
]

const router = new VueRouter({
    routes
})


const myApp = new Vue({
    router: router,
    render: h => h(App),

}).$mount('#app');
