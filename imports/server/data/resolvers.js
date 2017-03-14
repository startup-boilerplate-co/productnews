import { FortuneCookie, RetroCards } from './connectors';
// import { FortuneCookie } from './connectors';


const Resolvers = {
	Query: {
		// author(_, args) {
		//   return Author.find({ where: args });
		// },
		getFortuneCookie() {
			return FortuneCookie.getOne();
		},
		getRetroCards() {
			return RetroCards.getOne();
		}
	},
	// RetroCards: {
	//   retrocards() {
	//     return RetroCards.getAll();
	//   },
	// },
	Mutation: {
		// addRetrocard(root, { label }, context) {
		addRetrocard(_, args) {
			// console.log(`adding tag ${args}`);
			// console.log(`adding tag '${label}'`);
			// return addTag(label);
			return RetroCards.addCard(args);
			// return RetroCards.addCard(label);
		},
	},

};

export default Resolvers;
