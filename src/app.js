import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import City from './theme/City.vue'

import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/user'
import 'vue-awesome/icons/lock'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/link'
import 'vue-awesome/icons/minus'

Vue.component('icon', Icon)
Vue.component('city', City)

export const serverBus = new Vue()

const app = new Vue({
  render: h => h(AppLayout)
})
export { app }
