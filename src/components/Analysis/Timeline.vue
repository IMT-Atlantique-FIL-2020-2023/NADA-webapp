<template>
  <apexchart
    width="100%"
    height="300px"
    type="bar"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<script lang="ts">
  import VueApexCharts from 'vue3-apexcharts'

  export default {
    name: 'Timeline',
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        chartOptions: {
          chart: {
            id: 'timeline',
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91],
          },
        ],
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      }
    },
  }
</script>

<style lang="scss">
  .ag-layout-auto-height {
    height: 100%;
  }
</style>
