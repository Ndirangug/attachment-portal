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
    companies: [Company!]! @skipAuth
    company(id: String!): Company @skipAuth
  }

  input CreateCompanyInput {
    name: String!
    bio: String!
    industry: String!
    photo: String!
    location: String!
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
    createCompany(company: CreateCompanyInput!, userId: String!): User!
      @requireAuth
    updateCompany(id: String!, input: UpdateCompanyInput!): Company!
      @requireAuth
    deleteCompany(id: String!): Company! @requireAuth
  }
`
