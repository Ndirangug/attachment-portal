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

      <Card className="px-5 pt-5">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            className="mr-4"
            height="5em"
            src={`https://ui-avatars.com/api/?name=${application.opportunity.company.name}&background=random&size=50`}
            alt="green iguana"
          />

          <Box>
            <Typography gutterBottom variant="h6" component="div">
              {application.opportunity.company.name}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {application.opportunity.title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {application.student.aboutMe.substring(0, 100)} ...
            </Typography> */}
          </Box>
        </Box>

        <CardActions>
          {application.status === 'ACCEPTED' ? (
            <Button size="small" color="primary" onClick={toggleDialogOpen}>
              OPEN LOGBOOK
            </Button>
          ) : (
            <Chip label={application.status}> </Chip>
          )}
        </CardActions>
      </Card>
    </div>
  )
}

export default StudentSideApplicationCard
