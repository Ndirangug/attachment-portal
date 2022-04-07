import { useState } from 'react'
import { Placement } from 'types/graphql'
import { Grid } from '@mui/material'
import PlacedStudentsCell from '../PlacedStudentsCell/PlacedStudentsCell'
import StudentOnAttachmentCard from '../StudentOnAttachmentCard/StudentOnAttachmentCard'

const PlacedStudentsSchoolView = () => {
  const [placements, setPlacements] = useState<Placement[]>([])
  const [loading, setLoading] = useState(true)

  return (
    <>
      <PlacedStudentsCell
        updatePlacements={setPlacements}
        updateLoading={setLoading}
      />
      <div className="flex flex-col justify-center items-center  py-16 px-16">
        <h2 className="font-bold text-2xl">Students on Attachment</h2>

        <div className="placements-container mt-6">
          {loading ? (
            'loading'
          ) : (
            <Grid className="opportunities-grid" container spacing={4}>
              {placements.map((placement, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <StudentOnAttachmentCard placement={placement} />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
    </>
  )
}

export default PlacedStudentsSchoolView
