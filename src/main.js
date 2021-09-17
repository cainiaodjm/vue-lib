import Vue from "vue"
import App from "./App.vue"
import ElButton from "./packages/button"
import ElCollapse from './packages/collapse'
import ElCollapseItem from './packages/collapse-item'
import ElDialog from "./packages/dialog"
import ElCheckbox from "./packages/checkbox"

import "./style/index.scss"
Vue.use(ElButton)
Vue.use(ElCollapse)
Vue.use(ElCollapseItem)
Vue.use(ElDialog)
Vue.use(ElCheckbox)


new Vue({
  el: "#app",
  render: (h) => h(App),
})
