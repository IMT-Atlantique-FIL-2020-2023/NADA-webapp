<template>
  <n-form inline label-placement="left">
    <n-form-item label="Période">
      <n-date-picker
        v-model:value="range"
        type="daterange"
        :update-value-on-close="true"
        clearable
      />
    </n-form-item>
    <n-form-item label="Journée">
      <n-switch v-model:value="day" />
    </n-form-item>
  </n-form>
</template>
<script lang="ts">
  export default {
    name: 'Interval',
    data(): any {
      return {
        range: null,
        day: false,
      }
    },
  }
</script>
