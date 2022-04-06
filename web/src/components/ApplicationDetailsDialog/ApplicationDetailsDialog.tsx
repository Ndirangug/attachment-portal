import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Chip,
} from '@mui/material'
import { Application } from 'types/graphql'
import EducationEntry from '../EducationEntry/EducationEntry'
import ExperienceEntry from '../ExperienceEntry/ExperienceEntry'

interface ApplicationDetailsDialogProps {
  isOpen: boolean
  handleClose: () => void
  application: Application
}

const ApplicationDetailsDialog = ({
  isOpen,
  handleClose,
  application,
}: ApplicationDetailsDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Student Profile</DialogTitle>

      <DialogContent>
        <div className="bg-white p-8 lg:p-32">
          <div className="profile-header">
            <h1 className="uppercase font-bold">Name</h1>
            <Typography variant="body2" color="text.secondary">
              {`${application.student.firstName} ${application.student.lastName}`}
            </Typography>

            <h1 className="uppercase font-bold mt-6">Course</h1>
            <Typography variant="body2" color="text.secondary">
              {application.student.course}
            </Typography>
          </div>

          <div className="about mt-12">
            <h1 className="uppercase font-bold">About Me</h1>
            <Typography variant="body2" color="text.secondary">
              {application.student.aboutMe}
            </Typography>
          </div>

          <div className="experience mt-12">
            <div className="flex items-center">
              <h1 className="uppercase font-bold">Experience</h1>
            </div>

            {JSON.parse(application.student.experience).map((entry, i) => (
              <ExperienceEntry key={i} entry={entry} />
            ))}
          </div>

          <div className="education mt-12">
            <div className="flex items-center">
              <h1 className="uppercase font-bold">Education</h1>
            </div>
            {JSON.parse(application.student.education).map((entry, i) => (
              <EducationEntry key={i} entry={entry} />
            ))}
          </div>

          <div className="skills">
            <div className="flex items-center">
              <h1 className="uppercase font-bold">Skills</h1>
            </div>

            {application.student.skills.map((entry, i) => (
              <Chip
                className="mx-1 text-white"
                color="primary"
                label={entry}
                key={i}
              />
            ))}
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>ACCEPT</Button>
        <Button onClick={handleClose}>REJECT</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ApplicationDetailsDialog
