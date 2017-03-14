import casual from 'casual';
import MockList from 'graphql-tools';
// May 24 Remz
const Mocks = {
		// author: (root, args) => {
		// 	return { firstName: args.firstName, lastName: args.lastName};
		// },
	// Query: () => ({
		User: () => ({
			id: () => casual.uuid,
			email: () => casual.email,
			emailSubscription: () => casual.boolean,
			name: () => casual.first_name,
			occupation: () => casual.catch_phrase,
			company: () => casual.company_name,
			// links: () => new MockList( 7, () => Link ),
		}),
		Link: () => ({
			id: () => casual.uuid,
			title: () => casual.catch_phrase,
			url: () => casual.url,
			time: () => casual.date('YYYY-MM-DD'),
			date: () => casual.time('HH:mm:ss'),
			// author: () => User,
			votes: () => casual.integer(0, 50),
			// comments: () => new MockList( 7, () => Comment ),
		}),
		Comment: () => ({
			// author: () => User,
			time: () => casual.date('YYYY-MM-DD'),
			date: () => casual.time('HH:mm:ss'),
			comment: () => casual.sentences(3)
		})
	// })
};

export default Mocks;
