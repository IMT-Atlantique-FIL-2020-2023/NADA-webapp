import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const httpLink = new HttpLink({
  uri: `${import.meta.env.VITE_API_URL}`,
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export default createApolloProvider({
  defaultClient: apolloClient,
})
