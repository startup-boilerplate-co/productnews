import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema, forbidUndefinedInResolve } from 'graphql-tools';

import Mocks from './data/mocks';
import Schema from './data/schema';
import Resolvers from './data/resolvers';

const ExecutableSchema = makeExecutableSchema({
	typeDefs: Schema,
	resolvers: Resolvers
});

// forbidUndefinedInResolve(ExecutableSchema);

addMockFunctionsToSchema({
	schema: ExecutableSchema,
	mocks: Mocks,
	preserveResolvers: true
});

// const logger = { log: (e) => console.error(e.stack) };

createApolloServer({
	schema: ExecutableSchema,
	// formatError: logger
});
