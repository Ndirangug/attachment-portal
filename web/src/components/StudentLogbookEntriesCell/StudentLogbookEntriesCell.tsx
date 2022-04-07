import type { StudentLogbookEntriesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query StudentLogbookEntriesQuery($studentId: String!) {
    logbookEntries(studentId: $studentId) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

interface SuccessProps extends CellSuccessProps<StudentLogbookEntriesQuery> {
  updateLogBookEntries: (any) => void
}

export const Success = ({
  logbookEntries,
  updateLogBookEntries,
}: SuccessProps) => {
  updateLogBookEntries(logbookEntries)
  return <></>
}
