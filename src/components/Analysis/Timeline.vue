<template>
  <apexchart
    ref="barChart"
    width="100%"
    height="160px"
    type="bar"
    :options="barChartOptions"
    :series="series"
    @selection="debouncedFn"
    @mounted="barChartMounted"
  ></apexchart>
</template>
<script lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { defineComponent } from 'vue'
  import { mapGetters, mapMutations } from 'vuex'

  export default defineComponent({
    name: 'Timeline',
    data() {
      return {
        debouncedFn: useDebounceFn(
          (...args) => this.getSelection(...args),
          200
        ),
        barChart: null,
        barChartOptions: {
          chart: {
            id: 'chart1',
            brush: {
              target: 'chart2',
              enabled: true,
            },
            toolbar: {
              show: false,
              autoSelected: 'selection',
            },
            selection: {
              enabled: true,
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
                speed: 100,
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            tickAmount: 2,
            decimalsInFloat: 2,
          },
        },
      }
    },
    computed: {
      series(): any {
        return [{ data: this.getTimeline() }]
      },
    },
    watch: {
      '$store.state.common.theme'(): void {
        this.setPopupTheme(this.barChart)
        this.setDefaultSelection(this.barChart)
        // this.barChart.refresh()
      },
      '$store.state.common.resized'(): void {
        this.setDefaultSelection(this.barChart)
        // this.barChart.refresh() // cause crash?
      },
    },
    methods: {
      ...mapGetters('analysis', ['getTimeline']),
      ...mapMutations('analysis', ['setSelection']),
      barChartMounted(): void {
        this.barChart = this.$refs.barChart
        this.setDefaultSelection(this.barChart)
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
        if (times.length) {
          this.setSelection([xaxis.min, xaxis.max])
        }
      },
      getDefaultSelectionInterval(): any {
        const times = this.getTimeline()
        if (!times.length) return []
        const lastIndex = this.getTimeline().length - 1
        const firstIndex = 0

        return [times[firstIndex][0], times[lastIndex][0]]
      },
      setDefaultSelection(chart: any): void {
        const interval = this.getDefaultSelectionInterval()
        chart.updateOptions({
          chart: {
            selection: {
              xaxis: {
                min: interval.length ? interval[0] : null,
                max: interval.length ? interval[1] : null,
              },
            },
          },
        })
      },
      setPopupTheme(chart: any): void {
        chart.updateOptions({
          tooltip: {
            theme: this.$store.state.common.theme == null ? 'light' : 'dark',
          },
        })
      },
    },
  })
</script>

<style lang="scss">
  .ag-layout-auto-height {
    height: 100%;
  }
</style>
