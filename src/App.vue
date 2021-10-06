<template>
  <n-config-provider :theme="$store.common.state.theme">
    <n-layout-header>
      <app-bar></app-bar>
    </n-layout-header>
    <n-layout-content>
      <router-view></router-view>
    </n-layout-content>
    <n-layout-footer>
      <app-footer></app-footer>
    </n-layout-footer>
  </n-config-provider>
</template>

<script lang="ts">
  import AppBar from '@/components/AppBar.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    name: 'App',
    components: {
      AppBar,
      AppFooter,
    },
  }
</script>
<style lang="sass"></style>
