import { CellSuccessProps, useMutation } from '@redwoodjs/web'
import { CreateOpportunityInput, OpportunityProfileQuery } from 'types/graphql'
import { useState } from 'react'
import { toast } from '@redwoodjs/web/dist/toast'
import { CREATE_OPPORTUNITY, UPDATE_OPPORTUNITY } from './mutations'
import NewOpportunity from '../NewOpportunity/NewOpportunity'
import { Button } from '@mui/material'
import OpportunityCard from '../OpportunityCard/OpportunityCard'

const OpportunityJobs = ({
  profile,
}: {
  profile: CellSuccessProps<OpportunityProfileQuery>
}) => {
  //const [opportunities, setOpportunities] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen)
  }

  return (
    <div>
      <NewOpportunity
        isOpen={dialogOpen}
        handleClose={toggleDialog}
        companyId={profile.company.id}
        opportunity={null}
      />

      <Button
        className="text-white"
        onClick={toggleDialog}
        disabled={dialogOpen}
        variant="contained"
      >
        ADD NEW OPPORTUNITY
      </Button>

      {profile.company.opportunities.map((opportunity, i) => (
        <OpportunityCard key={i} opportunity={opportunity} />
      ))}
    </div>
  )
}

export default OpportunityJobs
