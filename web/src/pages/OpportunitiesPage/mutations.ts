export const CREATE_APPLICATION = gql`
  mutation (
    $status: ApplicationStatus!
    $studentId: String!
    $opportunityId: String!
  ) {
    createApplication(
      input: {
        status: $status
        studentId: $studentId
        opportunityId: $opportunityId
      }
    ) {
      id
      status
      createdAt
      student {
        id
      }
      opportunity {
        id
      }
      Placement {
        id
      }
    }
  }
`
