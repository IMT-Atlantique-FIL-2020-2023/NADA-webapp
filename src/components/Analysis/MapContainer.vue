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
        <ol-feature>
          <ol-geom-multi-point :coordinates="getCoordinates">
          </ol-geom-multi-point>
          <ol-style>
            <ol-style-icon
              :src="marker"
              :scale="2.5"
              :opacity="0.9"
            ></ol-style-icon>
            <ol-style-text
              text="Hellooooo"
              :scale="1.5"
              :offset-y="30"
            ></ol-style-text>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
    <n-row style="margin-bottom: 10px">
      <n-col :span="12">
        <n-statistic label="Coordonnées">
          [{{ currentCenter[0] }}; {{ currentCenter[1] }}]
        </n-statistic>
      </n-col>
      <n-col :span="12">
        <n-statistic label="Zoom"> x{{ currentZoom }} </n-statistic>
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
      getCoordinates(): any {
        return this.coordinates.map((e: any) => e.coordinates)
      },
    },
    async mounted(): Promise<void> {
      this.$store.state.common.loading = 'start'
      this.coordinates = await this.getAirportsCoordinates
      this.$store.state.common.loading = 'finish'

      console.log(this.coordinates)
      if (this.coordinates.length) this.center = this.coordinates[0].coordinates
    },
    methods: {
      ...mapActions('analysis', ['selectAirportById']),
      selection(event: any): void {
        const coordinates = event.mapBrowserEvent.coordinate
        this.$store.state.analysis.activemap = false
        console.log(event.mapBrowserEvent.coordinate)
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
