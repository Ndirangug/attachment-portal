import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PageHeader from 'src/components/PageHeader/PageHeader'
import CompanyProfileCell from 'src/components/CompanyProfileCell/CompanyProfileCell'

const RecruiterPage = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <>
      <MetaTags title="CompanyProfile" description="CompanyProfile page" />

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
