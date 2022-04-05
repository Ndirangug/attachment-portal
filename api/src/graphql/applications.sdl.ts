export const schema = gql`
  type Application {
    id: String!
    status: ApplicationStatus!
    createdAt: DateTime!
    student: Student!
    studentId: String!
    opportunity: Opportunity!
    opportunityId: String!
    Placement: Placement
  }

  enum ApplicationStatus {
    PENDING
    ACCEPTED
    REJECTED
  }

  type Query {
    applications: [Application!]! @skipAuth
    application(id: String!): Application @skipAuth
  }

  input CreateApplicationInput {
    status: ApplicationStatus!
    studentId: String!
    opportunityId: String!
  }

  input UpdateApplicationInput {
    status: ApplicationStatus
    studentId: String
    opportunityId: String
  }

  type Mutation {
    createApplication(input: CreateApplicationInput!): Application! @skipAuth
    updateApplication(
      id: String!
      input: UpdateApplicationInput!
    ): Application! @skipAuth
    deleteApplication(id: String!): Application! @skipAuth
  }
`
