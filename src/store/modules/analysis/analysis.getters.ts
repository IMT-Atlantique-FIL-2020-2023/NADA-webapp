import { GetterTree } from 'vuex'
import { Analysis } from '@/types/store'
export default <GetterTree<Analysis, any>>{
  getAeroports(state) {
    return state.aeroports.map((e: any) => ({
      label: e.name,
      value: e.id,
    }))
  },
}
