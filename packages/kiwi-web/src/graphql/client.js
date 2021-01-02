import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://192.168.1.66:3000/graphql",
  cache: new InMemoryCache()
})

export default client
