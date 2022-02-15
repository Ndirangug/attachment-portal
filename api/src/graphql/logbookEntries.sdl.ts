export const schema = gql`
  type LogbookEntry {
    id: String!
    date: DateTime!
    student: Student!
    studentId: String!
    studentComments: String!
    schoolSupervisorComments: String!
    industrySupervisorComments: String!
    industrySupervisor: IndustrySupervisor!
    industrySupervisorId: String!
    schoolSupervisor: SchoolSupervisor!
    schoolSupervisorId: String!
  }

  type Query {
    logbookEntries: [LogbookEntry!]! @requireAuth
    logbookEntry(id: String!): LogbookEntry @requireAuth
  }

  input CreateLogbookEntryInput {
    date: DateTime!
    studentId: String!
    studentComments: String!
    schoolSupervisorComments: String!
    industrySupervisorComments: String!
    industrySupervisorId: String!
    schoolSupervisorId: String!
  }

  input UpdateLogbookEntryInput {
    date: DateTime
    studentId: String
    studentComments: String
    schoolSupervisorComments: String
    industrySupervisorComments: String
    industrySupervisorId: String
    schoolSupervisorId: String
  }

  type Mutation {
    createLogbookEntry(input: CreateLogbookEntryInput!): LogbookEntry!
      @requireAuth
    updateLogbookEntry(
      id: String!
      input: UpdateLogbookEntryInput!
    ): LogbookEntry! @requireAuth
    deleteLogbookEntry(id: String!): LogbookEntry! @requireAuth
  }
`
