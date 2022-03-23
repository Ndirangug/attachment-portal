import { StudentProfileQuery } from 'types/graphql'
import { Avatar, TextField, Button } from '@mui/material'
import type { CellSuccessProps } from '@redwoodjs/web'
import { useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import ExperienceEntry from 'src/components/ExperienceEntry/ExperienceEntry'
import EducationEntry from 'src/components/EducationEntry/EducationEntry'

const StudentProfile = ({
  profile,
}: {
  profile: CellSuccessProps<StudentProfileQuery>
}) => {
  //const profile = profile.studentProfile
  const [firstName, setFirstName] = useState('First Name')
  const [lastName, setLastName] = useState('Last Name')
  const [email, setEmail] = useState('Email')
  const [education, setEducation] = useState([])
  const [twitterUrl, setTwitterUrl] = useState('Email')
  const [githubUrl, setGithubUrl] = useState('Email')
  const [linkedinUrl, setLinkedinUrl] = useState('Email')
  const [aboutme, setAboutme] = useState('about me')
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState('Email')
  const [editabe, setEditabe] = useState(false)

  const saveProfile = () => {
    console.log('saveProfile')
  }

  console.log('received profile')
  console.log(profile)

  return (
    <div className="bg-white p-16">
      <div className="profile-header flex justify-start items-center">
        <div className="avatar">
          <Avatar sx={{ width: '8em', height: '8em' }}>FN</Avatar>
        </div>
        <div className="summary ml-10 w-full">
          <div className="name flex">
            <EditText
              onChange={(value) => setFirstName(value)}
              defaultValue={firstName}
              placeholder="First Name"
            />
            <EditText defaultValue={lastName} placeholder="Last Name" />
          </div>
          <EditText
            value={education.length > 0 ? education[0].length : 'Course'}
            placeholder="Course"
          />
        </div>
      </div>

      <div className="about mt-12">
        <h1 className="uppercase font-bold">About Me</h1>
        <EditTextarea value={aboutme} placeholder="about me" />
      </div>

      <div className="experience mt-12">
        <h1 className="uppercase font-bold">Experience</h1>
        {experience.map((entry) => (
          <ExperienceEntry key={entry.id} />
        ))}
      </div>

      <div className="education">
        <h1>Education</h1>
        {experience.map((entry) => (
          <ExperienceEntry key={entry.id} />
        ))}
      </div>

      <div className="skills"></div>

      <div className="save-btn mt-10">
        <Button
          variant="contained"
          className="green fixed inset-x-2/4 px-16 translate-x-2/4 text-white"
          onClick={saveProfile}
          // sx={{translate: 'right'}}
        >
          SAVE
        </Button>
      </div>
    </div>
  )
}

export default StudentProfile
