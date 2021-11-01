<template>
  <n-layout
    has-sider
    sider-placement="right"
    style="height: calc(100% - 350px)"
  >
    <n-layout-content content-style="padding: 24px;">
      <v-grid
        :theme="isThemeDark() ? 'darkMaterial' : 'material'"
        :columns="columns"
        :grouping="grouped"
        :source="getSelectedData()"
        :filter="false"
        :auto-size-column="autosize"
      ></v-grid>
    </n-layout-content>
    <n-layout-sider
      collapse-mode="transform"
      :default-collapsed="true"
      :collapsed-width="20"
      :width="200"
      show-trigger="arrow-circle"
      content-style="padding: 0px 20px;"
      bordered
    >
      <h3>Grouping</h3>
      <n-checkbox-group v-model:value="grouping">
        <n-grid :y-gap="8" :cols="1">
          <n-gi v-for="column in columns" :key="column.prop">
            <n-checkbox :value="column.prop" :label="column.name" />
          </n-gi>
        </n-grid>
      </n-checkbox-group>
    </n-layout-sider>
  </n-layout>
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
            prop: 'sensor',
            name: 'Sensor',
            size: 80,
            sortable: true,
          },
          {
            prop: 'id',
            name: 'Id',
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
        grouping: ['name', 'sensor'],
        autosize: {
          mode: 'headerClickAutosize ',
          allColumns: true,
        },
      }
    },
    computed: {
      grouped(): any {
        return {
          props: this.grouping,
          expandedAll: true,
        }
      },
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
