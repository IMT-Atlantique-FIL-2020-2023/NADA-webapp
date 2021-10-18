<template>
  <div></div>
</template>
<script lang="ts">
  import { useLoadingBar } from 'naive-ui'
  export default {
    name: 'Loader',
    setup(): any {
      const loading = useLoadingBar()
      return {
        start() {
          loading.start()
        },
        finish() {
          loading.finish()
        },
        error() {
          loading.error()
        },
      }
    },
    watch: {
      '$store.state.common.loading'(value: string): void {
        switch (value) {
          case 'start': {
            this.start()
            break
          }
          case 'finish': {
            this.finish()
            break
          }
          case 'error': {
            this.error()
            break
          }
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  .nada-bar {
    padding: 10px;
    width: 100%;
  }
  .align-right {
    position: absolute;
    right: 20px;
  }
  .theme-switch {
    float: right;
  }
</style>
