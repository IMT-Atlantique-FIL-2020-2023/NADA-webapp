<template>
  <div class="split-container">
    <splitpanes class="default-theme" @resize="Resizing">
      <pane :size="side">
        <slot name="left"></slot>
      </pane>
      <pane>
        <slot name="right"></slot>
      </pane>
    </splitpanes>
  </div>
</template>

<script lang="ts">
  import { Splitpanes, Pane } from 'splitpanes'
  import 'splitpanes/dist/splitpanes.css'

  export default {
    name: 'SplitPane',
    components: { Splitpanes, Pane },
    props: {
      side: { type: Number, default: 50 },
      onResize: {
        type: Function,
        default: (): void => {
          return
        },
      },
    },
    methods: {
      Resizing(event: Event): void {
        // this.paneSize = event[0].size
        this.onResize()
      },
    },
  }
</script>
<style lang="scss">
  .split-container {
    padding: 0px;
    margin: 0px;
    height: 100%;
  }
  .splitpanes__pane {
    background-color: transparent !important;
    padding: 10px;
  }
  .splitpanes__splitter {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
</style>
