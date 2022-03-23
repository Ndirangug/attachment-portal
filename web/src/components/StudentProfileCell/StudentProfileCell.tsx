import type { StudentProfileQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import StudentProfile from '../StudentProfile/StudentProfile'

export const QUERY = gql`
  query StudentProfileQuery($id: String!) {
    studentProfile: user(id: $id) {
      id
      email
      student {
        id
        firstName
        lastName
        title
        course
        city
        aboutMe
        skills
        linkedinUrl
        githubUrl
        twitterUrl
        education
        experience
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  studentProfile,
}: CellSuccessProps<StudentProfileQuery>) => {
  return (
    <div>
      <StudentProfile profile={studentProfile} />
    </div>
  )
}
