export const schema = gql`
  type LogbookEntry {
    id: String!
    date: DateTime!
    student: Student!
    studentId: String!
    studentComments: String!
    schoolSupervisorComments: String
    industrySupervisorComments: String!
    company: Company!
    companyId: String!
    # industrySupervisor: IndustrySupervisor!
    # industrySupervisorId: String!
    schoolSupervisor: SchoolSupervisor!
    schoolSupervisorId: String!
  }

  type Query {
    logbookEntries(studentId: String): [LogbookEntry!]! @skipAuth
    logbookEntry(id: String!): LogbookEntry @skipAuth
  }

  input CreateLogbookEntryInput {
    studentId: String!
    studentComments: String!
    schoolSupervisorComments: String
    industrySupervisorComments: String!
    companyId: String!
    schoolSupervisorId: String
  }

  input UpdateLogbookEntryInput {
    studentId: String
    studentComments: String
    schoolSupervisorComments: String
    industrySupervisorComments: String
    companyId: String
    schoolSupervisorId: String
  }

  type Mutation {
    createLogbookEntry(input: CreateLogbookEntryInput!): LogbookEntry! @skipAuth
    updateLogbookEntry(
      id: String!
      input: UpdateLogbookEntryInput!
    ): LogbookEntry! @skipAuth
    deleteLogbookEntry(id: String!): LogbookEntry! @skipAuth
  }
`
