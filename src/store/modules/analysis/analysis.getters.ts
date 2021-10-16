import { GetterTree } from 'vuex'
import { Analysis } from '@/types/store'
import { Sensor } from '@/types/analysis'
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
  getMeasurements(state) {
    return state.sensors.map((e: any) => ({
      label: e.measurement.name,
      value: e.measurement.id,
    }))
  },
  getMeasurement(state) {
    return {
      label: state.sensor?.measurement.name,
      value: state.sensor?.measurement.id,
    }
  },
  getMeasurementId(state) {
    return state.sensor?.measurement.id
  },
  getTimeline(state) {
    if (state.sensor == null) return []

    const sensor = state.sensors.find((e: any) => {
      return e.id === state.sensor?.id
    })

    if (sensor?.getMeanMeasureInterval == null) return []

    return sensor.getMeanMeasureInterval.map((e) => {
      const stringDate = e.startDate == null ? '' : e.startDate
      const startDate = new Date(stringDate).getTime()
      return [startDate, e.value]
    })
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
