import RInput from '../package/input/index.js'

const components = [
  RInput
];
const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name,component)
  })
}

export default {
  "version": "0.1.0",
  install
}