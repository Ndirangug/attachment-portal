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
import { Application } from 'types/graphql'
import { useState } from 'react'
import ApplicationDetailsDialog from '../ApplicationDetailsDialog/ApplicationDetailsDialog'

interface StudentApplicationCardProps {
  application: Application
  opportunityId: string
}

const StudentApplicationCard = ({
  application,
  opportunityId,
}: StudentApplicationCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleDialogOpen = () => {
    setDialogOpen(!dialogOpen)
  }

  return (
    <div>
      <ApplicationDetailsDialog
        isOpen={dialogOpen}
        handleClose={toggleDialogOpen}
        application={application}
      />

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://ui-avatars.com/api/?name=${application.student.firstName}+${application.student.lastName}&background=random&size=512`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {application.student.firstName} {application.student.lastName}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {application.student.course}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {application.student.aboutMe.substring(0, 100)} ...
            </Typography>

            <Chip
              className="mt-4"
              label={
                <Typography variant="body2" color="text.secondary">
                  {application.status}
                </Typography>
              }
            ></Chip>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={toggleDialogOpen}>
            DETAILS
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default StudentApplicationCard
