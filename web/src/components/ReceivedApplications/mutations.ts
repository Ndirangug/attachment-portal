export const CREATE_PLACEMENT = gql`
  mutation CreatePlacementMutation($applicationId: String!) {
    createPlacement(input: { applicationId: $applicationId }) {
      id
      createdAt
      application {
        id
        status
        student {
          firstName
        }
        opportunity {
          id
          title
        }
      }
    }
  }
`
export const UPDATE_APPLICATION = gql`
  mutation UpdateApplicationMutation(
    $applicationId: String!
    $input: UpdateApplicationInput!
  ) {
    updateApplication(id: $applicationId, input: $input) {
      id
      status
      student {
        firstName
      }
      opportunity {
        id
        title
      }
    }
  }
`
