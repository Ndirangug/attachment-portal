import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageHeader from 'src/components/PageHeader/PageHeader'
import CompanyProfileCell from 'src/components/CompanyProfileCell/CompanyProfileCell'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const RecruiterPage = () => {
  const { currentUser, hasRole, logOut } = useAuth()

  if (!hasRole('INDUSTRY_SUPERVISOR')) {
    console.log(`${currentUser.roles} can't login as INDUSTRY_SUPERVISOR`)
    logOut()
    //toast.warn('You do not have permission to view this page.')
    toast.error(
      `You(${currentUser.roles}) do not have permission to view this page.`
    )
  }

  return (
    <>
      <MetaTags title="CompanyProfile" description="CompanyProfile page" />
      <Toaster />
      <PageHeader>
        <div className="flex justify-center items-center">
          <h1 className="text-white text-3xl">Company Profile</h1>
        </div>
      </PageHeader>

      <div className="content bg-gray-300 px-16 lg:px-32 py-16 lg:py-32">
        <CompanyProfileCell id={currentUser.id} />
      </div>
    </>
  )
}

export default RecruiterPage


