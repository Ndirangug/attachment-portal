export const schema = gql`
  type User {
    id: String!
    email: String!
    role: Role!
    createdAt: DateTime!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    student: Student
    company: Company
    industrySupervisor: [IndustrySupervisor]!
    schoolSupervisor: [SchoolSupervisor]!
  }

  enum Role {
    STUDENT
    SCHOOL_SUPERVISOR
    INDUSTRY_SUPERVISOR
    RECRUITER
    SCHOOL_ADMIN
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: String!): User @skipAuth
  }

  input CreateUserInput {
    email: String!
    role: Role!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    email: String
    role: Role
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
