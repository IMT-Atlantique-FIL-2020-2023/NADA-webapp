<template>
  <div id="drawer-target" :class="cclass">
    <slot name="content"> </slot>
  </div>
  <n-drawer
    v-model:show="active"
    placement="top"
    to="#drawer-target"
    style="height: 100%"
  >
    <n-drawer-content :closable="true" :title="dtitle">
      <slot name="drawer"></slot>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
  export default {
    name: 'Drawer',
    props: {
      side: { type: Number, default: null },
      cclass: { type: String, default: '' },
      dtitle: { type: String, default: '' },
    },
    computed: {
      active: {
        get: function (): any {
          return this.$store.state.analysis.activemap
        },
        set: function (value: boolean): void {
          this.$store.state.analysis.activemap = value
        },
      },
    },
  }
</script>
