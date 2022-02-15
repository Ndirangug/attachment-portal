export const schema = gql`
  type Opportunity {
    id: String!
    title: String!
    createdAt: DateTime!
    compnsation: Int!
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
  }

  type Query {
    opportunities: [Opportunity!]! @requireAuth
    opportunity(id: String!): Opportunity @requireAuth
  }

  input CreateOpportunityInput {
    title: String!
    compnsation: Int!
    jobDescription: String!
    requirements: [String]!
    details: JSON!
    location: String!
    skillsRequired: [String]!
    skillsPrefferred: [String]!
    industry: String!
    companyId: String!
  }

  input UpdateOpportunityInput {
    title: String
    compnsation: Int
    jobDescription: String
    requirements: [String]!
    details: JSON
    location: String
    skillsRequired: [String]!
    skillsPrefferred: [String]!
    industry: String
    companyId: String
  }

  type Mutation {
    createOpportunity(input: CreateOpportunityInput!): Opportunity! @requireAuth
    updateOpportunity(
      id: String!
      input: UpdateOpportunityInput!
    ): Opportunity! @requireAuth
    deleteOpportunity(id: String!): Opportunity! @requireAuth
  }
`
