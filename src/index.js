
import Vue from 'vue';
import HomeApp from './components/home-app/home-app.vue'
import moment from 'moment';

import './style/main.scss';


 var App = new Vue({ 
    el: '#app', 
    // router, 
    // render: h => h(App),
    data: {
        message : 'hello'
    },
    components: {
        HomeApp
    }
});

Vue.component('home-app', HomeApp);