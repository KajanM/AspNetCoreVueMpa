import Vue from 'vue'
import HelloWorld from "./HelloWorld.vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  render: h => h(HelloWorld)
})
