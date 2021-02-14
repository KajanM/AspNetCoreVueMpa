import Vue from 'vue'
import HelloWorld from "./HelloWorld.vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.component('default-layout', () => import(/* webpackChunkName: "layout-container" */ '../../../components/layout/DefaultLayout.vue'));

const app = new Vue({
  el: '#app',
  render: h => h(HelloWorld)
})
