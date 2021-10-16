<template>
  <v-grid
    :theme="isThemeDark() ? 'darkMaterial' : 'material'"
    :columns="columns"
    :grouping="grouping"
    :source="getSelectedData()"
    :filter="false"
    :auto-size-column="autosize"
  ></v-grid>
</template>
<script lang="ts">
  import VGrid from '@revolist/vue3-datagrid'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Datagrid',
    components: {
      VGrid,
    },
    data() {
      return {
        columns: [
          {
            name: 'ID',
            prop: 'id',
            size: 150,
            sortable: true,
          },
          {
            prop: 'startDate',
            name: 'startDate',
            columnType: 'date',
            sortable: true,
            order: 'asc',
          },
          {
            prop: 'endDate',
            name: 'endDate',
            columnType: 'date',
            sortable: true,
          },
          {
            prop: 'mesure',
            name: 'mesure',
            sortable: true,
          },
          {
            prop: 'name',
            name: 'name',
            sortable: true,
          },
          {
            prop: 'unit',
            name: 'unit',
            sortable: true,
          },
          {
            prop: 'value',
            name: 'value',
            sortable: true,
          },
        ],
        grouping: { props: ['mesure'], expandedAll: true },
        autosize: {
          mode: 'headerClickAutosize ',
          allColumns: true,
        },
      }
    },
    methods: {
      ...mapGetters('analysis', ['getSelectedData']),
      isThemeDark(): boolean {
        return this.$store.state.common.theme !== null
      },
    },
  }
</script>
<style lang="scss"></style>
