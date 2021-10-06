import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Common from '@/types/store/common'
import { darkTheme } from 'naive-ui'

export default <MutationTree<Common>>{
  setTheme(state, dark): void {
    state.theme = dark ? darkTheme : null
  },
}
