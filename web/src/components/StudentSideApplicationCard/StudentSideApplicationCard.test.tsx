import { render } from '@redwoodjs/testing/web'

import StudentSideApplicationCard from './StudentSideApplicationCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentSideApplicationCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentSideApplicationCard />)
    }).not.toThrow()
  })
})
