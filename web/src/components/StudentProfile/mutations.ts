export const CREATE_STUDENT = gql`
  mutation CreateStudentMutation(
    $createStudentInput: CreateStudentInput!
    $userId: String!
  ) {
    createStudent(student: $createStudentInput, userId: $userId) {
      id
      email
      student {
        id
        firstName
        lastName
        title
        course
        city
        aboutMe
        skills
        linkedinUrl
        githubUrl
        twitterUrl
        education
        experience
      }
    }
  }
`
export const UPDATE_STUDENT = gql`
  mutation UpdateStudentMutation(
    $id: String!
    $studentInput: UpdateStudentInput!
  ) {
    updateStudent(id: $id, input: $studentInput) {
      id
      firstName
      lastName
      title
      course
      city
      aboutMe
      skills
      linkedinUrl
      githubUrl
      twitterUrl
      education
      experience
    }
  }
`
