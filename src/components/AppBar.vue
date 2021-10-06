<template>
  <div class="nada-bar">
    <n-switch v-model:value="dark" @update:value="updateTheme">
      <template #checked><mdi-sun /></template>
      <template #unchecked><mdi-moon /></template>
    </n-switch>
  </div>
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
