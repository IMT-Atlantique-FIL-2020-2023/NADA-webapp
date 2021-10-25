<template>
  <ol-map>
    <ol-view
      :center="center"
      :zoom="zoom"
      :projection="'EPSG:3857'"
      @zoomChanged="zoomChanged"
      @centerChanged="centerChanged"
    />
    <ol-tile-layer>
      <ol-source-osm :image-smoothing="true" />
    </ol-tile-layer>
    <ol-interaction-select @select="selection"></ol-interaction-select>
    <ol-vector-layer>
      <slot name="overlay"></slot>
    </ol-vector-layer>
    <slot name="layout"></slot>
  </ol-map>
</template>

<script lang="ts">
  export default {
    name: 'MapContainer',
    emits: ['selection', 'zoomChanged', 'centerChanged'],
    data(): any {
      return {
        center: [0, 0],
        zoom: 8,
        currentZoom: 0,
        currentCenter: [0, 0],
      }
    },
    methods: {
      selection(event: any): void {
        this.$emit('selection', event)
      },
      zoomChanged(zoom: any): void {
        this.$emit('zoomChanged', zoom)
        this.currentZoom = zoom
      },
      centerChanged(center: any): void {
        this.$emit('centerChanged', center)
        this.currentCenter = center
      },
    },
  }
</script>
