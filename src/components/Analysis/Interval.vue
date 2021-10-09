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
        v-model:value="$store.state.analysis.measure"
        :options="$store.state.analysis.measures"
        filterable
        placeholder="selectionnez une mesure"
      />
    </n-form-item>
  </n-form>
</template>
<script lang="ts">
  export default {
    name: 'Interval',
  }
</script>
