<template>
  <n-form inline label-placement="left">
    <n-form-item label="Période">
      <n-date-picker
        v-model:value="$store.state.analysis.period"
        type="daterange"
        :update-value-on-close="true"
        clearable
      />
    </n-form-item>

    <n-form-item label="Journée">
      <n-switch v-model:value="$store.state.analysis.day" />
    </n-form-item>

    <n-form-item label="Mesure à afficher">
      <n-select
        :value="$store.state.analysis.measurement"
        :options="getMeasurements"
        filterable
        placeholder="selectionnez une mesure"
        @update:value="selectMeasurement"
      />
    </n-form-item>
  </n-form>
</template>
<script lang="ts">
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Interval',
    computed: {
      ...mapGetters('analysis', ['getMeasurements', 'getMeasurement']),
    },
    methods: {
      ...mapActions('analysis', ['selectSensorByMesureId']),
      selectMeasurement(value: any): void {
        this.selectSensorByMesureId(value)
      },
    },
  }
</script>
