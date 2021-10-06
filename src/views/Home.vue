<template>
  <div>
    <sub-bar></sub-bar>

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
  import SubBar from '@/components/Home/SubBar.vue'
  import Datagrid from '@/components/Home/Datagrid.vue'
  import Interval from '@/components/Home/Interval.vue'
  import Timeline from '@/components/Home/Timeline.vue'
  import Graphs from '@/components/Home/Graphs.vue'
  export default {
    name: 'Home',
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
