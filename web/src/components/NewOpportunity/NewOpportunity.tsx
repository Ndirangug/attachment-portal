import { LoadingButton } from '@mui/lab'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControlLabel,
  Checkbox,
  DialogActions,
  Button,
  TextareaAutosize,
} from '@mui/material'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { useState } from 'react'
import { CreateOpportunityInput, Opportunity } from 'types/graphql'
import {
  CREATE_OPPORTUNITY,
  UPDATE_OPPORTUNITY,
} from '../CompanyJobs/mutations'

interface JobOpportunityProps {
  isOpen: boolean
  handleClose: Function
  companyId: string
  opportunity: Opportunity | null
}

const NewOpportunity = ({
  isOpen,
  handleClose,
  companyId,
  opportunity = null,
}: JobOpportunityProps) => {
  const [title, setTitle] = useState('Job Titles')
  const [jobDescription, setJobDescription] = useState('')
  const [requirements, setRequirements] = useState([])
  const [compensation, setCompensation] = useState(0)
  const [location, setLocation] = useState('')
  const [skillsPrefferred, setSkillsPrefferred] = useState([])
  const [skillsRequired, setSkillsRequired] = useState([])
  const [industry, setIndustry] = useState('')
  const [details, setDetails] = useState({})
  const [localStateSet, setLocalStateSet] = useState(false)

  const [createOpportunity, { createLoading, createError }] = useMutation(
    CREATE_OPPORTUNITY,
    {
      onCompleted: () => {
        toast.success('Opportunity posted successfully!')
        handleClose()
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
        handleClose()
      },
    }
  )

  const [updateOpportunity, { updateloading, updateError }] = useMutation(
    UPDATE_OPPORTUNITY,
    {
      onCompleted: () => {
        toast.success('Opportunity updated successfully!')
        handleClose()
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
        handleClose()
      },
    }
  )

  const saveOpportunity = () => {
    if (opportunity) {
      console.log('updating oppotunity')
      updateOpportunity({
        variables: {
          id: opportunity.id,
          companyInput: collectData(),
        },
      })
    } else {
      console.log('crating oppotunity')
      createOpportunity({
        variables: {
          companyId: companyId,
          opportunity: collectData(),
        },
      })
    }
  }

  const collectData = (): CreateOpportunityInput => ({
    title,
    compensation,
    jobDescription,
    requirements,
    details,
    location,
    skillsRequired,
    skillsPrefferred,
    industry,
  })

  const populateLocalState = () => {
    if (opportunity && localStateSet === false) {
      setTitle(opportunity.title)
      setJobDescription(opportunity.jobDescription)
      setLocation(opportunity.location)
      setCompensation(opportunity.compensation)
      setRequirements(opportunity.requirements)
      setSkillsPrefferred(opportunity.skillsPrefferred)
      setSkillsRequired(opportunity.skillsRequired)
      setIndustry(opportunity.industry)

      setLocalStateSet(true)
    }
  }

  populateLocalState()

  return (
    <div>
      <Toaster />

      <Dialog open={isOpen} onClose={(event) => handleClose()}>
        <DialogTitle>New Opportunity</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            variant="standard"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            margin="dense"
            multiline
            id="jobDescription"
            label="Job Description"
            fullWidth
            required
            variant="standard"
            value={jobDescription}
            onChange={(event) => setJobDescription(event.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Requirements"
            fullWidth
            multiline
            required
            variant="standard"
            value={requirements.join('\n')}
            onChange={(event) => {
              setRequirements(event.target.value.split('\n'))
            }}
          />
          <TextField
            margin="dense"
            id="compensation"
            label="Compensation (Kshs per month)"
            fullWidth
            type="number"
            variant="standard"
            value={compensation}
            onChange={(event) => setCompensation(parseInt(event.target.value))}
          />
          <TextField
            margin="dense"
            id="description"
            label="location"
            fullWidth
            variant="standard"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Skills Prefferred"
            fullWidth
            multiline
            variant="standard"
            value={skillsPrefferred.join('\n')}
            onChange={(event) =>
              setSkillsPrefferred(event.target.value.split('\n'))
            }
          />
          <TextField
            margin="dense"
            id="skillsRequired"
            label="Skills Required"
            fullWidth
            variant="standard"
            multiline
            value={skillsRequired.join('\n')}
            onChange={(event) =>
              setSkillsRequired(event.target.value.split('\n'))
            }
          />
          <TextField
            margin="dense"
            id="Industry"
            label="Industry"
            fullWidth
            variant="standard"
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <LoadingButton
            loading={createLoading || updateloading}
            onClick={() => saveOpportunity()}
          >
            POST
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NewOpportunity
