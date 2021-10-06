import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    modules: {
      common: {
        theme: string
      }
    }
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
