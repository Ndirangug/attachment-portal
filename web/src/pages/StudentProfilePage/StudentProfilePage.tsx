import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StudentProfilePage = () => {
  return (
    <>
      <MetaTags title="StudentProfile" description="StudentProfile page" />

      <h1>StudentProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/StudentProfilePage/StudentProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>studentProfile</code>, link to me with `
        <Link to={routes.studentProfile()}>StudentProfile</Link>`
      </p>
    </>
  )
}

export default StudentProfilePage
