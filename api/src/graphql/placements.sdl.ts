export const schema = gql`
  type Placement {
    id: String!
    createdAt: DateTime!
    application: Application!
    applicationId: String!
  }

  type Query {
    placements: [Placement!]! @requireAuth
    placement(id: String!): Placement @requireAuth
  }

  input CreatePlacementInput {
    applicationId: String!
  }

  input UpdatePlacementInput {
    applicationId: String
  }

  type Mutation {
    createPlacement(input: CreatePlacementInput!): Placement! @requireAuth
    updatePlacement(id: String!, input: UpdatePlacementInput!): Placement!
      @requireAuth
    deletePlacement(id: String!): Placement! @requireAuth
  }
`
