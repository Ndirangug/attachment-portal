import type { OpportunitiesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query OpportunitiesQuery(
    $category: String
    $location: String
    $title: String
  ) {
    opportunities(category: $category, location: $location, title: $title) {
      id
      title
      compensation
      createdAt
      category
      jobDescription
      requirements
      details
      location
      skillsRequired
      skillsPrefferred
      industry
      company {
        id
        name
        bio
        industry
        photo
        location
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

//type OpportunitiesFetched = CellSuccessProps<OpportunitiesQuery>

interface OnSuccessArgs extends CellSuccessProps<OpportunitiesQuery> {
  updateOpportunities: (opportunities) => void
}

export const Success = ({
  opportunities,
  updateOpportunities,
}: OnSuccessArgs) => {
  updateOpportunities(opportunities)
  return (
    // <ul>
    //   {opportunities.map((item) => {
    //     return <li key={item.id}>{JSON.stringify(item)}</li>
    //   })}
    // </ul>
    <></>
  )
}
