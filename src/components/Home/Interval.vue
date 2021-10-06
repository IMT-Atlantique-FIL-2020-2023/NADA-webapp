<template>
  <n-form inline label-placement="left">
    <n-form-item label="Période">
      <n-date-picker
        v-model:value="timestamp"
        type="daterange"
        :update-value-on-close="true"
        clearable
      />
    </n-form-item>
    <n-form-item label="Journée">
      <n-switch v-model:value="active" />
    </n-form-item>
  </n-form>
</template>
<script lang="ts">
  export default {
    name: 'Interval',
  }
</script>
