import { CellSuccessProps } from '@redwoodjs/web'
import { OpportunitiesQuery } from 'types/graphql'
import OpportunityCard from '../OpportunityCard/OpportunityCard'

const OpportunitiesListing = ({
  opportunities,
}: {
  opportunities: CellSuccessProps<OpportunitiesQuery>
}) => {
  return (
    <div>
      {
        <ul>
          {opportunities.map((opportunity, i) => {
            return (
              <OpportunityCard
                key={i}
                company={opportunity.company}
                opportunity={opportunity}
              />
            )
          })}
        </ul>
      }
    </div>
  )
}

export default OpportunitiesListing
