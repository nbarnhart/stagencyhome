// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import('../node_modules/vuetify/docs/vuetify.min.css')
import VeeValidate from 'vee-validate'
import ContactForm from '@/components/ContactForm'


Vue.use(VeeValidate);
Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: '#2196F3',
    secondary: '#757575',
    accent: '#8BC34A',
    error: '#b71c1c'
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
