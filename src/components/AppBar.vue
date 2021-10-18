<template>
  <n-space class="nada-bar">
    <n-space>N.A.D.A</n-space>

    <n-space class="align-right">
      <n-switch
        v-model:value="dark"
        class="theme-switch"
        @update:value="updateTheme"
      >
        <template #checked><mdi-sun /></template>
        <template #unchecked><mdi-moon /></template>
      </n-switch>
    </n-space>
  </n-space>
</template>
<script lang="ts">
  import { mapMutations } from 'vuex'
  import mdiSun from '~icons/mdi/white-balance-sunny'
  import mdiMoon from '~icons/mdi/moon-waning-crescent'

  export default {
    name: 'AppBar',
    components: { mdiSun, mdiMoon },
    data() {
      return {
        dark: false,
      }
    },
    methods: {
      ...mapMutations('common', ['setTheme']),
      updateTheme(): void {
        this.setTheme(this.dark)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .nada-bar {
    padding: 10px;
    width: 100%;
  }
  .theme-switch {
    float: right;
  }
</style>
