import Vue from 'vue'

import Icon from './Icon.vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import Input from './Input.vue'
import Row from './Grid/Row.vue'
import Col from './Grid/Col.vue'
import Layout from './Layout/Layout.vue'
import Header from './Layout/Header.vue'
import Sider from './Layout/Sider.vue'
import Content from './Layout/Content.vue'
import Footer from './Layout/Footer.vue'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)

import toastPlugin from './plugins/toastPlugin.js'

Vue.use(toastPlugin)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: '你好世界'
  },
  mounted() {
  },
  methods: {
    // onInput(event) {
    //   console.log(event.target.value)
    // },
    // onChange(event) {
    //   console.log(event.target.value)
    // },
    // onFocus(event) {
    //   console.log(event.target.value)
    // },
    // onBlur(event) {
    //   console.log(event.target.value)
    // }

    showToast(position) {
      this.$toast(`时上了飞九分零四-${parseInt(Math.random() * 100)}`, {
        autoClose: true,
        closeDelay: 2,
        position,
        closeButton: {
          text: '关闭',
          callback(toast) {
            toast.log()
          }
        }
      })
    },
  }
})
