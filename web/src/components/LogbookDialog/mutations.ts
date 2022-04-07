export const CREATE_LOGBOOK_ENTRY = gql`
  mutation CreateLogbookEntry(
    $studentId: String!
    $studentComments: String!
    $industrySupervisorComments: String!
    $companyId: String!
    $schoolSupervisorId: String
    $schoolSupervisorComments: String
  ) {
    createLogbookEntry(
      input: {
        studentId: $studentId
        studentComments: $studentComments
        industrySupervisorComments: $industrySupervisorComments
        companyId: $companyId
        schoolSupervisorId: $schoolSupervisorId
        schoolSupervisorComments: $schoolSupervisorComments
      }
    ) {
      id
      date
      student {
        id
        firstName
        lastName
      }
      schoolSupervisor {
        id
        lastName
        firstName
      }
      company {
        id
        name
      }
      studentComments
      industrySupervisorComments
    }
  }
`
export const UPDATE_LOGBOOK_ENTRY = gql`
  mutation UpdateLogbookEntry($id: String!, $input: UpdateLogbookEntryInput!) {
    updateLogbookEntry(id: $id, input: $input) {
      id
      date
      student {
        id
        firstName
        lastName
        userId
      }
      studentComments
      company {
        id
        name
      }
      industrySupervisorComments
      schoolSupervisor {
        id
        firstName
        lastName
        userId
      }
      schoolSupervisorComments
    }
  }
`
