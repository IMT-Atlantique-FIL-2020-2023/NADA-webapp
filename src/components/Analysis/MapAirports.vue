<template>
  <map-container
    ref="map"
    style="height: calc(100% - 80px)"
    @selection="selection"
    @zoomChanged="zoomed"
    @centerChanged="mooved"
  >
    <template #overlay>
      <ol-source-vector>
        <ol-feature v-for="(point, i) in mappedCoordinates" :key="i">
          <ol-geom-point :coordinates="point.coordinates"></ol-geom-point>
          <ol-style>
            <ol-style-icon
              :src="marker"
              :scale="5.2"
              :opacity="0.9"
            ></ol-style-icon>
            <ol-style-text
              :text="point.label"
              :scale="1.3"
              :offset-y="10"
            ></ol-style-text>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </template>
    <template #layout>
      <n-row style="margin-bottom: 10px">
        <n-col :span="12">
          <n-statistic label="Coordonnées">
            [{{ center[0] }}; {{ center[1] }}]
          </n-statistic>
        </n-col>
        <n-col :span="12">
          <n-statistic label="Zoom"> x{{ zoom }} </n-statistic>
        </n-col>
      </n-row>
    </template>
  </map-container>
</template>

<script lang="ts">
  import { fromLonLat, toLonLat } from 'ol/proj'
  import { mapActions, mapGetters } from 'vuex'
  import marker from '@/assets/marker.svg'
  import MapContainer from '@/components/MapContainer.vue'

  export default {
    name: 'MapAirports',
    components: { MapContainer },
    data(): any {
      return {
        marker: marker,
        coordinates: [],
        zoom: 8,
        center: [0, 0],
      }
    },
    computed: {
      ...mapGetters('analysis', [
        'getAirports',
        'getAirport',
        'getAirportsCoordinates',
      ]),
      mappedCoordinates(): any {
        return this.coordinates.map((e: any) => ({
          label: e.label,
          value: e.value,
          coordinates: fromLonLat(e.coordinates),
        }))
      },
    },
    async mounted(): Promise<void> {
      this.coordinates = this.getAirportsCoordinates

      if (this.coordinates.length) {
        this.$refs.map.center = this.mappedCoordinates[0].coordinates
      }
    },
    methods: {
      ...mapActions('analysis', ['selectAirportById']),
      selection(event: any): void {
        const coordinates = toLonLat(event.mapBrowserEvent.coordinate)

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
      mooved(value: Array<number>): void {
        this.center = value.map((e: number) => Number(e).toFixed(2))
      },
      zoomed(value: number): void {
        this.zoom = Number(value).toFixed(2)
      },
    },
  }
</script>
