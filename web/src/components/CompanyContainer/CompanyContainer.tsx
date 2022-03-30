import { Box, Tab, Tabs, Typography } from '@mui/material'
import { CellSuccessProps } from '@redwoodjs/web'
import { CompanyProfileQuery } from 'types/graphql'
import { useState } from 'react'
import CompanyJobs from '../CompanyJobs/CompanyJobs'
import CompanyProfile from '../CompanyProfile/CompanyProfile'

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

const CompanyContainer = ({
  profile,
}: {
  profile: CellSuccessProps<CompanyProfileQuery>
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
          <Tab label="Opportunities" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CompanyProfile profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompanyJobs profile={profile} />
      </TabPanel>
    </Box>
  )
}

export default CompanyContainer
