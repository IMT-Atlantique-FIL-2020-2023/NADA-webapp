<template>
  <div class="split-container">
    <splitpanes
      class="default-theme"
      :horizontal="horizontal"
      @resize="resize"
      @resized="resized"
    >
      <pane :size="size">
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
      side: { type: Number, default: null },
      horizontal: { type: Boolean, default: false },
      closing: { type: Boolean, default: false },
    },
    emits: ['resize', 'resized'],
    data(): any {
      return {
        size: 50,
      }
    },
    mounted(): void {
      this.size = this.side
    },
    methods: {
      resize(event: Event): void {
        this.$emit('resize', event)
      },
      resized(event: Event): void {
        this.$emit('resized', event)
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
