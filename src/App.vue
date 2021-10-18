<template>
  <n-config-provider class="nada-main" :theme="$store.state.common.theme">
    <n-message-provider>
      <n-loading-bar-provider>
        <n-global-style />
        <div class="nada-fullheight">
          <app-bar class="nada-header"></app-bar>
          <alerts></alerts>
          <loader></loader>
          <router-view class="nada-content"></router-view>
          <app-footer class="nada-footer"></app-footer>
        </div>
      </n-loading-bar-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
  import AppBar from '@/components/AppBar.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import Alerts from '@/components/Alerts.vue'
  import Loader from '@/components/Loader.vue'
  import '@/assets/global.css'

  export default {
    name: 'App',
    components: { AppBar, AppFooter, Alerts, Loader },
  }
</script>
<style lang="sass"></style>
