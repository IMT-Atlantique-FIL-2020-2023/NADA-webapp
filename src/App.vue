<template>
  <n-config-provider class="nada-main" :theme="$store.state.common.theme">
    <n-global-style />
    <div class="nada-fullheight">
      <app-bar class="nada-header"></app-bar>
      <router-view class="nada-content"></router-view>
      <app-footer class="nada-footer"></app-footer>
    </div>
  </n-config-provider>
</template>

<script lang="ts">
  import AppBar from '@/components/AppBar.vue'
  import AppFooter from './components/AppFooter.vue'
  import '@/assets/global.css'

  export default {
    name: 'App',
    components: { AppBar, AppFooter },
  }
</script>
<style lang="sass"></style>
