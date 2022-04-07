import type { FindSchoolSupervisorQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSchoolSupervisorQuery($id: String!) {
    schoolSupervisor: user(id: $id) {
      id
      email
      schoolSupervisor {
        firstName
        lastName
        logbookEntries {
          id
          student {
            id
            firstName
            lastName
          }
          company {
            id
            name
          }
          studentComments
          industrySupervisorComments
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

interface OnSuccessProps extends CellSuccessProps<FindSchoolSupervisorQuery> {
  updateSchoolSupervisor: (any) => void
  updateLoading: (any) => void
}

export const Success = ({
  schoolSupervisor,
  updateSchoolSupervisor,
  updateLoading,
}: OnSuccessProps) => {
  updateSchoolSupervisor(schoolSupervisor)
  updateLoading(false)
  return <></>
}
