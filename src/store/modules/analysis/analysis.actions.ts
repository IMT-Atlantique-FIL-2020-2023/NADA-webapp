import { ActionTree } from 'vuex'
import { Analysis } from '@/types/store'
import appolo from '@/apollo'
import gql from 'graphql-tag'

export default <ActionTree<Analysis, any>>{
  async fetchAirports({ dispatch, commit }) {
    // fetching airports datas
    let request = await dispatch(
      'common/appoloRequest',
      {
        query: `{
              airports {
                    id
                    name
                }
            }`,
        error:
          'An error occured during the fetching of the airports. Retrying in 10 seconds...',
      },
      { root: true }
    )

    // Retrying loop
    while (request == null) {
      await new Promise((resolve) => setTimeout(resolve, 10000))
      request = await dispatch(
        'common/appoloRequest',
        {
          query: `{
              airports {
                    id
                    name
                }
            }`,
          error:
            'An error occured during the fetching of the airports. Retrying in 10 seconds...',
        },
        { root: true }
      )
    }

    // setup store values and default selection
    commit('setAirports', request.data.airports)
    dispatch('selectAirportById', request.data.airports[0].id)
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
  async fetchSensors({ commit, dispatch, state }) {
    if (state.airport == null) return
    if (state.period == null || !state.period?.length) return

    // fetching sensors datas
    const request = await dispatch(
      'common/appoloRequest',
      {
        query: `{
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
                    getMeanMeasureInterval(
                        start: "${state.period[0].toISOString()}"
                        end: "${state.period[1].toISOString()}"
                        discretize: "1m"
                        discretizeMode: FLUX_DURATION
                    ) {
                        id
                        value
                        startDate
                        endDate
                    }
                }
            }
        }`,
        error: 'An error occured during the fetching of the sensors.',
      },
      { root: true }
    )
    if (request == null) return

    // setup store values and default selection
    commit('setSensors', request.data.getAirportById.sensors)
    commit('setSensor', request.data.getAirportById.sensors[0])
  },
  selectSensorByMesureId({ dispatch, commit, state }, id) {
    const sensor = state.sensors.find((e) => {
      return e.id === id
    })
    commit('setSensor', sensor)
  },
}
