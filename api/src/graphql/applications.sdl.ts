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
    applications: [Application!]! @requireAuth
    application(id: String!): Application @requireAuth
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
    createApplication(input: CreateApplicationInput!): Application! @requireAuth
    updateApplication(
      id: String!
      input: UpdateApplicationInput!
    ): Application! @requireAuth
    deleteApplication(id: String!): Application! @requireAuth
  }
`
