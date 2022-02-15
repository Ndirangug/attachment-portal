export const schema = gql`
  type Student {
    id: String!
    firstName: String!
    lastName: String!
    course: String!
    aboutMe: String!
    skills: [String]!
    experience: JSON!
    education: JSON!
    user: User!
    userId: String!
    applications: [Application]!
    logbookEntries: [LogbookEntry]!
  }

  type Query {
    students: [Student!]! @requireAuth
    student(id: String!): Student @requireAuth
  }

  input CreateStudentInput {
    firstName: String!
    lastName: String!
    course: String!
    aboutMe: String!
    skills: [String]!
    experience: JSON!
    education: JSON!
    userId: String!
  }

  input UpdateStudentInput {
    firstName: String
    lastName: String
    course: String
    aboutMe: String
    skills: [String]!
    experience: JSON
    education: JSON
    userId: String
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student! @requireAuth
    updateStudent(id: String!, input: UpdateStudentInput!): Student!
      @requireAuth
    deleteStudent(id: String!): Student! @requireAuth
  }
`
