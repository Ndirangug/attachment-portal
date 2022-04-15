import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageHeader from 'src/components/PageHeader/PageHeader'
import StudentProfileCell from 'src/components/StudentProfileCell/StudentProfileCell'
import { useAuth } from '@redwoodjs/auth'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const StudentProfilePage = () => {
  const { currentUser, hasRole, logOut } = useAuth()

  if (!hasRole('STUDENT')) {
    console.log(`${currentUser.roles} can't login as STUDENT`)
    logOut()
    //toast.warn('You do not have permission to view this page.')
    toast.error(
      `You(${currentUser.roles}) do not have permission to view this page.`
    )
  }

  return (
    <>
      <MetaTags title="StudentProfile" description="StudentProfile page" />
      <Toaster />
      <PageHeader>
        <div className="flex justify-center items-center">
          <h1 className="text-white text-3xl">Student Profile</h1>
        </div>
      </PageHeader>

      <div className="content bg-gray-300 px-16 lg:px-32 py-16 lg:py-32">
        <StudentProfileCell id={currentUser.id} />
      </div>
    </>
  )
}

export default StudentProfilePage
