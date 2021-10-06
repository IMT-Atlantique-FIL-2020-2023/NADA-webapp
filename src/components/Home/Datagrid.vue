<template>
  <ag-grid-vue
    style="width: 500px; height: 500px"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :modules="modules"
  >
  </ag-grid-vue>
</template>
<script lang="ts">
  import '@ag-grid-community/core/dist/styles/ag-grid.css'
  import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css'
  import { AgGridVue } from '@ag-grid-community/vue3'
  import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'

  export default {
    name: 'Datagrid',
    data() {
      return {
        modules: [ClientSideRowModelModule],
        columnDefs: [{ field: 'make' }, { field: 'model' }, { field: 'price' }],
        rowData: [
          { make: 'Toyota', model: 'Celica', price: 35000 },
          { make: 'Ford', model: 'Mondeo', price: 32000 },
          { make: 'Porsche', model: 'Boxter', price: 72000 },
        ],
      }
    },
    components: {
      AgGridVue,
    },
  }
</script>
