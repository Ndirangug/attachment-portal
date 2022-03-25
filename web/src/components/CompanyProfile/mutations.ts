export const CREATE_COMPANY = gql`
  mutation CreateCompanyMutation(
    $createCompanyInput: CreateCompanyInput!
    $userId: String!
  ) {
    createCompany(company: $createCompanyInput, userId: $userId) {
      id
      email
      company {
        id
        name
        bio
        industry
        photo
        location
      }
    }
  }
`
export const UPDATE_COMPANY = gql`
  mutation UpdateCompanyMutation(
    $id: String!
    $companyInput: UpdateCompanyInput!
  ) {
    updateCompany(id: $id, input: $companyInput) {
      id
      name
      bio
      industry
      photo
      location
    }
  }
`
