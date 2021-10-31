import { GetterTree } from 'vuex'
import { Analysis } from '@/types/store'
import { Sensor } from '@/types/analysis'
import axios from 'axios'

export default <GetterTree<Analysis, any>>{
  getAirports(state) {
    return state.airports.map((e: any) => ({
      label: e.name,
      value: e.id,
    }))
  },
  getAirport(state) {
    return {
      label: state.airport?.name,
      value: state.airport?.id,
    }
  },
  getAirportId(state) {
    return state.airport?.id
  },
  async getAirportsCoordinates(state, getters) {
    return await Promise.all(
      getters.getAirports.map(async (airport: any) => {
        return await axios
          .get(
            `https://nominatim.openstreetmap.org/search?q=${airport.label}+Airport+France&format=json`
          )
          .then((response) => {
            const data = response.data as Array<any>

            // On essaye de récuperer un noeud
            let place = data.filter((e: any) => e['osm_type'] == 'node')[0]

            // Si pas de noeuds renseignés, on prends une allée
            if (place == null) place = data[0]

            // Enfin, on retourne seulement les coordonées
            return {
              value: airport.value,
              label: airport.label,
              coordinates: place == null ? [] : [place.lon, place.lat],
            }
          })
      })
    )
  },
  getMeasurements(state) {
    return state.sensors.map((e: any) => ({
      measurement: e.measurement.id,
      label: `${e.id}-${e.measurement.name}`,
      value: `${e.id}-${e.measurement.id}`,
    }))
  },
  getMeasurement(state) {
    return {
      measurement: state.sensor?.measurement.id,
      label: `${state.sensor?.id}-${state.sensor?.measurement.name}`,
      value: `${state.sensor?.id}-${state.sensor?.measurement.id}`,
    }
  },
  getMeasurementId(state) {
    return `${state.sensor?.id}-${state.sensor?.measurement.id}`
  },
  getSensorsByType(state): Array<any> {
    // Extract types  and name from sensors
    const all_types: Array<any> = state.sensors.map((e: Sensor) => ({
      id: e.measurement.id,
      name: e.measurement.name,
    }))

    // Erase duplicates in types
    const map_types: Array<any> = [
      ...new Map(all_types.map((type: any) => [type.id, type])).values(),
    ]
    console.log(
      map_types.map((type: any) => {
        return {
          id: type.id,
          name: type.name,
          sensors: state.sensors.filter((e: Sensor) => {
            return e.measurement.id === type.id
          }),
        }
      })
    )
    return map_types.map((type: any) => {
      return {
        id: type.id,
        name: type.name,
        sensors: state.sensors.filter((e: Sensor) => {
          return e.measurement.id === type.id
        }),
      }
    })
  },
  getMeanMeasureInterval: (state) => (id: string) => {
    const sensor = state.sensors.find((e: any) => {
      return e.id === id
    })

    if (sensor?.getMeanMeasureInterval == null) return []

    return sensor.getMeanMeasureInterval.map((e) => {
      const stringDate = e.startDate == null ? '' : e.startDate
      const startDate = new Date(stringDate).getTime()
      return [startDate, e.value]
    })
  },
  getTimeline(state, getters) {
    if (state.sensor == null) return []
    return getters.getMeanMeasureInterval(state.sensor?.id)
  },
  getData(state) {
    return state.sensors
      .map((e: Sensor) => {
        if (e.getMeanMeasureInterval == null) return []
        const m = e.measurement
        return e.getMeanMeasureInterval.map((s) => {
          return {
            id: s.id,
            startDate: s.startDate,
            endDate: s.endDate,
            value: s.value,
            mesure: m.id,
            name: m.name,
            unit: m.unit,
          }
        })
      })
      .flat()
  },
  getSelectedData(state, getters) {
    if (!state.selection.length) {
      return getters.getData
    }
    return getters.getData.filter((e: any) => {
      return (
        new Date(e.startDate) >= new Date(state.selection[0]) &&
        new Date(e.startDate) <= new Date(state.selection[1])
      )
    })
  },
}
