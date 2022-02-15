export const schema = gql`
  type Company {
    id: String!
    name: String!
    bio: String!
    industry: String!
    photo: String!
    location: String!
    user: User!
    userId: String!
    industrySupervisors: [IndustrySupervisor]!
    opportunities: [Opportunity]!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: String!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    bio: String!
    industry: String!
    photo: String!
    location: String!
    userId: String!
  }

  input UpdateCompanyInput {
    name: String
    bio: String
    industry: String
    photo: String
    location: String
    userId: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
      @requireAuth
    deleteCompany(id: String!): Company! @requireAuth
  }
`
