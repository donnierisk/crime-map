import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDnkCpz57JyEC6kQ4rqIJglbsy_1mJXzc0',
  },
 })

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
