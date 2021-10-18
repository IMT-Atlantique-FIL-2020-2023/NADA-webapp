<template>
  <n-space class="nada-subbar">
    <n-form inline label-placement="left" :show-feedback="false">
      <n-form-item label="Aéroport">
        <n-select
          :value="getAirportId"
          :options="getAirports"
          filterable
          placeholder="Selectionnez un aéroport"
          @update:value="selectAirport"
        />
      </n-form-item>
      <n-form-item>
        <n-button @click="$store.state.analysis.activemap = true">
          <template #icon><mdi-map /></template>
        </n-button>
      </n-form-item>
      <n-form-item style="padding-right: 120px">
        <n-radio-group v-model:value="$store.state.analysis.layout">
          <n-radio-button value="h">Horizontal</n-radio-button>
          <n-radio-button value="v">Vertical</n-radio-button>
        </n-radio-group>
      </n-form-item>
      <n-form-item class="align-right">
        <n-button
          type="info"
          :loading="$store.state.common.loading == 'start'"
          @click="reloadData()"
        >
          <template #icon><mdi-sync /></template>
          Recharger
        </n-button>
      </n-form-item>
    </n-form>
  </n-space>
</template>
<script lang="ts">
  import mdiMap from '~icons/mdi/map'
  import mdiSync from '~icons/mdi/sync'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'SubBar',
    components: { mdiMap, mdiSync },
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
      reloadData(): void {
        this.fetchAirports()
      },
    },
  }
</script>
<style lang="scss" scoped>
  .nada-subbar {
    padding: 0px 20px;
  }
</style>
