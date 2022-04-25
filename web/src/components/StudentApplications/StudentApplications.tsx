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
    status === ''
      ? applications
      : applications.filter((application) => application.status === status)

  console.log(`filteredApplications ${status}`, filteredApplications)

  return (
    <div>
      <Grid className="opportunities-grid" container spacing={2}>
        {filteredApplications.map((application, i) => (
          <Grid item xs={12} sm={12} md={6} key={i}>
            <StudentSideApplicationCard  application={application} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default StudentApplications
