import { Company, Opportunity } from 'types/graphql'
import { Avatar, Chip, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'
import { Business, LocationOn, MonetizationOn } from '@mui/icons-material'
import { ApplicationStatus } from 'types/graphql'

interface OpportunityCardProps {
  opportunity: Opportunity
  company: Company
  isStudent?: boolean
  studentId?: string
  deleteOpportunity?: (options?: any) => Promise<any>
  edit?: (options?: any) => Promise<any>
  apply?: (options?: any) => Promise<any>
}

const OpportunityCard = ({
  opportunity,
  company,
  isStudent = false,
  deleteOpportunity,
  edit,
  apply,
  studentId,
}: OpportunityCardProps) => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <div className="flex px-5 pt-6 pb-3 border border-gray-500 my-4">
        <div className="avatar">
          <Avatar sx={{ width: 72, height: 72 }} />
        </div>
        <div className="job-cntent divide-y divide-gray-500 pl-8">
          <div className="content">
            <h2 className="text-2xl font-bold mb-1">{opportunity.title}</h2>
            <p className="font-light">{opportunity.jobDescription}</p>
            <div className="skills mt-2 mb-3">
              {[
                ...opportunity.skillsRequired,
                ...opportunity.skillsPrefferred,
              ].map((skill, i) => (
                <Chip key={i} className="mx-1" label={skill} />
              ))}
            </div>
          </div>

          <div className="footer flex justify-between pt-3">
            <div className="company-summary flex justify-around">
              <div className="company-name flex mx-2">
                <Business />
                <p>{company.name}</p>
              </div>
              <div className="location flex mx-2">
                <LocationOn />
                <p>{company.location}</p>
              </div>
              <div className="compensation flex mx-2">
                <MonetizationOn />
                <p>{opportunity.compensation}</p>
              </div>
            </div>
            <div className="actions">
              {isStudent ? (
                <div className="student-actions">
                  <LoadingButton
                    loading={loading}
                    onClick={async () => {
                    
                      setLoading(true)
                      const result = await apply({
                        variables: {
                          status: 'PENDING',
                          studentId: studentId,
                          opportunityId: opportunity.id,
                        },
                      })
                      setLoading(false)

                    }}
                  >
                    Apply
                  </LoadingButton>
                </div>
              ) : (
                <div className="recruiter-actions">
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpportunityCard
