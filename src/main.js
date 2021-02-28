import Vue from 'vue'
import App from '@/App.vue'
import router from '@router'
import store from '@/store'
import VueMeta from 'vue-meta'
import '@/registerServiceWorker'
import { myMixins } from '@/mixins'
import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'

// Plugins
import i18n from '@/i18n'
import '@/plugins/fontAwesome'
import '@/plugins/bootstrap'

Vue.mixin(myMixins)

Vue.use(VueMeta)

// vue-donut-chart
Vue.use(Donut)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
