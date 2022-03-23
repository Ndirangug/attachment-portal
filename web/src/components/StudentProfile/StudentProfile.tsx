import { StudentProfileQuery } from 'types/graphql'
import { Avatar, TextField, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import type { CellSuccessProps } from '@redwoodjs/web'
import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import ExperienceEntry from 'src/components/ExperienceEntry/ExperienceEntry'
import EducationEntry from 'src/components/EducationEntry/EducationEntry'
import { useMutation } from '@redwoodjs/web'
import { CREATE_STUDENT, UPDATE_STUDENT } from './mutations'
import { toast, Toaster } from '@redwoodjs/web/toast'

const StudentProfile = ({
  profile,
}: {
  profile: CellSuccessProps<StudentProfileQuery>
}) => {
  //const profile = profile
  const [firstName, setFirstName] = useState('First Name')
  const [lastName, setLastName] = useState('Last Name')
  const [email, setEmail] = useState('Email')
  const [education, setEducation] = useState([])
  const [twitterUrl, setTwitterUrl] = useState('Twitter')
  const [githubUrl, setGithubUrl] = useState('Github')
  const [linkedinUrl, setLinkedinUrl] = useState('Linked in')
  const [aboutMe, setAboutme] = useState('about me')
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  const [city, setCity] = useState('City')
  const [course, setCourse] = useState('City')
  const [title, setTitle] = useState('City')
  const [editabe, setEditabe] = useState(false)
  const [localStateSet, setLocalStateSet] = useState(false)

  const [createStudent, { createLoading, createError }] = useMutation(
    CREATE_STUDENT,
    {
      onCompleted: () => {
        toast.success('Student Profile created successfully!')
      },
    }
  )

  const [updateStudent, { updateloading, updateError }] = useMutation(
    UPDATE_STUDENT,
    {
      onCompleted: () => {
        toast.success('Profile updated successfully!')
      },
    }
  )

  const saveProfile = () => {
    console.log('saveProfile')

    if (profile.student) {
      console.log('update')
      updateStudent({
        variables: {
          id: profile.student.id,
          studentInput: collectData(),
        },
      })
    } else {
      console.log('creaate')
      createStudent({
        variables: {
          userId: profile.id,
          createStudentInput: collectData(),
        },
      })
    }
  }

  const collectData = () => ({
    firstName,
    lastName,
    city,
    aboutMe,
    twitterUrl,
    githubUrl,
    linkedinUrl,
    skills,
    course,
    title,
    education: JSON.stringify(education),
    experience: JSON.stringify(experience),
  })

  const populateLocalState = () => {
    // console.log('populateLocalState')
    // console.log(profile)
    if (profile.student && localStateSet === false) {
      setFirstName(profile.student.firstName)
      setLastName(profile.student.lastName)
      setEmail(profile.email)
      setCity(profile.student.city)
      setAboutme(profile.student.aboutMe)
      setTwitterUrl(profile.student.twitterUrl)
      setGithubUrl(profile.student.githubUrl)
      setLinkedinUrl(profile.student.linkedinUrl)
      setSkills(profile.student.skills)
      setCourse(profile.student.course)
      setTitle(profile.student.title)
      setEducation(JSON.parse(profile.student.education))
      setExperience(JSON.parse(profile.student.experience))
      setLocalStateSet(true)
    }
  }

  populateLocalState()

  return (
    <>
      <Toaster />

      <div className="bg-white p-16">
        <div className="profile-header flex justify-start items-center">
          <div className="avatar">
            <Avatar sx={{ width: '8em', height: '8em' }}>FN</Avatar>
          </div>
          <div className="summary ml-10 w-full">
            <div className="name flex">
              <EditText
                onChange={setFirstName}
                value={firstName}
                placeholder="First Name"
              />
              <EditText
                onChange={setLastName}
                value={lastName}
                placeholder="Last Name"
              />
            </div>
            <EditText
              value={course}
              placeholder="Course"
              onChange={setCourse}
            />
          </div>
        </div>

        <div className="about mt-12">
          <h1 className="uppercase font-bold">About Me</h1>
          <EditTextarea
            onChange={setAboutme}
            value={aboutMe}
            placeholder="about me"
          />
        </div>

        <div className="experience mt-12">
          <h1 className="uppercase font-bold">Experience</h1>
          {experience.map((entry) => (
            <ExperienceEntry key={entry.id} />
          ))}
        </div>

        <div className="education mt-12">
          <h1 className="uppercase font-bold">Education</h1>
          {experience.map((entry) => (
            <ExperienceEntry key={entry.id} />
          ))}
        </div>

        <div className="skills"></div>

        <div className="save-btn mt-10">
          <LoadingButton
            loading={createLoading || updateloading}
            //loading={true}
            variant="contained"
            className="green fixed inset-x-2/4  px-16 py-2 -translate-x-2/4 bottom-10 text-white"
            onClick={saveProfile}
            // sx={{translate: 'right'}}
          >
            SAVE
          </LoadingButton>
        </div>
      </div>
    </>
  )
}

export default StudentProfile
