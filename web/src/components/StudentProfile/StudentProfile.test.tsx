import { render } from '@redwoodjs/testing/web'

import StudentProfile from './StudentProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentProfile />)
    }).not.toThrow()
  })
})
