<template>
  <div>
    <sub-bar></sub-bar>
    <drawer :cclass="'nada-split'" :dtitle="'Carte des aéroports'">
      <template #content>
        <split-panes
          :side="50"
          :horizontal="$store.state.analysis.layout == 'v'"
          @resized="resized"
        >
          <template #left>
            <div class="nada-pane">
              <interval></interval>
              <timeline></timeline>
              <datagrid></datagrid>
            </div>
          </template>
          <template #right>
            <div class="nada-pane">
              <graphs></graphs>
            </div>
          </template>
        </split-panes>
      </template>

      <template #drawer>
        <n-skeleton
          v-if="!$store.state.analysis.activemap"
          height="100%"
          width="100%"
        />
        <map-container v-else></map-container>
      </template>
    </drawer>
  </div>
</template>
<script lang="ts">
  import SplitPanes from '@/components/SplitPanes.vue'
  import SubBar from '@/components/Analysis/SubBar.vue'
  import Datagrid from '@/components/Analysis/Datagrid.vue'
  import Interval from '@/components/Analysis/Interval.vue'
  import Timeline from '@/components/Analysis/Timeline.vue'
  import Drawer from '@/components/Analysis/Drawer.vue'
  import MapContainer from '@/components/Analysis/MapContainer.vue'
  import Graphs from '@/views/Graphs.vue'

  export default {
    name: 'Analysis',
    components: {
      SplitPanes,
      Interval,
      Timeline,
      Datagrid,
      Graphs,
      SubBar,
      Drawer,
      MapContainer,
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
