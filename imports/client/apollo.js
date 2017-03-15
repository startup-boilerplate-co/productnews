// import ApolloClient from 'apollo-client';
// import { meteorClientConfig } from 'meteor/apollo';
// import { PolymerApollo } from 'polymer-apollo';
//
// const apolloClient = new ApolloClient(meteorClientConfig());
// window.PolymerApolloBehavior = new PolymerApollo({apolloClient});
//
//
//
// const networkInterface = createMeteorNetworkInterface({
//   // use a classic network interface instead of a batched network interface
//   batchingInterface: false,
// });
//
// const client = new ApolloClient(meteorClientConfig({ networkInterface }));
//



import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import { PolymerApollo } from 'polymer-apollo';

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    transportBatching: true,
  }),
  queryTransformer: addTypename,
});

//create a new polymer behavior from PolymerApollo class.
window.PolymerApolloBehavior = new PolymerApollo({apolloClient});
// export const PolymerApolloBehavior = new PolymerApollo({apolloClient})
