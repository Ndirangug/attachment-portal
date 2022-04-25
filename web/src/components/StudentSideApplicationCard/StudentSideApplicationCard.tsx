import { Application } from 'types/graphql'
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from '@mui/material'
import { useState } from 'react'
import LogbookDialog from '../LogbookDialog/LogbookDialog'

const StudentSideApplicationCard = ({
  application,
}: {
  application: Application
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleDialogOpen = () => {
    setDialogOpen(!dialogOpen)
  }

  return (
    <div>
      <LogbookDialog
        isOpen={dialogOpen}
        handleClose={toggleDialogOpen}
        isStudent={true}
        isSchoolSupervisor={false}
        application={application}
      />

      <Card>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            height="50"
            image={`https://ui-avatars.com/api/?name=${application.opportunity.company.name}&background=random&size=50`}
            alt="green iguana"
          />

          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {application.opportunity.title}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {application.opportunity.company.name}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {application.student.aboutMe.substring(0, 100)} ...
            </Typography> */}
          </Box>
        </Box>

        <CardActions>
          <Button size="small" color="primary" onClick={toggleDialogOpen}>
            OPEN LOGBOOK
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default StudentSideApplicationCard
