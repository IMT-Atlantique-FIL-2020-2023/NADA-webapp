<template>
  <map-container ref="map" style="height: 100%">
    <template #overlay>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-line-string
            :coordinates="trajectories"
          ></ol-geom-line-string>
          <ol-style>
            <ol-style-stroke :color="'red'" :width="10"></ol-style-stroke>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </template>
  </map-container>
</template>
<script lang="ts">
  import MapContainer from '@/components/MapContainer.vue'
  import { mapGetters } from 'vuex'
  import { fromLonLat, toLonLat } from 'ol/proj'
  export default {
    name: 'Position',
    components: { MapContainer },
    data() {
      return {
        map: null,
        trajectories: [],
      }
    },
    methods: {
      ...mapGetters('analysis', ['getSensorsByType', 'getMeanMeasureInterval']),
      setup(): void {
        const airport = this.$store.state.analysis.airport
        const base = fromLonLat([airport?.lon, airport?.lat])

        const types = this.getSensorsByType()

        // We check if the lat and lon are present
        const latlon = [
          types.filter((e) => e.id === 'longitude')[0],
          types.filter((e) => e.id === 'latitude')[0],
        ]

        // The trajectory mesures are required
        if (latlon.length < 2) return
        if (!latlon[0]?.sensors.length) return
        if (!latlon[1]?.sensors.length) return
        if (latlon[0]?.sensors.length !== latlon[1]?.sensors.length) return

        // Get the array of positions
        const trajectory = latlon.map((e) =>
          e.sensors[0].getMeanMeasureInterval.map((v) => v.value)
        )

        // Map them and add to the airport base position
        const path = trajectory[0].map((e, i) => [
          base[0] + trajectory[0][i],
          base[1] + trajectory[1][i],
        ])

        this.trajectories = path.filter((e) => Boolean(e[0]) && Boolean(e[1]))

        this.map.center = base
        this.map.zoom = 20
      },
    },
    watch: {
      '$store.state.analysis.sensors'() {
        this.setup()
      },
    },
    mounted() {
      this.map = this.$refs.map
      this.setup()
    },
    computed: {
      trajectory() {},
    },
  }
</script>
