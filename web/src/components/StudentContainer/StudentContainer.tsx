import { CellSuccessProps } from '@redwoodjs/web'
import { StudentProfileQuery } from 'types/graphql'
import StudentProfile from '../StudentProfile/StudentProfile'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import StudentApplications from '../StudentApplications/StudentApplications'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const StudentContainer = ({
  profile,
}: {
  profile: CellSuccessProps<StudentProfileQuery>
}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Sent Applications" {...a11yProps(1)} />
          <Tab label="Accepted Applications" {...a11yProps(2)} />
          <Tab label="Rejected Applications" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StudentProfile profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StudentApplications applications={profile.student.applications} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StudentApplications
          key={'ACCEPTED'}
          applications={profile.student.applications}
          status="ACCEPTED"
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StudentApplications
          key={'REJECTED'}
          applications={profile.student.applications}
          status="REJECTED"
        />
      </TabPanel>
    </Box>
  )
  // return (
  //   <div>
  //     <StudentProfile profile={profile} />
  //   </div>
  // )
}

export default StudentContainer
