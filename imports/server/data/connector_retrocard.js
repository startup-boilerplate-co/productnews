import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const retroCardSchema = new Schema({
	title:  String,
	author: String,
	reason: String,
	solutions: [{ solution: String }],
	date: { type: Date, default: Date.now }
});

const retroCards = mongoose.model('retroCard', retroCardSchema);
retroCards.find((err, cards) => { console.log(cards); })
	.sort({ date: -1 })
	.limit(3);

const RetroCards = {
	getOne() {
		return retroCards.findOne();
	},
	addCard(args) {
		const card = new retroCards(args);

		return card.save().then(function(args) {
			console.log(args);
			return args;
		});
	}
};

export default RetroCards;
