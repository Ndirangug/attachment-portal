import type { CompanyProfileQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import CompanyProfile from 'src/components/CompanyProfile/CompanyProfile'

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
      }
    }
  }
`

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
      <CompanyProfile profile={companyProfile} />
    </div>
  )
}
