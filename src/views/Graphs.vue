<template>
  <n-tabs default-value="evolution" size="large" style="height: 100%">
    <n-tab-pane name="evolution" tab="Evolution">
      <evolution></evolution>
    </n-tab-pane>
    <n-tab-pane name="weather" tab="Météo">
      <weather></weather>
    </n-tab-pane>
    <n-tab-pane name="position" tab="Position" style="height: 100%">
      <position style="height: 100%"></position>
    </n-tab-pane>
  </n-tabs>
</template>
<script lang="ts">
  import Weather from '@/components/Graphs/Weather/Weather.vue'
  import Position from '@/components/Graphs/Position/Position.vue'
  import Evolution from '@/components/Graphs/Evolution/Evolution.vue'

  export default {
    name: 'Graphs',
    components: { Weather, Position, Evolution },
  }
</script>
