export const CREATE_OPPORTUNITY = gql`
  mutation CreateOpportunityMutation(
    $opportunity: CreateOpportunityInput!
    $companyId: String!
  ) {
    createOpportunity(opportunity: $opportunity, companyId: $companyId) {
      id
      title
      compensation
      createdAt
      jobDescription
      requirements
      details
      location
      skillsRequired
      skillsPrefferred
      industry
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
      title
      compensation
      createdAt
      jobDescription
      requirements
      details
      location
      skillsRequired
      skillsPrefferred
      industry
    }
  }
`


