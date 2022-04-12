//import { LogbookEntry, Student } from 'types/graphql'
import { TextField } from '@mui/material'
import { useState } from 'react'
import StudentLogbookEntriesCell from '../StudentLogbookEntriesCell/StudentLogbookEntriesCell'
import LogbookEntryComponent from '../LogbookEntry/LogbookEntry'

import { toast, Toaster } from '@redwoodjs/web/dist/toast'

interface LogbookProps {
  student: Student
  isStudent: boolean
  setLoading: (boolean) => void
  handleClose: () => void
  // studentComments: string
  // setStudentComments: (string) => void
  // supervisorComments: string
  // setSupervisorComments: (string) => void
  setTodaysEntryExists: (boolean) => void
  // setTodaysEntryId: (string) => void
  isSchoolSupervisor: boolean
  todaysEntry: LogbookEntry
  setTodaysEntry: (LogbookEntry) => void
  todaysEntrySet: boolean
  setTodaysEntrySet: (boolean) => void
}

const Logbook = ({
  student,
  isStudent,
  todaysEntry,
  setTodaysEntry,
  isSchoolSupervisor,
  setTodaysEntryExists,
  todaysEntrySet,
  setTodaysEntrySet,
}: LogbookProps) => {
  const [logbookEntries, setLogbookEntries] = useState<LogbookEntry[]>([])
  const [count, setCount] = useState(0)

  // console.log('todays entry', todaysEntry)
  console.log('logbook rerednered,', todaysEntry)

  const updateLogBookEntries = (logbookEntries: LogbookEntry[]) => {
    setLogbookEntries(logbookEntries)

    const todaysEntryExists = logbookEntries.some(
      (entry) =>
        entry.date.substring(0, 10) ===
        new Date().toISOString().substring(0, 10)
    )

    setTodaysEntryExists(todaysEntryExists)

    // setTodaysEntry(logbookEntries[logbookEntries.length - 1])
    const updateTodaysEntry = () => {
      setTodaysEntry(logbookEntries[logbookEntries.length - 1])
      setTodaysEntrySet(true)
    }

    todaysEntryExists && !todaysEntrySet && updateTodaysEntry()
  }

  return (
    <div className="px-10 pt-5">
      <Toaster />

      <StudentLogbookEntriesCell
        studentId={student.id}
        updateLogBookEntries={updateLogBookEntries}
      />

      {isSchoolSupervisor ? (
        ''
      ) : (
        <div className="addTodayComments">
          <TextField
            margin="dense"
            id="comments"
            multiline
            label="Today's comments"
            fullWidth
            variant="standard"
            defaultValue={
              isStudent
                ? todaysEntry.studentComments
                : todaysEntry.industrySupervisorComments
            }
            onChange={(event) => {
              console.log(event.target.value)
              isStudent
                ? setTodaysEntry({
                    // ...todaysEntry,
                    ...todaysEntry,
                    studentComments: event.target.value,
                  })
                : setTodaysEntry({
                    ...todaysEntry,
                    industrySupervisorComments: event.target.value,
                  })
            }}
          />
        </div>
      )}

      <div className="previous-comments mt-10">
        {logbookEntries &&
          [...logbookEntries]
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((entry, i) => (
              <div key={i} className="my-4">
                <LogbookEntryComponent entry={entry} />
              </div>
            ))}
      </div>
    </div>
  )
}

export default Logbook
