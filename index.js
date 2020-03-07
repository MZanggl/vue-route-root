function findRouteRoot(instance) {
  if (instance.$route && instance.$route.matched.length > 0) {
    return instance.$route.matched[0].instances.default
  }
}

function install(Vue) {
  Vue.mixin({
    computed: {
      $routeRoot() {
        return findRouteRoot(this)
      }
    },
  });
}

function mapRoot(keys) {
  const mapped = {}
  for (const key of keys) {
      mapped[key] = function mapRootKeyComputed(instance) {
        const routeRoot = findRouteRoot(instance)
        const root = routeRoot && typeof routeRoot[key] !== 'undefined' ? routeRoot : instance.$root
        return root[key]
      }
  }
  return mapped
}

module.exports = {
  install,
  mapRoot,
}
