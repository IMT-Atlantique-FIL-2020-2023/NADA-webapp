<template>
  <v-grid
    :theme="isThemeDark() ? 'darkMaterial' : 'material'"
    :source="rows"
    :columns="columns"
    resize="true"
  ></v-grid>
</template>
<script lang="ts">
  import VGrid from '@revolist/vue3-datagrid'
  export default {
    name: 'Datagrid',
    components: {
      VGrid,
    },
    data() {
      return {
        columns: [
          {
            name: 'Birth',
            prop: 'birthdate',
            columnType: 'date',
            size: 150,
          },
          {
            prop: 'name',
            name: 'First',
          },
          {
            prop: 'details',
            name: 'Second',
          },
        ],
        rows: [
          {
            birthdate: '2022-08-24',
            name: '1',
            details: 'Item 1',
          },
          {
            birthdate: '2022-08-24',
            name: '2',
            details: 'Item 2',
          },
        ],
      }
    },
    methods: {
      isThemeDark(): boolean {
        return this.$store.state.common.theme !== null
      },
    },
  }
</script>
<style lang="scss"></style>
