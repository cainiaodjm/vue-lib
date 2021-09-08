import Vue from "vue"
import App from "./App.vue"
import ElButton from "./packages/button"
import ElCollapse from './packages/collapse'
import ElCollapseItem from './packages/collapse-item'
import "./style/index.scss"
Vue.use(ElButton)
Vue.use(ElCollapse)
Vue.use(ElCollapseItem)
new Vue({
  el: "#app",
  render: (h) => h(App),
})
