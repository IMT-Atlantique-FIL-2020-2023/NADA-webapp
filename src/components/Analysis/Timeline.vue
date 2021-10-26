<template>
  <apexchart
    ref="areaChart"
    width="100%"
    height="260px"
    :options="areaChartOptions"
    :series="getSeries()"
    @mounted="areaChartMounted"
  ></apexchart>
  <apexchart
    ref="barChart"
    width="100%"
    height="130px"
    :options="barChartOptions"
    :series="getSeries()"
    @selection="getSelection"
    @mounted="barChartMounted"
  ></apexchart>
</template>
<script lang="ts">
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Timeline',
    data(): any {
      return {
        areaChart: null,
        barChart: null,
        areaChartOptions: {
          chart: {
            type: 'area',
            id: 'timeline-area',
            toolbar: {
              show: false,
              autoSelected: 'pan',
            },
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            tickAmount: 5,
          },
        },
        barChartOptions: {
          chart: {
            type: 'bar',
            id: 'timeline-bar',
            toolbar: {
              show: false,
              autoSelected: 'selection',
            },
            zoom: {
              enabled: false,
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
    watch: {
      '$store.state.common.theme'(): void {
        this.setPopupTheme(this.barChart)
        this.setPopupTheme(this.areaChart)
      },
      '$store.state.common.resized'(): void {
        this.setDefaultSelection(this.barChart)
        this.barChart.refresh() // refresh to adapt size
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
        this.barChart.refresh() // refresh to adapt size
      },
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
      setPopupTheme(chart: any): void {
        chart.updateOptions({
          tooltip: {
            theme: this.$store.state.common.theme == null ? 'light' : 'dark',
          },
        })
      },
    },
  }
</script>

<style lang="scss">
  .ag-layout-auto-height {
    height: 100%;
  }
</style>
