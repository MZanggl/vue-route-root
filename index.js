function install(Vue) {
  Vue.mixin({
    computed: {
      $routeRoot() {
        if (this.$route && this.$route.matched.length > 0) {
          return this.$route.matched[0].instances.default
        }
      }
    }
  });
}

module.exports = {
  install
}
