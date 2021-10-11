<template>
  <n-space class="nada-subbar">
    <n-form inline label-placement="left">
      <n-form-item label="Aéroport">
        <n-select
          v-model:value="$store.state.analysis.aeroport"
          :options="getAirports"
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
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'SubBar',
    components: { mdiMap },
    computed: {
      ...mapGetters('analysis', ['getAirports', 'getAirport']),
    },
    mounted(): void {
      this.fetchAirports()
    },
    methods: {
      ...mapActions('analysis', ['fetchAirports', 'selectAirportById']),
    },
  }
</script>
<style lang="scss" scoped>
  .nada-subbar {
    padding: 0px 20px;
  }
</style>
