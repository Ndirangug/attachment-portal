import type { CompanyProfileQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import CompanyProfile from 'src/components/CompanyProfile/CompanyProfile'
import CompanyContainer from '../CompanyContainer/CompanyContainer'

export const QUERY = gql`
  query CompanyProfileQuery($id: String!) {
    companyProfile: user(id: $id) {
      id
      email
      company {
        id
        name
        bio
        industry
        photo
        location
        opportunities {
          id
          title
          compensation
          createdAt
          jobDescription
          requirements
          details
          location
          skillsRequired
          skillsPrefferred
          industry
        }
      }
    }
  }
`
export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-and-network',
    pollInterval: 2500,
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  companyProfile,
}: CellSuccessProps<CompanyProfileQuery>) => {
  return (
    <div>
      <CompanyContainer profile={companyProfile} />
    </div>
  )
}
