import Vue from 'vue'
import App from './App.vue'
// import './rem'
import 'amfe-flexible'
const requireComponent = require.context('../package',true,/\.js$/);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  Vue.component(componentConfig.default.name,componentConfig.default || componentConfig)
  
});
// import rabbits from 'rabbits-ui'
// Vue.use(rabbits)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
