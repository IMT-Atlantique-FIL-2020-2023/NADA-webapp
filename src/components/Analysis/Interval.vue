<template>
  <n-form inline label-placement="left">
    <n-form-item label="Période">
      <n-date-picker
        v-model:value="$store.state.analysis.period"
        type="daterange"
        :update-value-on-close="true"
        @update:value="fetchSensors()"
      />
    </n-form-item>

    <n-form-item label="Journée">
      <n-switch v-model:value="$store.state.analysis.day" />
    </n-form-item>

    <n-form-item label="Mesure à afficher">
      <n-select
        :value="getMeasurementId"
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
      ...mapGetters('analysis', [
        'getMeasurements',
        'getMeasurement',
        'getMeasurementId',
      ]),
    },
    methods: {
      ...mapActions('analysis', ['selectSensorByMesureId', 'fetchSensors']),
      selectMeasurement(value: any): void {
        this.selectSensorByMesureId(value)
      },
    },
  }
</script>
