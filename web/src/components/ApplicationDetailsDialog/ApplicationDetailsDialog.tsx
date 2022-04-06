import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Chip,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Application } from 'types/graphql'
import EducationEntry from '../EducationEntry/EducationEntry'
import ExperienceEntry from '../ExperienceEntry/ExperienceEntry'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import {
  CREATE_PLACEMENT,
  UPDATE_APPLICATION,
} from '../ReceivedApplications/mutations'
import { useState } from 'react'

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
  const [acceptloading, setAcceptLoading] = useState(false)
  const [rejectloading, setRejectLoading] = useState(false)

  const [createPlacement, { createLoading, createError }] = useMutation(
    CREATE_PLACEMENT,
    {
      onCompleted: () => {
        setAcceptLoading(false)
        toast.success('Candidate placed successfully!')
        handleClose()
      },
      onError: (error) => {
        setAcceptLoading(false)
        console.log(error)
        toast.error(error.message)
        handleClose()
      },
    }
  )

  const [updateApplication, { updateLoading, updateError }] = useMutation(
    UPDATE_APPLICATION,
    {
      onCompleted: () => {
        setRejectLoading(false)
        toast.success('Application status changed successfully!')
        handleClose()
      },
      onError: (error) => {
        setRejectLoading(false)
        console.log(error)
        toast.error(error.message)
        handleClose()
      },
    }
  )

  const acceptApplication = () => {
    console.log('acceptApplication')
    setAcceptLoading(true)
    createPlacement({ variables: { applicationId: application.id } })
      setAcceptLoading(true)
    updateApplication({
      variables: {
        applicationId: application.id,
        input: { status: 'ACCEPTED' },
      },
    })
  }
  const rejectApplication = () => {
    console.log('rejectApplication')
      setRejectLoading(true)
    updateApplication({
      variables: {
        applicationId: application.id,
        input: { status: 'REJECTED' },
      },
    })
  }

  return (
    <>
      <Toaster />
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
          <LoadingButton loading={acceptloading} onClick={acceptApplication}>
            ACCEPT
          </LoadingButton>
          <LoadingButton loading={rejectloading} onClick={rejectApplication}>
            REJECT
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ApplicationDetailsDialog
