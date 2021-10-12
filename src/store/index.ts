import { createStore } from 'vuex'
import common from '@/store/modules/common/common.module'
import analysis from '@/store/modules/analysis/analysis.module'

export default createStore({
  modules: {
    common,
    analysis,
  },
})
