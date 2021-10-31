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
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { mapGetters, mapMutations } from 'vuex'

  export default defineComponent({
    name: 'AreaChart',
    props: {
      data: { type: Array, default: [] },
    },
    data() {
      return {
        areaChart: null,
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
      }
    },
    computed: {
      series(): any {
        return [{ data: this.data }]
      },
      filteredSeries(): any {
        if (!this.$store.state.analysis.selection.length) {
          return this.series
        }

        const lower = this.$store.state.analysis.selection[0]
        const upper = this.$store.state.analysis.selection[1]

        return [
          {
            data: this.data.filter((e: any) => {
              return e[0] >= lower && e[0] <= upper
            }),
          },
        ]
      },
    },
    watch: {
      '$store.state.common.theme'(): void {
        this.setPopupTheme(this.areaChart)
        // this.areaChart.refresh()
        // this.barChart.refresh()
      },
      '$store.state.analysis.sensor'(): void {
        this.areaChart.updateOptions({}) // forceUpdate
        this.setMinMaxValue(this.areaChart)
      },
    },
    methods: {
      ...mapGetters('analysis', ['getTimeline']),
      ...mapMutations('analysis', ['setSelection']),
      areaChartMounted(): void {
        this.areaChart = this.$refs.areaChart
      },
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
              ...this.data.map((e: any) => {
                return e[1]
              })
            ),
            min: Math.min(
              ...this.data.map((e: any) => {
                return e[1]
              })
            ),
          },
        })
      },
    },
  })
</script>
