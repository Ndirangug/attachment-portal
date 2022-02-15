export const schema = gql`
  type SchoolSupervisor {
    id: String!
    firstName: String!
    lastName: String!
    user: User!
    userId: String!
    logbookEntries: [LogbookEntry]!
  }

  type Query {
    schoolSupervisors: [SchoolSupervisor!]! @requireAuth
    schoolSupervisor(id: String!): SchoolSupervisor @requireAuth
  }

  input CreateSchoolSupervisorInput {
    firstName: String!
    lastName: String!
    userId: String!
  }

  input UpdateSchoolSupervisorInput {
    firstName: String
    lastName: String
    userId: String
  }

  type Mutation {
    createSchoolSupervisor(
      input: CreateSchoolSupervisorInput!
    ): SchoolSupervisor! @requireAuth
    updateSchoolSupervisor(
      id: String!
      input: UpdateSchoolSupervisorInput!
    ): SchoolSupervisor! @requireAuth
    deleteSchoolSupervisor(id: String!): SchoolSupervisor! @requireAuth
  }
`
