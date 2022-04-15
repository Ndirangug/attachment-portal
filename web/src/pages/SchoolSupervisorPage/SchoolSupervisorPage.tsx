import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageHeader from 'src/components/PageHeader/PageHeader'
import { User } from 'types/graphql'
import SchoolSupervisorCell from 'src/components/SchoolSupervisorCell/SchoolSupervisorCell'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'
import PlacedStudentsSchoolView from 'src/components/PlacedStudentsSchoolView/PlacedStudentsSchoolView'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const SchoolSupervisorPage = () => {
  const { currentUser, hasRole, userMetadata, logOut } = useAuth()
  const [schoolSupervisor, setSchoolSupervisor] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  if (!hasRole('SCHOOL_SUPERVISOR')) {
    console.log(`${currentUser.roles} can't login as SCHOOL_SUPERVISOR`)
    logOut()
    //toast.warn('You do not have permission to view this page.')
    toast.error(
      `You(${currentUser.roles}) do not have permission to view this page.`
    )
  }

  return (
    <>
      <MetaTags title="SchoolSupervisor" description="SchoolSupervisor page" />
      <Toaster />
      <PageHeader>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl">School Supervisor</h1>
          {loading ? (
            'loading'
          ) : (
            <div className="summary flex flex-col justify-center items-center">
              <p className="text-white text-xl italic mt-7">
                {`Mr.  ${schoolSupervisor.schoolSupervisor[0].firstName} ${schoolSupervisor.schoolSupervisor[0].lastName}`}
              </p>
              <p className="text-white  italic mt-2">
                {schoolSupervisor.email}
              </p>
            </div>
          )}
        </div>
      </PageHeader>

      <SchoolSupervisorCell
        id={currentUser.id}
        schoolSupervisor={schoolSupervisor}
        updateSchoolSupervisor={setSchoolSupervisor}
        updateLoading={setLoading}
      />

      <PlacedStudentsSchoolView />
    </>
  )
}

export default SchoolSupervisorPage
