import { MutationTree } from 'vuex'
import { Common } from '@/types/store'
import { darkTheme } from 'naive-ui'

export default <MutationTree<Common>>{
  setTheme(state, dark): void {
    state.theme = dark ? darkTheme : null
  },
}
