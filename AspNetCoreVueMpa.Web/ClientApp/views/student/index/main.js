import Vue from 'vue'
import StudentIndex from "./StudentIndex.vue";

import '../../../utils/app-init.js';

const app = new Vue({
  el: '#app',
  render: h => h(StudentIndex)
})
