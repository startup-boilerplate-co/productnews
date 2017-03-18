import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';

// Create the apollo client
const ApolloClientOptions = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    transportBatching: true,
  }),
  queryTransformer: addTypename,
});

export default ApolloClientOptions;
