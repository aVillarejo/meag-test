// Imports: GraphQL
import { gql } from 'apollo-server-express';
// GraphQL: TypeDefs
const TYPEDEFS = gql`
type User {
      _id: ID!
      name: String
      password: String
    }

    type Query {
      users: [User]
    }

    type Mutation {
      addUser(input: UserInput): User
    }

    input UserInput {
      name: String!
      password: String!
    }
`;
// Exports
export default TYPEDEFS;