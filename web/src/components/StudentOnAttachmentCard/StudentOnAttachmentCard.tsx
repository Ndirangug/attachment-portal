import { Placement } from 'types/graphql'
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

const StudentOnAttachmentCard = ({ placement }: { placement: Placement }) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  console.log('studnet on attachent')
  console.log(placement)

  const toggleDialogOpen = () => {
    setDialogOpen(!dialogOpen)
  }

  return (
    <div>
      <LogbookDialog
        isOpen={dialogOpen}
        handleClose={toggleDialogOpen}
        isStudent={false}
        isSchoolSupervisor={true}
        application={placement.application}
      />

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={`https://ui-avatars.com/api/?name=${placement.application.student.firstName}+${placement.application.student.lastName}&background=random&size=256`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {placement.application.student.firstName}{' '}
              {placement.application.student.lastName}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {placement.application.student.course}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {placement.application.student.aboutMe.substring(0, 100)} ...
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

export default StudentOnAttachmentCard
