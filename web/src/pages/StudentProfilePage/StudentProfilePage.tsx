import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageHeader from 'src/components/PageHeader/PageHeader'
import StudentProfileCell from 'src/components/StudentProfileCell/StudentProfileCell'
import { useAuth } from '@redwoodjs/auth'

const StudentProfilePage = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <>
      <MetaTags title="StudentProfile" description="StudentProfile page" />

      <PageHeader>
        <div className="flex justify-center items-center">
          <h1 className="text-white text-3xl">Student Profile</h1>
        </div>
      </PageHeader>

      <div className="content bg-gray-300 px-7 py-7">
        <StudentProfileCell id={currentUser.id} />
      </div>
    </>
  )
}

export default StudentProfilePage
