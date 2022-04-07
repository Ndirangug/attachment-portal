import type { PlacedStudentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query PlacedStudentsQuery {
    placements {
      id
      createdAt
      application {
        id
        status
        student {
          id
          firstName
          lastName
          course
          logbookEntries {
            id
            date
            studentComments
            industrySupervisorComments
          }
        }
        opportunity {
          id
          title
          company {
            id
            name
          }
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

interface OnSuccssprops extends CellSuccessProps<PlacedStudentsQuery> {
  updatePlacements: (any) => void
  updateLoading: (any) => void
}

export const Success = ({
  placements,
  updatePlacements,
  updateLoading,
}: OnSuccssprops) => {
  updatePlacements(placements)
  updateLoading(false)
  return <></>
}
