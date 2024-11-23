import gql from 'graphql-tag'

export default gql`
  type User {
    name: String!
    email: String!
    company: String
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Mutation {
    mutationTest(test: Boolean): Boolean
    loginUser(input: LoginInput): User
  }
`
