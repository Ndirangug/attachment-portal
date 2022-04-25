export const schema = gql`
  type Opportunity {
    id: String!
    title: String!
    createdAt: DateTime!
    compensation: Int!
    category: String!
    jobDescription: String!
    requirements: [String]!
    details: JSON!
    location: String!
    skillsRequired: [String]!
    skillsPrefferred: [String]!
    industry: String!
    company: Company!
    companyId: String!
    applications: [Application]!
    open: Boolean!
  }

  type Query {
    opportunities(
      category: String
      location: String
      title: String
    ): [Opportunity!]! @skipAuth
    opportunity(id: String!): Opportunity @skipAuth
  }

  input CreateOpportunityInput {
    title: String!
    compensation: Int!
    jobDescription: String!
    category: String!
    requirements: [String]!
    details: JSON!
    location: String!
    skillsRequired: [String]!
    skillsPrefferred: [String]!
    industry: String!
  }

  input UpdateOpportunityInput {
    title: String
    compensation: Int
    jobDescription: String
    category: String
    requirements: [String!]
    details: JSON
    location: String
    skillsRequired: [String!]
    skillsPrefferred: [String!]
    industry: String
    open: Boolean
  }

  type Mutation {
    createOpportunity(
      opportunity: CreateOpportunityInput!
      companyId: String!
    ): Opportunity! @skipAuth
    updateOpportunity(
      id: String!
      input: UpdateOpportunityInput!
    ): Opportunity! @skipAuth
    deleteOpportunity(id: String!): Opportunity! @skipAuth
  }
`
