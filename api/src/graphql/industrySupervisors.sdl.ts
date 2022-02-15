export const schema = gql`
  type IndustrySupervisor {
    id: String!
    firstName: String!
    lastName: String!
    user: User!
    userId: String!
    company: Company!
    companyId: String!
    logbookEntries: [LogbookEntry]!
  }

  type Query {
    industrySupervisors: [IndustrySupervisor!]! @requireAuth
    industrySupervisor(id: String!): IndustrySupervisor @requireAuth
  }

  input CreateIndustrySupervisorInput {
    firstName: String!
    lastName: String!
    userId: String!
    companyId: String!
  }

  input UpdateIndustrySupervisorInput {
    firstName: String
    lastName: String
    userId: String
    companyId: String
  }

  type Mutation {
    createIndustrySupervisor(
      input: CreateIndustrySupervisorInput!
    ): IndustrySupervisor! @requireAuth
    updateIndustrySupervisor(
      id: String!
      input: UpdateIndustrySupervisorInput!
    ): IndustrySupervisor! @requireAuth
    deleteIndustrySupervisor(id: String!): IndustrySupervisor! @requireAuth
  }
`
