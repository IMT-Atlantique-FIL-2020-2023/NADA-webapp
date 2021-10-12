import { GetterTree } from 'vuex'
import { Analysis } from '@/types/store'
export default <GetterTree<Analysis, any>>{
  getAirports(state) {
    return state.airports.map((e: any) => ({
      label: e.name,
      value: e.id,
    }))
  },
  getAirport(state) {
    return {
      label: state.airport.name,
      value: state.airport.id,
    }
  },
  getMeasurements(state) {
    return state.sensors.map((e: any) => ({
      label: e.measurement.name,
      value: e.measurement.id,
    }))
  },
  getMeasurement(state) {
    return {
      label: state.sensor.measurement.name,
      value: state.sensor.measurement.id,
    }
  },
  getTimeline(state) {
    if (state.sensor == null) return []

    const sensor = state.sensors.find((e: any) => {
      return e.id === state.sensor.id
    })

    if (sensor?.getMeanMeasureInterval == null) return []

    return sensor.getMeanMeasureInterval.map((e) => {
      const stringDate = e.startDate == null ? '' : e.startDate
      const startDate = new Date(stringDate).getMilliseconds()
      return [startDate, e.value]
    })
  },
}
