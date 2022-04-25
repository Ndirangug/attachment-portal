export const DELETE_OPPORTUNITY = gql`
  mutation DeleteOpportunittMutation($id: String!) {
    deleteOpportunity(id: $id) {
      id
    }
  }
`
export const UPDATE_OPPORTUNITY = gql`
  mutation UpdateOpportunityMutation(
    $id: String!
    $opportunityInput: UpdateOpportunityInput!
  ) {
    updateOpportunity(id: $id, input: $opportunityInput) {
      id
      open
      title
    }
  }
`
