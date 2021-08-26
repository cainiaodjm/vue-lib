import Vue from "vue"
import App from "./App.vue"
import ElButton from "./packages/button"
Vue.use(ElButton)
new Vue({
  el: "#app",
  render: (h) => h(App),
})
