import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import DateFnsAdapter from '@date-io/date-fns'

const AddEducationExperience = ({
  updateProfileState,
  isOpen,
  handleClose,
  dialogTitle,
}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [institution, setIntsitution] = useState('')
  const [startDate, setStartDate] = useState('') //useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState('') //useState<Date | null>(new Date())
  const [currentlyHere, setCurrentlyHere] = useState(false)
  const isEducation = dialogTitle.toLowerCase().includes('education')

  const onAddClick = () => {
    updateProfileState({
      title,
      institution,
      description,
      startDate,
      endDate,
      currentlyHere,
      isEducation,
    })

    handleClose()
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="title"
            label={isEducation ? 'Course' : 'Position'}
            fullWidth
            variant="standard"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            margin="dense"
            id="institution"
            label={isEducation ? 'Institution' : 'Company'}
            fullWidth
            variant="standard"
            value={institution}
            onChange={(event) => setIntsitution(event.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="description"
            fullWidth
            variant="standard"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <div className="dates mt-4 mb-1 flex justify-between space-x-2">
            <TextField
              id="startdate"
              label="Start Date"
              type="date"
              value={startDate}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setStartDate(event.target.value)
              }}
            />
            <TextField
              id="enddate"
              label="End Date"
              type="date"
              value={endDate}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setEndDate(event.target.value)
              }}
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                value={currentlyHere}
                onChange={(event) => {
                  setCurrentlyHere(!currentlyHere)
                  if (currentlyHere) {
                    setEndDate('')
                  }
                }}
              />
            }
            label="Currently Here"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onAddClick}>ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddEducationExperience
