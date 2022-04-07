import { render } from '@redwoodjs/testing/web'

import StudentApplications from './StudentApplications'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentApplications', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentApplications />)
    }).not.toThrow()
  })
})
