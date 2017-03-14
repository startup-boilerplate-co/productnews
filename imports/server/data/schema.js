const Schema = `
type RetroCards {
  id: String
  title: String
  author: String
  reason: String
}

type Mutation {
  addRetrocard(id: String, title: String, author: String, reason: String): RetroCards
}


type User {
  id: String
  email: String
  emailSubscription: Boolean
  name: String
	occupation: String
	company: String
  links: [Link]
}


type Link {
	id: String
	title: String
	url: String
	time: String
	date: String
	author: User
	votes: Int
	comments: [Comment]
}

type Comment {
	author: User
	time: String
	date: String
	comment: String
}

type Query {
  getFortuneCookie: String
  getRetroCards: RetroCards
	getLink: Link
	getComment: Comment
	getUser: User
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [Schema];
