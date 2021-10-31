<template>
  <n-collapse>
    <n-collapse-item
      v-for="(type, j) in getSensorsByType()"
      :key="type"
      :title="type.name"
    >
      <n-grid :x-gap="10" :y-gap="0" :cols="1">
        <n-grid-item>
          <area-chart
            v-for="(sensor, i) in type.sensors"
            :key="sensor"
            :data="getMeanMeasureInterval()(sensor.id, sensor.measurement.id)"
            :color="getColor(j + i)"
          ></area-chart>
        </n-grid-item>
      </n-grid>
    </n-collapse-item>
  </n-collapse>
</template>
<script lang="ts">
  import AreaChart from '@/components/Graphs/Evolution/AreaChart.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Evolution',
    components: { AreaChart },
    methods: {
      ...mapGetters('analysis', ['getSensorsByType', 'getMeanMeasureInterval']),
      getColor(index: number): string {
        const goldenAngle = 180 * (3 - Math.sqrt(5))
        return `hsl(${index * goldenAngle + 60}, 100%, 75%)`
      },
    },
  }
</script>
