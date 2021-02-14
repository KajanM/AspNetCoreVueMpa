import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

Vue.component('default-layout', () => import(/* webpackChunkName: "layout-container" */ '../components/layout/DefaultLayout.vue'));