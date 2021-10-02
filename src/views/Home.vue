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
<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    text-align: center;
  }
  .creator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
    color: black;
  }
  .icon {
    color: white;
  }
</style>
