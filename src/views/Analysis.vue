<template>
  <div>
    <sub-bar></sub-bar>
    <div class="nada-split">
      <split-panes
        :side="50"
        :horizontal="$store.state.analysis.layout == 'v'"
        @resized="resized"
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
    watch: {
      '$store.state.analysis.layout'(): any {
        this.resized()
      },
    },
    mounted(): void {
      window.addEventListener('resize', this.onResize)
    },
    unmounted(): void {
      window.removeEventListener('resize', this.onResize)
    },
    methods: {
      resized(): void {
        this.$store.state.common.resized = new Date()
      },
      onResize(): void {
        if (window.innerHeight < 800) {
          this.$store.state.analysis.layout = 'v'
        }
      },
    },
  }
</script>
