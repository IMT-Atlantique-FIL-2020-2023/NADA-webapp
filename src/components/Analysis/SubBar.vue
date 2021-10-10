<template>
  <n-space class="nada-subbar">
    <n-form inline label-placement="left">
      <n-form-item label="Aéroport">
        <n-select
          v-model:value="$store.state.analysis.aeroport"
          :options="$store.state.analysis.aeroports"
          filterable
          placeholder="selectionnez un aéroport"
        />
      </n-form-item>
      <n-form-item>
        <n-button size="large">
          <template #icon><mdi-map /></template>
        </n-button>
      </n-form-item>
    </n-form>
  </n-space>
</template>
<script lang="ts">
  import mdiMap from '~icons/mdi/map'
  import { mapActions } from 'vuex'

  export default {
    name: 'SubBar',
    components: { mdiMap },
    mounted(): void {
      console.log(import.meta.env.VITE_API_URL)
      this.fetchAeroports()
    },
    methods: {
      ...mapActions('analysis', ['fetchAeroports']),
    },
  }
</script>
<style lang="scss" scoped>
  .nada-subbar {
    padding: 0px 20px;
  }
</style>
