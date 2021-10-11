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
  selectAirportDefault({ commit, state }) {
    if (state.airports.length) {
      commit('setAirport', state.airports[0])
    }
  },
  selectAirportById({ commit, state }, id) {
    const airport = state.airports.find((e) => {
      e.id = id
    })
    commit('setAirport', airport)
  },
}
