import ApexCharts from 'apexcharts'

app.config.globalProperties.$apexcharts = ApexCharts

// Add this when into a TypeScript codebase
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $apexcharts: typeof ApexCharts
  }
}
