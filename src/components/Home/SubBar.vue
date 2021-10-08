<template>
  <n-spacer class="nada-subbar">
    <n-form inline label-placement="left">
      <n-form-item label="Aéroport">
        <n-select
          v-model:value="selectedValue"
          filterable
          placeholder="selectionner un aéroport"
          :options="options"
        />
      </n-form-item>
      <n-form-item>
        <n-button size="large">
          <template #icon><mdi-map /></template>
        </n-button>
      </n-form-item>
    </n-form>
  </n-spacer>
</template>
<script lang="ts">
  import mdiMap from '~icons/mdi/map'

  export default {
    name: 'SubBar',
    components: { mdiMap },
    data() {
      return {
        selectedValue: null,
        options: [
          {
            label: 'Charle De Gaule',
            value: 'cdg',
          },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
  .nada-subbar {
    padding: 20px;
  }
</style>
