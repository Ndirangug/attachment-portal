import { useAuth } from '@redwoodjs/auth'
import { CellSuccessProps, useMutation, useQuery } from '@redwoodjs/web'
import { OpportunitiesQuery } from 'types/graphql'
import OpportunityCard from '../OpportunityCard/OpportunityCard'

interface OpportunitiesListinprops
  extends CellSuccessProps<OpportunitiesQuery> {
  deleteOpportunity?: (options?: any) => Promise<any>
  edit?: (options?: any) => Promise<any>
  apply?: (options?: any) => Promise<any>
}

const OpportunitiesListing = ({
  opportunities,
  edit,
  apply,
  deleteOpportunity,
}: OpportunitiesListinprops) => {
  const { currentUser } = useAuth()

  const GET_STUDENT = gql`
    query StudentIdQuery($id: String!) {
      studentProfile: user(id: $id) {
        id
        student {
          id
        }
      }
    }
  `
  const { loading, error, data } = useQuery(GET_STUDENT, {
    variables: { id: currentUser.id },
  })

  if (loading) return 'Loading...'

  return (
    <div>
      {opportunities.map((opportunity, i) => {
        return (
          <OpportunityCard
            key={i}
            company={opportunity.company}
            opportunity={opportunity}
            isStudent={true}
            deleteOpportunity={deleteOpportunity}
            edit={edit}
            apply={apply}
            studentId={data.studentProfile.student.id}
          />
        )
      })}
    </div>
  )
}

export default OpportunitiesListing
