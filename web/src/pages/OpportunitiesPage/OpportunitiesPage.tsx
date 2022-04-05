import { Link, routes } from '@redwoodjs/router'
import { CellSuccessProps, MetaTags } from '@redwoodjs/web'
import PageHeader from 'src/components/PageHeader/PageHeader'
import { useState } from 'react'
import { TextField } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import OpportunitiesCell from 'src/components/OpportunitiesCell/OpportunitiesCell'
import { OpportunitiesQuery } from 'types/graphql'
import OpportunitiesListing from 'src/components/OpportunitiesListing/OpportunitiesListing'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { CREATE_APPLICATION } from './mutations'

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] =
    useState<CellSuccessProps<OpportunitiesQuery> | null>([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')

  const StyledTextField = styled(TextField)({
    '& label': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiInputBase-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  })

  const [createApplication, { createLoading, createError }] = useMutation(
    CREATE_APPLICATION,
    {
      onCompleted: () => {
        toast.success('Application sent  successfully!')
      },
      onError: (error) => {
        console.log(error)
        toast.error(error.message)
      },
    }
  )

  return (
    <>
      <MetaTags title="Opportunities" description="Opportunities page" />
      <Toaster />
      <PageHeader>
        <div className="opportunities-header flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl mb-6">Attachment Portal</h1>
          <p>
            Find industrial <span color="primary">attachment</span>{' '}
            Opportunities
          </p>

          <div className="search-fileds  flex  justify-around items-center mt-4">
            <StyledTextField
              margin="dense"
              id="category"
              className="mx-2"
              label="Category"
              fullWidth
              variant="filled"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />

            <StyledTextField
              margin="dense"
              id="location"
              label="Location"
              fullWidth
              className="mx-2"
              variant="standard"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />

            <StyledTextField
              margin="dense"
              id="title"
              label="Title"
              fullWidth
              className="mx-2"
              variant="standard"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
        </div>
      </PageHeader>

      <div className="page-content px-14 py-16">
        <h2 className="font-bold text-4xl">Opportunities</h2>

        <div className="job-listing">
          <OpportunitiesCell
            category={category}
            title={title}
            location={location}
            updateOpportunities={setOpportunities}
          />

          <OpportunitiesListing
            opportunities={opportunities}
            // deleteOpportunity={deleteOpportunity}
            // edit={edit}
            apply={createApplication}
          />
        </div>
      </div>
    </>
  )
}

export default OpportunitiesPage
