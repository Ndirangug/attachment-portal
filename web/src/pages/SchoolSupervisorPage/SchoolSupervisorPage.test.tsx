import { render } from '@redwoodjs/testing/web'

import SchoolSupervisorPage from './SchoolSupervisorPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SchoolSupervisorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SchoolSupervisorPage />)
    }).not.toThrow()
  })
})
