import Vue from 'vue'
import StudentIndex from "./StudentIndex.vue";

const app = new Vue({
  el: '#app',
  render: h => h(StudentIndex)
})
