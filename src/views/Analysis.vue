<template>
  <div>
    <sub-bar></sub-bar>

    <div class="nada-split">
      <split-panes :side="50" :horizontal="false">
        <template #left>
          <div class="nada-fullheight">
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
  import SubBar from '@/components/Analysis/SubBar.vue'
  import Datagrid from '@/components/Analysis/Datagrid.vue'
  import Interval from '@/components/Analysis/Interval.vue'
  import Timeline from '@/components/Analysis/Timeline.vue'
  import Graphs from '@/components/Analysis/Graphs.vue'
  import { PaneResized } from '@/types/splitpanes'
  export default {
    name: 'Analysis',
    components: {
      SplitPanes,
      Interval,
      Timeline,
      Datagrid,
      Graphs,
      SubBar,
    },
  }
</script>
