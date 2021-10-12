import { ActionTree } from 'vuex'
import { Common } from '@/types/store'

import appolo from '@/apollo'
import gql from 'graphql-tag'
export default <ActionTree<Common, any>>{
  async appoloRequest({ state }, { query, error }) {
    try {
      const result = await appolo.defaultClient.query({ query: gql(query) })
      return result
    } catch (e) {
      const date = new Date().toTimeString().split(' ')[0]
      state.error = `[${date}] ${error}`
    }
  },
}
