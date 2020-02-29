## Vue route root

### Installation

> `npm install vue-route-root`

Use this plugin by calling the `Vue.use()` global method. This has to be done before you start your app with `new Vue()`:

```javascript
import VueRouteRoot from 'vue-route-root'

Vue.use(VueRouteRoot)
```

### Usage

The above adds a computed field via mixins that is accessible from any component.

Access the root of a route from any component like this:

```javascript
this.$routeRoot
```

### Example

```vue
// pages/Index.vue
<template>
  <SubComponent />
</template>
<script>
import SubComponent from './SubComponent'

export default {
  components: { SubComponent },
  data() {
    return { isOpen: false }
  }
}
</script>
```

```vue
// pages/SubComponent.vue
<template>
  {{ $routeRoot.isOpen ? 'It is open' : 'It is closed' }}
</template>

<script>
export default {} // < no props
</script>
```
