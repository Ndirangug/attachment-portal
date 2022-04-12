import * as React from 'react'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { useMutation } from '@redwoodjs/web'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Chip,
  IconButton,
  Toolbar,
  AppBar,
  TransitionProps,
  Slide,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useEffect, useState } from 'react'
import { Close } from '@mui/icons-material'
import Logbook from '../Logbook/Logbook'
import { Application } from 'types/graphql'
import { CREATE_LOGBOOK_ENTRY, UPDATE_LOGBOOK_ENTRY } from './mutations'
import { LogbookEntry } from 'types/graphql'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface LogbookDialogProps {
  isOpen: boolean
  handleClose: () => void
  isStudent: boolean
  isSchoolSupervisor: boolean
  application: Application
}

const LogbookDialog = ({
  isOpen,
  handleClose,
  application,
  isStudent = false,
  isSchoolSupervisor = false,
}: LogbookDialogProps) => {
  const [loading, setLoading] = useState(false)
  const [studentComments, setStudentComments] = useState('')
  const [superisorComments, setSupervisorComments] = useState('')
  const [todaysEntryExists, setTodaysEntryExists] = useState(false)
  // const [todaysEntryId, setTodaysEntryId] = useState('')
  const [todaysEntry, setTodaysEntry] = useState<LogbookEntry>({
    studentComments: '',
    industrySupervisorComments: '',
  })
  const [todaysEntrySet, setTodaysEntrySet] = useState(false)

  console.log('logbook dialog rerednered,', todaysEntry)

  const [createEntry, { createLoading, createError }] = useMutation(
    CREATE_LOGBOOK_ENTRY,
    {
      onCompleted: () => {
        setLoading(false)
        toast.success('Logbook entry posted successfully!')
        handleClose()
      },
      onError: (error) => {
        setLoading(false)
        console.log(error)
        toast.error(error.message)
        handleClose()
      },
    }
  )

  const [updateEntry, { updateLoading, updateError }] = useMutation(
    UPDATE_LOGBOOK_ENTRY,
    {
      onCompleted: () => {
        setLoading(false)
        toast.success('Logbook entry updated successfully!')
        handleClose()
      },
      onError: (error) => {
        setLoading(false)
        console.log(error)
        toast.error(error.message)
        handleClose()
      },
    }
  )

  useEffect(() => {
    //console.log("today's entry chnaged", todaysEntry)
    //console.log("logbook dialog rerednered," todaysEntry)
  }, [todaysEntry])

  const saveChanges = () => {
    // console.log('save changes')
    setLoading(true)

    console.log('todays entry on save', todaysEntry) 

    if (todaysEntryExists) {
      console.log('todays date exists ')
      updateEntry({
        variables: {
          id: todaysEntry.id,
          input: {
            studentComments: todaysEntry.studentComments,
            industrySupervisorComments: todaysEntry.industrySupervisorComments,
          },
        },
      })
    } else {
      console.log('todays date doesnt exists ')
      createEntry({
        variables: {
          studentId: application.student.id,
          studentComments: todaysEntry.studentComments,
          industrySupervisorComments: todaysEntry.industrySupervisorComments,
          companyId: application.opportunity.company.id,
          schoolSupervisorId: '624d9499b260f674aed0fa41', //TODO REPLACE LATER..FOR NOW JUST HARD CODE
          schoolSupervisorComments: '',
        },
      })
    }
  }

  return (
    <>
      <Toaster />
      <Dialog
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullScreen
      >
        <AppBar color="black" sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {`Logbook   |    ${application.student.firstName} ${application.student.lastName}`}
            </Typography>
            <LoadingButton
              loading={loading}
              onClick={saveChanges}
              disabled={isSchoolSupervisor}
            >
              SAVE
            </LoadingButton>
          </Toolbar>
        </AppBar>

        <Logbook
          application={application}
          isStudent={isStudent}
          isSchoolSupervisor={isSchoolSupervisor}
          student={application.student}
          setTodaysEntryExists={setTodaysEntryExists}
          todaysEntry={todaysEntry}
          setTodaysEntry={setTodaysEntry}
          todaysEntrySet={todaysEntrySet}
          setTodaysEntrySet={setTodaysEntrySet}
          // studentComments={studentComments}
          // setStudentComments={setStudentComments}
          // supervisorComments={superisorComments}
          // setSupervisorComments={setSupervisorComments}
          // setTodaysEntryId={setTodaysEntryId}
        />
      </Dialog>
    </>
  )
}

export default LogbookDialog
