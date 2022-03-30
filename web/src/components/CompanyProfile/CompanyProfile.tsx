import { CellSuccessProps, useMutation } from '@redwoodjs/web'
import { CompanyProfileQuery } from 'types/graphql'
import { useState } from 'react'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { CREATE_COMPANY, UPDATE_COMPANY } from '../CompanyProfile/mutations'
import { Avatar } from '@mui/material'
import { EditText, EditTextarea } from 'react-edit-text'
import { LoadingButton } from '@mui/lab'

const CompanyProfile = ({
  profile,
}: {
  profile: CellSuccessProps<CompanyProfileQuery>
}) => {
  const [name, setName] = useState('Company Name')
  const [bio, setBio] = useState('Company Bio')
  const [industry, setIndustry] = useState('Industry')
  const [photo, setPhoto] = useState('photo')
  const [location, setLocation] = useState('Location')
  const [localStateSet, setLocalStateSet] = useState(false)
  const [editabe, setEditabe] = useState(true)

  const [createCompany, { createLoading, createError }] = useMutation(
    CREATE_COMPANY,
    {
      onCompleted: () => {
        toast.success('Company Profile created successfully!')
      },
    }
  )

  const [updateCompany, { updateloading, updateError }] = useMutation(
    UPDATE_COMPANY,
    {
      onCompleted: () => {
        toast.success('Profile updated successfully!')
      },
    }
  )

  const saveProfile = () => {
    if (profile.company) {
      updateCompany({
        variables: {
          id: profile.company.id,
          companyInput: collectData(),
        },
      })
    } else {
      createCompany({
        variables: {
          userId: profile.id,
          createCompanyInput: collectData(),
        },
      })
    }
  }

  const collectData = () => ({
    name,
    bio,
    industry,
    photo,
    location,
  })

  const populateLocalState = () => {
    if (profile.company && localStateSet === false) {
      setName(profile.company.name)
      setBio(profile.company.bio)
      setIndustry(profile.company.industry)
      setPhoto(profile.company.photo)
      setLocation(profile.company.location)
      setLocalStateSet(true)
    }
  }

  populateLocalState()

  return (
    <div>
      <Toaster />

      <div className="bg-white p-8 lg:p-32">
        <div className=" flex justify-start items-center flex-col">
          <div className="avatar">
            <Avatar sx={{ width: '8em', height: '8em' }}>FN</Avatar>
          </div>

          <div className="fields mt-2 flex justify-start items-center flex-col">
            <EditText
              className="my-2"
              readonly={!editabe}
              onChange={setName}
              value={name}
              placeholder="Name"
            />
            <EditTextarea
              className="my-2"
              readonly={!editabe}
              onChange={setBio}
              value={bio}
              placeholder="Bio"
            />
          </div>
          <EditText
            className="my-2"
            readonly={!editabe}
            value={location}
            placeholder="Location"
            onChange={setLocation}
          />
          <EditText
            className="my-2"
            readonly={!editabe}
            value={industry}
            placeholder="Industry"
            onChange={setIndustry}
          />

          <div className="save-btn mt-10">
            <LoadingButton
              sx={{ width: 'max-content' }}
              loading={createLoading || updateloading}
              //loading={true}
              variant="contained"
              className="green fixed inset-x-2/4  px-16 py-2 -translate-x-2/4 bottom-10 text-white"
              onClick={saveProfile}
              // sx={{translate: 'right'}}
            >
              SAVE PROFILE
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile

