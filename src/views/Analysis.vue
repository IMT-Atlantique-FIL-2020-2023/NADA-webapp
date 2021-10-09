<template>
  <div>
    <sub-bar></sub-bar>

    <div class="nada-split">
      <split-panes
        :side="panesSide"
        :horizontal="false"
        @resized="panesResized"
      >
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
    data() {
      return {
        panesSide: 50,
      }
    },
    methods: {
      panesResized(event: Array<PaneResized>): void {
        console.log(event)
        console.log(this.panesSide)
        if (event[0].size != null && event[0].size < 10) {
          this.panesSide = 0
        }
      },
    },
  }
</script>
