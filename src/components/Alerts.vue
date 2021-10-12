<template>
  <div></div>
</template>
<script lang="ts">
  import { useMessage } from 'naive-ui'
  export default {
    name: 'Alerts',
    setup(): any {
      const message = useMessage()
      return {
        error(value: string) {
          message.error(value, {
            closable: true,
            duration: 10000,
          })
        },
        info(value: string) {
          message.info(value, {
            closable: true,
            duration: 10000,
          })
        },
      }
    },
    data(): any {
      return { message: null }
    },
    watch: {
      '$store.state.common.error'(value: string): void {
        this.error(value)
      },
      '$store.state.common.info'(value: string): void {
        this.info(value)
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
