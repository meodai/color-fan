import Vue from 'vue'
import App from './App'
import husl from 'husl'
import Fan from './components/Fan'

/* eslint-disable no-new */
new Vue({
  el: 'html',
  components: {
    App,
    Fan
  }
})

console.log(husl)
