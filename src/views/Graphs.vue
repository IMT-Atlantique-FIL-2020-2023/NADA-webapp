<template>
  <n-tabs default-value="weather" size="large" style="height: 100%">
    <n-tab-pane name="weather" tab="Météo">
      <weather></weather>
    </n-tab-pane>
    <n-tab-pane name="position" tab="Position" style="height: 100%">
      <position style="height: 100%"></position>
    </n-tab-pane>
    <n-tab-pane name="pollution" tab="Pollution">
      <pollution></pollution>
    </n-tab-pane>
  </n-tabs>
</template>
<script lang="ts">
  import Weather from '@/components/Graphs/Weather/Weather.vue'
  import Position from '@/components/Graphs/Position/Position.vue'
  import Pollution from '@/components/Graphs/Pollution/Pollution.vue'

  export default {
    name: 'Graphs',
    components: { Weather, Position, Pollution },
  }
</script>
