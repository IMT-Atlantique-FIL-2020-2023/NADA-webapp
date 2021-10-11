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
}
