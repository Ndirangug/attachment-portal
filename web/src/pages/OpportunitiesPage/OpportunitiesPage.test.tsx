import { render } from '@redwoodjs/testing/web'

import OpportunitiesPage from './OpportunitiesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OpportunitiesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpportunitiesPage />)
    }).not.toThrow()
  })
})
