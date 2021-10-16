<template>
  <apexchart
    ref="chart"
    width="100%"
    height="300px"
    :options="chartOptions"
    :series="getSeries()"
    @selection="getSelection"
  ></apexchart>
</template>
<script lang="ts">
  import VueApexCharts from 'vue3-apexcharts'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Timeline',
    components: {
      apexchart: VueApexCharts,
    },
    data(): any {
      return {
        chartOptions: {
          chart: {
            type: 'bar',
            id: 'timeline',
            toolbar: {
              show: false,
              autoSelected: 'selection',
            },
            zoom: {
              enabled: false,
            },
            xaxis: {
              type: 'datetime',
            },
            selection: {
              enabled: true,
              type: 'x',
              fill: {
                color: '#579ee6',
                opacity: 0.3,
              },
              stroke: {
                opacity: 0,
              },
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
    watch: {
      '$store.state.common.resized'(): void {
        const chart = this.$refs.chart
        // Reset selection on resize
        chart.updateOptions({
          chart: {
            selection: {
              xaxis: {
                min: undefined,
                max: undefined,
              },
            },
          },
        })
        // Refresh to adapt size
        chart.refresh()
      },
    },
    methods: {
      ...mapGetters('analysis', ['getTimeline']),
      ...mapMutations('analysis', ['setSelection']),
      getSeries(): any {
        return [
          {
            name: 'timeline',
            data: this.getTimeline(),
          },
        ]
      },
      getSelection(chartContext: any, { xaxis, yaxis }: any): void {
        /*
        Trick to avoid strange behaviour:
        @why: When selecting an area then moving out the mouse to the splitpane bar
        while not leaving the graph, the selection event will be triggered again.
        @how: We can avoid it by checking if the max value does not overflow the interval
        */
        const times = this.getTimeline()
          .map((e: any) => e[0])
          .sort((a: any, b: any) => {
            return b - a
          })

        if (times.length && xaxis.max < times[0]) {
          this.setSelection([xaxis.min, xaxis.max])
        }
      },
    },
  }
</script>

<style lang="scss">
  .ag-layout-auto-height {
    height: 100%;
  }
</style>
