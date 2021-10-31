<template>
  <n-collapse>
    <n-collapse-item
      v-for="type in getSensorsByType()"
      :key="type"
      :title="type.id"
    >
      <n-grid :x-gap="12" :y-gap="2" :cols="1">
        <n-grid-item>
          <area-chart
            v-for="sensor in type.sensors"
            :key="sensor"
            :data="getMeanMeasureInterval()(sensor.id)"
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
    },
  }
</script>
