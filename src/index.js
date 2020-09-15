import VueTableDynamicWithScope from './components/VueTableDynamicWithScope.vue'

VueTableDynamicWithScope.install = function (Vue, options) {
  Vue.component('VueTableDynamic', VueTableDynamic)
}

export default VueTableDynamicWithScope
