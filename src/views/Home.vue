<template>
  <n-space vertical>
    <n-form inline label-placement="left">
      <n-form-item label="Aéroport">
        <n-select
          v-model:value="selectedValue"
          filterable
          placeholder="selectionner un aéroport"
          :options="options"
      /></n-form-item>
      <n-form-item>
        <n-button size="large">
          <template #icon>
            <n-icon>
              <icon-map></icon-map>
            </n-icon>
          </template>
        </n-button>
      </n-form-item>
    </n-form>

    <div>
      <split-panes :side="50">
        <template #left>left</template>
        <template #right>right</template>
      </split-panes>
    </div>
  </n-space>
</template>
<script lang="ts">
  import SplitPanes from '../components/SplitPanes.vue'
  import IconMap from '~icons/mdi/map'

  export default {
    name: 'Home',
    components: { SplitPanes, IconMap },
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
