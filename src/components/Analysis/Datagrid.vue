<template>
  <v-grid
    :theme="isThemeDark() ? 'darkMaterial' : 'material'"
    :columns="columns"
    :grouping="grouping"
    :source="getSelectedData()"
    :filter="false"
    :auto-size-column="autosize"
    style="height: calc(100% - 350px)"
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
            prop: 'id',
            name: 'Id',
            size: 150,
            sortable: true,
          },
          {
            prop: 'startDate',
            name: 'Début',
            columnType: 'date',
            sortable: true,
            order: 'asc',
          },
          {
            prop: 'endDate',
            name: 'Fin',
            columnType: 'date',
            sortable: true,
          },
          {
            prop: 'mesure',
            name: 'Mesure',
            sortable: true,
          },
          {
            prop: 'name',
            name: 'Label',
            sortable: true,
          },
          {
            prop: 'unit',
            name: 'Unitée',
            sortable: true,
          },
          {
            prop: 'value',
            name: 'Valeur',
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
