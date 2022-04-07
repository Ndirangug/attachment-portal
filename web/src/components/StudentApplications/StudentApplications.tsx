import { Application } from 'types/graphql'
import { Grid } from '@mui/material'
import StudentSideApplicationCard from '../StudentSideApplicationCard/StudentSideApplicationCard'

interface StudentApplicationsProps {
  applications: Application[]
  status?: string
}

const StudentApplications = ({
  applications,
  status = '',
}: StudentApplicationsProps) => {
  const filteredApplications =
    status === 'ACCEPTED'
      ? applications.filter((application) => application.status === 'ACCEPTED')
      : applications.filter((application) => application.status !== 'ACCEPTED')

  console.log('filteredApplications', filteredApplications)

  return (
    <div>
      <Grid className="opportunities-grid" container spacing={2}>
        {filteredApplications.map((application, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <StudentSideApplicationCard key={i} application={application} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default StudentApplications
