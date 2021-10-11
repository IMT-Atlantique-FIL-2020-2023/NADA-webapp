<template>
  <ag-grid-vue
    :class="{
      'ag-theme-alpine': !isThemeDark(),
      'ag-theme-alpine-dark': isThemeDark(),
    }"
    dom-layout="autoHeight"
    :column-defs="columnDefs"
    :row-data="rowData"
    :modules="modules"
    :default-col-def="defaultColDef"
    :status-bar="statusBar"
    :side-bar="sideBar"
    @first-data-rendered="sizeColumnsToFit"
    @grid-size-changed="sizeColumnsToFit"
  >
  </ag-grid-vue>
</template>
<script lang="ts">
  import '@ag-grid-community/core/dist/styles/ag-grid.css'
  import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css'
  import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css'

  import { AgGridVue } from '@ag-grid-community/vue3'
  import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'

  export default {
    name: 'Datagrid',
    components: { AgGridVue },
    data() {
      return {
        modules: [ClientSideRowModelModule],
        columnDefs: [
          { field: 'make', minWidth: 200 },
          { field: 'model' },
          { field: 'price' },
        ],
        rowData: [
          { make: 'Toyota', model: 'Celica', price: 35000 },
          { make: 'Ford', model: 'Mondeo', price: 32000 },
          { make: 'Porsche', model: 'Boxter', price: 72000 },
        ],
        defaultColDef: {
          flex: 1,
          minWidth: 100,
          filter: true,
          resizable: true,
        },
        statusBar: {
          statusPanels: [
            {
              statusPanel: 'agTotalAndFilteredRowCountComponent',
              align: 'left',
            },
            { statusPanel: 'agTotalRowCountComponent', align: 'center' },
            { statusPanel: 'agFilteredRowCountComponent' },
            { statusPanel: 'agSelectedRowCountComponent' },
            { statusPanel: 'agAggregationComponent' },
          ],
        },
        sideBar: {
          toolPanels: [
            {
              id: 'columns',
              labelDefault: 'Columns',
              labelKey: 'columns',
              iconKey: 'columns',
              toolPanel: 'agColumnsToolPanel',
            },
            {
              id: 'filters',
              labelDefault: 'Filters',
              labelKey: 'filters',
              iconKey: 'filter',
              toolPanel: 'agFiltersToolPanel',
            },
          ],
        },
      }
    },
    methods: {
      isThemeDark(): boolean {
        return this.$store.state.common.theme !== null
      },
      sizeColumnsToFit(params: any): void {
        params.api.sizeColumnsToFit()
      },
    },
  }
</script>
<style lang="scss"></style>
