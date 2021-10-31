<template>
  <apexchart
    ref="areaChart"
    width="100%"
    height="260px"
    type="area"
    :options="areaChartOptions"
    :series="filteredSeries"
    @mounted="areaChartMounted"
  ></apexchart>
  <apexchart
    ref="barChart"
    width="100%"
    height="130px"
    type="bar"
    style="margin-top: -38px"
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
        areaChart: null,
        debouncedFn: useDebounceFn(
          (...args) => this.getSelection(...args),
          200
        ),
        barChart: null,
        areaChartOptions: {
          chart: {
            id: 'chart1',
            toolbar: {
              show: false,
              autoSelected: 'pan',
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            tickAmount: 3,
            decimalsInFloat: 6,
          },
        },
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
                speed: 450,
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
            decimalsInFloat: 6,
          },
        },
      }
    },
    computed: {
      series(): any {
        return [{ data: this.getTimeline() }]
      },
      filteredSeries(): any {
        if (!this.$store.state.analysis.selection.length) {
          return this.series
        }

        const lower = this.$store.state.analysis.selection[0]
        const upper = this.$store.state.analysis.selection[1]

        return [
          {
            data: this.getTimeline().filter((e: any) => {
              return e[0] >= lower && e[0] <= upper
            }),
          },
        ]
      },
    },
    watch: {
      '$store.state.common.theme'(): void {
        this.setPopupTheme(this.areaChart)
        this.setPopupTheme(this.barChart)
        // this.areaChart.refresh()
        // this.barChart.refresh()
      },
      '$store.state.analysis.sensor'(): void {
        this.areaChart.updateOptions({}) // forceUpdate
      },
      '$store.state.common.resized'(): void {
        const selection = this.getSelection
        console.log(selection)
        this.setDefaultSelection(this.barChart)
        // this.barChart.refresh() // cause crash?
      },
    },
    methods: {
      ...mapGetters('analysis', ['getTimeline']),
      ...mapMutations('analysis', ['setSelection']),
      areaChartMounted(): void {
        this.areaChart = this.$refs.areaChart
      },
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

        this.setMinMaxValue(this.areaChart)
      },
      getDefaultSelectionInterval(): any {
        const times = this.getTimeline()
        if (!times.length) return []

        const width = Math.floor(times.length * 0.25)
        const lastIndex = this.getTimeline().length - 1
        const firstIndex = lastIndex - width

        return [times[firstIndex][0], times[lastIndex][0]]
      },
      // setDefaultSelection(chart: any): void {
      //   const interval = this.getDefaultSelectionInterval()
      //   chart.updateOptions({
      //     chart: {
      //       selection: {
      //         xaxis: {
      //           min: interval.length ? interval[0] : null,
      //           max: interval.length ? interval[1] : null,
      //         },
      //       },
      //     },
      //   })
      // },
      setPopupTheme(chart: any): void {
        chart.updateOptions({
          tooltip: {
            theme: this.$store.state.common.theme == null ? 'light' : 'dark',
          },
        })
      },
      setMinMaxValue(chart: any): void {
        chart.updateOptions({
          yaxis: {
            tickAmount: 3,
            decimalsInFloat: 6,
            max: Math.max(
              ...this.getTimeline().map((e: any) => {
                return e[1]
              })
            ),
            min: Math.min(
              ...this.getTimeline().map((e: any) => {
                return e[1]
              })
            ),
          },
        })
      },
      setDefaultSelection(chart: any): void {
        const times = this.getTimeline()
        if (!times.length) return

        const width = Math.floor(times.length * 0.25)
        const lastIndex = this.getTimeline().length - 1
        const firstIndex = lastIndex - width
        chart.updateOptions({
          chart: {
            selection: {
              xaxis: {
                min: times[firstIndex][0],
                max: times[lastIndex][0],
              },
            },
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
