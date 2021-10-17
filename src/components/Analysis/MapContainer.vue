<template>
  <ol-map style="height: calc(100% - 80px)">
    <ol-view
      :center="center"
      :zoom="zoom"
      :projection="'EPSG:4326'"
      @zoomChanged="zoomChanged"
      @centerChanged="centerChanged"
    />
    <ol-tile-layer>
      <ol-source-osm :image-smoothing="true" />
    </ol-tile-layer>
    <ol-interaction-select @select="selection"></ol-interaction-select>
    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature v-for="(point, i) in coordinates" :key="i">
          <ol-geom-point :coordinates="point.coordinates"></ol-geom-point>
          <ol-style>
            <ol-style-icon
              :src="marker"
              :scale="2.5"
              :opacity="0.9"
            ></ol-style-icon>
            <ol-style-text
              :text="point.label"
              :scale="1.5"
              :offset-y="40"
            ></ol-style-text>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
    <n-row style="margin-bottom: 10px">
      <n-col :span="12">
        <n-statistic label="Coordonnées">
          [{{ Number(currentCenter[0]).toFixed(2) }};
          {{ Number(currentCenter[1]).toFixed(2) }}]
        </n-statistic>
      </n-col>
      <n-col :span="12">
        <n-statistic label="Zoom">
          x{{ Number(currentZoom).toFixed(2) }}
        </n-statistic>
      </n-col>
    </n-row>
  </ol-map>
</template>

<script lang="ts">
  import { mapActions, mapGetters } from 'vuex'
  import marker from '@/assets/marker.svg'

  export default {
    name: 'MapContainer',
    data(): any {
      return {
        marker: marker,
        center: [0, 0],
        zoom: 8,
        coordinates: [],
        currentZoom: 0,
        currentCenter: [0, 0],
      }
    },
    computed: {
      ...mapGetters('analysis', [
        'getAirports',
        'getAirport',
        'getAirportsCoordinates',
      ]),
    },
    async mounted(): Promise<void> {
      this.$store.state.common.loading = 'start'
      this.coordinates = await this.getAirportsCoordinates
      this.$store.state.common.loading = 'finish'

      if (this.coordinates.length) this.center = this.coordinates[0].coordinates
    },
    methods: {
      ...mapActions('analysis', ['selectAirportById']),
      selection(event: any): void {
        const coordinates = event.mapBrowserEvent.coordinate

        // Teste pour chaque aeroport si les coordonnées correspondent
        const clicked = this.coordinates.filter((e: any) => {
          if (!e.coordinates.length) return false
          const offsetX = e.coordinates[0] - coordinates[0]
          const offsetY = e.coordinates[1] - coordinates[1]
          const offset = Math.abs(offsetX) + Math.abs(offsetY)
          return offset < 1
        })

        // Si l'aeroport peut être résolu, valide
        if (clicked.length) {
          this.selectAirportById(clicked[0].value)
          this.$store.state.analysis.activemap = false
        } else {
          const date = new Date().toTimeString().split(' ')[0]
          this.$store.state.common.error = `[${date}] An error occured during the selection...`
        }
      },
      zoomChanged(zoom: any): void {
        this.currentZoom = zoom
      },
      centerChanged(center: any): void {
        this.currentCenter = center
      },
    },
  }
</script>
