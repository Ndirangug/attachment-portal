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

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={`https://ui-avatars.com/api/?name=${application.student.firstName}+${application.student.lastName}&background=random&size=256`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {application.student.firstName} {application.student.lastName}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {application.student.course}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {application.student.aboutMe.substring(0, 100)} ...
            </Typography> */}
          </CardContent>
        </CardActionArea>
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
