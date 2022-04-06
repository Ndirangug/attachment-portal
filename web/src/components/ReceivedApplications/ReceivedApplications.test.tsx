import { render } from '@redwoodjs/testing/web'

import ReceivedApplications from './ReceivedApplications'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ReceivedApplications', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReceivedApplications />)
    }).not.toThrow()
  })
})
