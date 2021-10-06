<template>
  <div>
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

    <div class="nada-split">
      <split-panes :side="50">
        <template #left>
          <div>
            <interval></interval>
            <timeline></timeline>
            <datagrid></datagrid>
          </div>
        </template>
        <template #right>
          <div>
            <graphs></graphs>
          </div>
        </template>
      </split-panes>
    </div>
  </div>
</template>
<script lang="ts">
  import SplitPanes from '@/components/SplitPanes.vue'
  import Datagrid from '@/components/Home/Datagrid.vue'
  import Interval from '@/components/Home/Interval.vue'
  import Timeline from '@/components/Home/Timeline.vue'
  import Graphs from '@/components/Home/Graphs.vue'
  import mdiMap from '~icons/mdi/map'

  export default {
    name: 'Home',
    components: { SplitPanes, Interval, Timeline, Datagrid, Graphs, mdiMap },
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
