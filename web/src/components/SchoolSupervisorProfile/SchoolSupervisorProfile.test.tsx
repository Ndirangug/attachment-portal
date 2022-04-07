import { render } from '@redwoodjs/testing/web'

import SchoolSupervisorProfile from './SchoolSupervisorProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SchoolSupervisorProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SchoolSupervisorProfile />)
    }).not.toThrow()
  })
})
