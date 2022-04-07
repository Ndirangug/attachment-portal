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
    schoolSupervisors: [SchoolSupervisor!]! @skipAuth
    schoolSupervisor(id: String!): SchoolSupervisor @skipAuth
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
    ): SchoolSupervisor! @skipAuth
    updateSchoolSupervisor(
      id: String!
      input: UpdateSchoolSupervisorInput!
    ): SchoolSupervisor! @skipAuth
    deleteSchoolSupervisor(id: String!): SchoolSupervisor! @skipAuth
  }
`
