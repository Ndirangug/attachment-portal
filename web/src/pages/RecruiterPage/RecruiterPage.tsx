import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RecruiterPage = () => {
  return (
    <>
      <MetaTags title="Recruiter" description="Recruiter page" />

      <h1>RecruiterPage</h1>
      <p>
        Find me in <code>./web/src/pages/RecruiterPage/RecruiterPage.tsx</code>
      </p>
      <p>
        My default route is named <code>recruiter</code>, link to me with `
        <Link to={routes.recruiter()}>Recruiter</Link>`
      </p>
    </>
  )
}

export default RecruiterPage
