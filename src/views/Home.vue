<template>
  <v-container>
    <HelloWorld msg="Vue 3 + TypeScript + Vite + Vuetify 3" />
  </v-container>
</template>
<script lang="ts">
  import HelloWorld from '../components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld,
    },
  }
</script>
