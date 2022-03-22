import { StudentProfileQuery } from 'types/graphql'
import { Avatar, TextField } from '@mui/material'
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

  return (
    <div className="bg-white pa-10">
      <div className="profile-header flex justify-start items-center">
        <div className="avatar">
          <Avatar sx={{ width: '2em' }}>FN</Avatar>
        </div>
        <div className="summary">
          <div className="name flex">
            <EditText defaultValue={firstName} placeholder="First Name" />
            <EditText defaultValue={lastName} placeholder="Last Name" />
          </div>
          <EditText
            value={education.length > 0 ? education[0].length : 'Course'}
            placeholder="Course"
          />
        </div>
      </div>

      <div className="about">
        <h1>About Me</h1>
        <EditTextarea value={aboutme} placeholder="about me" />
      </div>

      <div className="experience">
        <h1>Experience</h1>
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
    </div>
  )
}

export default StudentProfile
