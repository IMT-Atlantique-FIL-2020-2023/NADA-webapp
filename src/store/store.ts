import { createStore } from 'vuex'
import common from '@/store/modules/common/common.module'
export default createStore({
  modules: {
    common,
  },
})
