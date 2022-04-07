import type { StudentProfileQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import StudentContainer from '../StudentContainer/StudentContainer'

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
        applications {
          id
          status
          student {
            id
            firstName
            lastName
            course
            linkedinUrl
            githubUrl
            twitterUrl
            city
            aboutMe
            experience
            education
            skills
          }
          createdAt
          Placement {
            id
            createdAt
          }
          opportunity {
            id
            title
            company {
              id
              name
            }
          }
        }
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
      <StudentContainer profile={studentProfile} />
    </div>
  )
}
