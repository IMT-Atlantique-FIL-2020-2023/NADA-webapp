import { MutationTree } from 'vuex'
import { Analysis } from '@/types/store'
export default <MutationTree<Analysis>>{
  setAirports(state, value) {
    state.airports = value
  },
  setAirport(state, value) {
    state.airport = value
  },
  setSensors(state, value) {
    state.sensors = value
  },
  setSensor(state, value) {
    state.sensor = value
  },
}
