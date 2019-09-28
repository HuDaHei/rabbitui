import Vue from 'vue'
import App from './App.vue'
const requireComponent = require.context('../package',true,/\.js$/);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  Vue.component(componentConfig.default.name,componentConfig.default || componentConfig)
  
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
