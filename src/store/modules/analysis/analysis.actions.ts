import { ActionTree } from 'vuex'
import { Analysis } from '@/types/store'
import appolo from '@/apollo'
import gql from 'graphql-tag'

export default <ActionTree<Analysis, any>>{
  async fetchAeroports(store) {
    //  let client = this.app.apolloProvider.defaultClient
    // process.env.VUE_APP_URL,
    console.log(store)

    const request = await appolo.defaultClient.query({
      query: gql(`
            {
                airports {
                    id
                    name
                }
            }`),
    })
    store.state.aeroports = request.data.airports
  },
}
