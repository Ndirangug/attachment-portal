import { CellSuccessProps } from '@redwoodjs/web'
import { CompanyProfileQuery } from 'types/graphql'
import { Box, Tab, Tabs, Typography, Grid } from '@mui/material'
import { useState } from 'react'
import CompanyJobs from '../CompanyJobs/CompanyJobs'
import CompanyProfile from '../CompanyProfile/CompanyProfile'
import StudentApplicationCard from '../StudentApplicationCard/StudentApplicationCard'

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
      id={`applications-tabpanel-${index}`}
      aria-labelledby={`applications-tab-${index}`}
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
    id: `applications-tab-${index}`,
    'aria-controls': `applications-tabpanel-${index}`,
  }
}

const ReceivedApplications = ({
  profile,
}: {
  profile: CellSuccessProps<CompanyProfileQuery>
}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box className="received-applications-container" sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {profile.company.opportunities.map((opportunity, i) => (
            <Tab key={i} label={opportunity.title} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>

      {profile.company.opportunities.map((opportunity, i) => (
        <TabPanel key={i} value={value} index={1}>
          <Grid className="opportunities-grid" container spacing={2}>
            {opportunity.applications
              .filter((application) => application.status !== 'ACCEPTED')
              .map((application, j) => (
                <Grid item xs={12} sm={6} md={4} key={j}>
                  <StudentApplicationCard
                    application={application}
                    opportunityId={opportunity.id}
                  />
                </Grid>
              ))}
          </Grid>
        </TabPanel>
      ))}
      {/* <TabPanel value={value} index={0}>
        <CompanyProfile profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompanyJobs profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReceivedApplications profile={profile} />
      </TabPanel> */}
    </Box>
  )
}

export default ReceivedApplications
