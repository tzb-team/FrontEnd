// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from './httpConfig/url_config'
import Vuex from 'vuex'
import store from './vuex/store'
import echarts from 'echarts'
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
import VueCountdown from '@xkeshi/vue-countdown';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import Progress from 'vue-multiple-progress'
import qs from 'qs'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.use(Progress)
Vue.component(VueCountdown.name, VueCountdown);
Vue.prototype.url_config = '193.112.82.110'
// import store from './store/index'; //引入store


Vue.use(ElementUI)
Vue.use(Vuex);
Vue.use(vueEventCalendar, {locale: 'en'}) //可以设置语言，支持中文和英文

Vue.config.productionTip = false;
Vue.prototype.$axios= axios;
Vue.prototype.$echarts = echarts
Vue.prototype.$qs = qs



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
