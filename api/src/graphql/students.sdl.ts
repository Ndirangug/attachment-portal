export const schema = gql`
  type Student {
    id: String!
    firstName: String!
    lastName: String!
    title: String!
    linkedinUrl: String
    githubUrl: String
    twitterUrl: String
    course: String!
    city: String!
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
    students: [Student!]! @skipAuth
    student(id: String!): Student @skipAuth
  }

  input CreateStudentInput {
    firstName: String!
    lastName: String!
    title: String!
    linkedinUrl: String
    githubUrl: String
    twitterUrl: String
    course: String!
    city: String!
    aboutMe: String!
    skills: [String]!
    experience: JSON!
    education: JSON!
  }

  input UpdateStudentInput {
    firstName: String
    lastName: String
    title: String
    linkedinUrl: String
    githubUrl: String
    twitterUrl: String
    city: String
    course: String
    aboutMe: String
    skills: [String!]
    experience: JSON
    education: JSON
    userId: String
  }

  type Mutation {
    createStudent(student: CreateStudentInput!, userId: String): User! @skipAuth
    updateStudent(id: String!, input: UpdateStudentInput!): Student! @skipAuth
    deleteStudent(id: String!): Student! @skipAuth
  }
`
