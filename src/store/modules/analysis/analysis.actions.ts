import { ActionTree } from 'vuex'
import { Analysis } from '@/types/store'
import appolo from '@/apollo'
import gql from 'graphql-tag'

export default <ActionTree<Analysis, any>>{
  async fetchAirports({ dispatch, commit }) {
    const request = await appolo.defaultClient.query({
      query: gql(`
            {
                airports {
                    id
                    name
                }
            }`),
    })
    commit('setAirports', request.data.airports)
    dispatch('selectAirportDefault')
  },
  selectAirportDefault({ dispatch, state }) {
    if (state.airports.length) {
      dispatch('selectAirportById', state.airports[0].id)
    }
  },
  selectAirportById({ commit, dispatch, state }, id) {
    const airport = state.airports.find((e) => {
      return e.id === id
    })
    commit('setAirport', airport)
    dispatch('fetchSensors')
  },
  async fetchSensors({ commit, state }) {
    if (state.airport == null) return

    const request = await appolo.defaultClient.query({
      query: gql(
        `{
            getAirportById(id: "${state.airport.id}") {
                name
                id
                sensors {
                    id
                    measurement {
                        id
                        name
                        unit
                    }
                }
            }
        }`
      ),
    })
    commit('setSensors', request.data.getAirportById.sensors)
  },
  selectSensorByMesureId({ dispatch, commit, state }, id) {
    const sensor = state.sensors.find((e) => {
      return e.measurement.id === id
    })
    commit('setSensor', sensor)
    dispatch('fetchTimeline')
  },
  async fetchTimeline({ commit, state }) {
    if (state.airport == null) return
    if (state.sensor == null) return

    const request = await appolo.defaultClient.query({
      query: gql(
        `{
            getAirportById(id: "${state.airport.id}") {
                id
                name
                getSubsetOfSensors(sensorIds: ["${state.sensor.id}"]) {
                    id
                    measurement {
                        id
                        name
                        unit
                    }
                    getMeanMeasureInterval(start: "2021-03-15 23:20:47.367000000", end: "2022-03-04 17:02:18.325000000", discretize: 24, discretizeMode: PER_DAY) {
                        id
                        value
                        startDate
                        endDate
                    }
                }
            }
        }`
      ),
    })
    commit(
      'setTimeline',
      request.data.getAirportById.getSubsetOfSensors[0].getMeanMeasureInterval
    )
  },
}
