## Vue route root
### Installation

> `npm install vue-route-root`

There are two ways you can use this plugin

## First way

**This requires vue-router to be installed!**
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

## Second way

Without registering a plugin in Vue you can map root and routeRoot properties to your local component.

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
  {{ isOpen ? 'It is open' : 'It is closed' }}
</template>

<script>
import { mapRoot } from 'vue-route-root'

export default {
  computed: mapRoot(['isOpen']) // you can put the keys of data, props, computed and methods here
}
</script>
```

mapRoot will both look in the top root as well as the route root if you have vue-router installed.

If you have your own set of computed fields in the local component, you have to destructure the result of `mapRoot`:

```javascript
export default {
  computed: {
    ...mapRoot(['isOpen']),
  also() {
    return 'no problem'
  }
}
```