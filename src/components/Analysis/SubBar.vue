<template>
  <n-space class="nada-subbar">
    <n-form inline label-placement="left">
      <n-form-item label="Aéroport">
        <n-select
          :value="getAirportId"
          :options="getAirports"
          filterable
          placeholder="selectionnez un aéroport"
          @update:value="selectAirport"
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
      ...mapGetters('analysis', ['getAirports', 'getAirport', 'getAirportId']),
    },
    mounted(): void {
      this.fetchAirports()
    },
    methods: {
      ...mapActions('analysis', ['fetchAirports', 'selectAirportById']),
      selectAirport(value: any): void {
        this.selectAirportById(value)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .nada-subbar {
    padding: 0px 20px;
  }
</style>
