import { Opportunity } from 'types/graphql'

const OpportunityCard = ({ opportunity }: { opportunity: Opportunity }) => {
  return (
    <div>
      <h2>{opportunity.title}</h2>
      <p>{opportunity.jobDescription}</p>
    </div>
  )
}

export default OpportunityCard
