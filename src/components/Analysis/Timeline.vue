<template>
  <apexchart
    width="100%"
    height="300px"
    type="bar"
    :options="chartOptions"
    :series="getSeries()"
  ></apexchart>
</template>
<script lang="ts">
  import VueApexCharts from 'vue3-apexcharts'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Timeline',
    components: {
      apexchart: VueApexCharts,
    },
    data(): any {
      return {
        chartOptions: {
          chart: {
            id: 'timeline',
            toolbar: {
              show: true,
            },
            selection: {
              enabled: true,
            },
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 800,
              animateGradually: {
                enabled: false,
                delay: 150,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 450,
              },
            },
          },
        },
      }
    },
    methods: {
      ...mapGetters('analysis', ['getTimeline']),
      getSeries(): any {
        return [
          {
            name: 'timeline',
            data: this.getTimeline(),
          },
        ]
      },
    },
  }
</script>

<style lang="scss">
  .ag-layout-auto-height {
    height: 100%;
  }
</style>
