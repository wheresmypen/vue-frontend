import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons/user'
import 'vue-awesome/icons/lock'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/link'
import 'vue-awesome/icons/check'
import 'vue-awesome/icons/building'
import 'vue-awesome/icons/wrench'
import 'vue-awesome/icons/map'
import 'vue-awesome/icons/book'
import 'vue-awesome/icons/chevron-down'
import 'vue-awesome/icons/sort-amount-asc'
import 'vue-awesome/icons/sort-amount-desc'
import 'vue-awesome/icons/sort-alpha-asc'
import 'vue-awesome/icons/sort-alpha-desc'

Vue.component('icon', Icon)

export const serverBus = new Vue()

const app = new Vue({
  beforeCreate: function () {
    console.log(this.$app)
  },
  // ...AppLayout
  render: h => h(AppLayout)
})

export { app }
