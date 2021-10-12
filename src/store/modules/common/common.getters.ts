import { GetterTree } from 'vuex'
import { Common } from '@/types/store'
export default <GetterTree<Common, any>>{
  getError(state) {
    return state.error
  },
  getInfo(state) {
    return state.info
  },
}
