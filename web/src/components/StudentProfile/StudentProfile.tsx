import { StudentProfileQuery } from 'types/graphql'
import { Avatar, TextField, Button, IconButton, Chip } from '@mui/material'
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
import { Add } from '@mui/icons-material'
import AddEducationExperience from '../AddEducationExperience/AddEducationExperience'

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
  const [editabe, setEditabe] = useState(true)
  const [skillBuffer, setSkillBuffer] = useState('')
  const [localStateSet, setLocalStateSet] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('Add Education')

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
    if (profile.student) {
      updateStudent({
        variables: {
          id: profile.student.id,
          studentInput: collectData(),
        },
      })
    } else {
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

  const toggleDialog = () => setDialogOpen(!dialogOpen)

  const updateStateFromDialog = ({
    title,
    institution,
    description,
    startDate,
    endDate,
    currentlyHere,
    isEducation,
  }) => {
    if (isEducation) {
      setEducation([
        ...education,
        {
          course: title,
          school: institution,
          description,
          duration: `${startDate} - ${currentlyHere ? 'present' : endDate}`,
        },
      ])
    } else {
      setExperience([
        ...experience,
        {
          position: title,
          company: institution,
          description,
          duration: `${startDate} - ${currentlyHere ? 'present' : endDate}`,
        },
      ])
    }
  }

  const deleteSkill = (skillToRemove) => {
    const updatedSkills = skills.filter((skill) => skill != skillToRemove)
    setSkills(updatedSkills)
  }

  const addSkill = (skillToAdd) => {
    setSkills([...skills, skillToAdd])
    setSkillBuffer('')
  }

  populateLocalState()

  return (
    <>
      <Toaster />
      <AddEducationExperience
        isOpen={dialogOpen}
        dialogTitle={dialogTitle}
        handleClose={toggleDialog}
        updateProfileState={updateStateFromDialog}
      />

      <div className="bg-white p-8 lg:p-32">
        <div className="profile-header flex justify-start items-center">
          <div className="avatar">
            <Avatar sx={{ width: '8em', height: '8em' }}>FN</Avatar>
          </div>
          <div className="summary ml-10 w-full">
            <div className="name flex">
              <EditText
                readonly={!editabe}
                onChange={setFirstName}
                value={firstName}
                placeholder="First Name"
              />
              <EditText
                readonly={!editabe}
                onChange={setLastName}
                value={lastName}
                placeholder="Last Name"
              />
            </div>
            <EditText
              readonly={!editabe}
              value={course}
              placeholder="Course"
              onChange={setCourse}
            />
          </div>
        </div>

        <div className="about mt-12">
          <h1 className="uppercase font-bold">About Me</h1>
          <EditTextarea
            readonly={!editabe}
            onChange={setAboutme}
            value={aboutMe}
            placeholder="about me"
          />
        </div>

        <div className="experience mt-12">
          <div className="flex items-center">
            <h1 className="uppercase font-bold">Experience</h1>
            <IconButton
              className="ml-5"
              sx={{
                height: '1.5em',
                width: '1.5em',
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': { backgroundColor: 'primary.main' },
              }}
              size="small"
              onClick={() => {
                setDialogTitle('Add Experience')
                toggleDialog()
              }}
            >
              <Add />
            </IconButton>
          </div>

          {experience.map((entry, i) => (
            <ExperienceEntry key={i} entry={entry} />
          ))}
        </div>

        <div className="education mt-12">
          <div className="flex items-center">
            <h1 className="uppercase font-bold">Education</h1>
            <IconButton
              className="ml-5"
              sx={{
                height: '1.5em',
                width: '1.5em',
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': { backgroundColor: 'primary.main' },
              }}
              size="small"
              onClick={() => {
                setDialogTitle('Add Education')
                toggleDialog()
              }}
            >
              <Add />
            </IconButton>
          </div>
          {education.map((entry, i) => (
            <EducationEntry key={i} entry={entry} />
          ))}
        </div>

        <div className="skills">
          <div className="flex items-center">
            <h1 className="uppercase font-bold">Skills</h1>
            <IconButton
              className="ml-5"
              sx={{
                height: '1.5em',
                width: '1.5em',
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': { backgroundColor: 'primary.main' },
              }}
              size="small"
              onClick={() => {}}
            >
              <Add />
            </IconButton>
          </div>
          <EditText
            className="my-2"
            readonly={!editabe}
            value={skillBuffer}
            placeholder="Add Skill"
            onChange={setSkillBuffer}
            onSave={({ value }) => {
              addSkill(value)
            }}
          />
          {skills.map((entry, i) => (
            <Chip
              className="mx-1 text-white"
              color="primary"
              label={entry}
              key={i}
              onDelete={() => deleteSkill(entry)}
            />
          ))}
        </div>

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
