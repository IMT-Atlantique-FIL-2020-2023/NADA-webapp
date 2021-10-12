import state from '@/store/modules/analysis/analysis.state'
import getters from '@/store/modules/analysis/analysis.getters'
import actions from '@/store/modules/analysis/analysis.actions'
import mutations from '@/store/modules/analysis/analysis.mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
