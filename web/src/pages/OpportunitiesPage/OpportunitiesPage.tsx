import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OpportunitiesPage = () => {
  return (
    <>
      <MetaTags title="Opportunities" description="Opportunities page" />

      <h1>OpportunitiesPage</h1>
      <p>
        Find me in <code>./web/src/pages/OpportunitiesPage/OpportunitiesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>opportunities</code>, link to me with `
        <Link to={routes.opportunities()}>Opportunities</Link>`
      </p>
    </>
  )
}

export default OpportunitiesPage
