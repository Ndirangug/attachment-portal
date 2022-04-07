import { Place } from '@mui/icons-material'
import { Grid } from '@mui/material'
import { CellSuccessProps } from '@redwoodjs/web'
import { CompanyProfileQuery } from 'types/graphql'
import PlacementCard from '../PlacementCard/PlacementCard'

const Placements = ({
  profile,
}: {
  profile: CellSuccessProps<CompanyProfileQuery>
}) => {
  const groupedPlacements = {}

  profile.company.opportunities.forEach((opportunity) => {
    const acceptedApplications = opportunity.applications.filter(
      (appllication) => appllication.status === 'ACCEPTED'
    )
    groupedPlacements[opportunity.title] = acceptedApplications
  })

  console.log(groupedPlacements)

  return (
    <div className="placements-container">
      {Object.entries(groupedPlacements).map(([title, placements]) => (
        <div key={title} className="mb-10">
          <h1 className="mb-2 font-bold capitalize text-xl">{title}</h1>

          <Grid className="opportunities-grid" container spacing={2}>
            {placements.length > 0 ? (
              placements.map((placement, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <PlacementCard key={i} application={placement} />
                </Grid>
              ))
            ) : (
              <p className="my-4 ml-8">No students placed yet!</p>
            )}
          </Grid>
        </div>
      ))}
    </div>
  )
}

export default Placements
