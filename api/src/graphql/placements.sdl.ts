export const schema = gql`
  type Placement {
    id: String!
    createdAt: DateTime!
    application: Application!
    applicationId: String!
  }

  type Query {
    placements: [Placement!]! @skipAuth
    placement(id: String!): Placement @skipAuth
  }

  input CreatePlacementInput {
    applicationId: String!
  }

  input UpdatePlacementInput {
    applicationId: String
  }

  type Mutation {
    createPlacement(input: CreatePlacementInput!): Placement! @skipAuth
    updatePlacement(id: String!, input: UpdatePlacementInput!): Placement!
      @skipAuth
    deletePlacement(id: String!): Placement! @skipAuth
  }
`
