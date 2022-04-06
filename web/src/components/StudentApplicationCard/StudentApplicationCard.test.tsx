import { render } from '@redwoodjs/testing/web'

import StudentApplicationCard from './StudentApplicationCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentApplicationCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentApplicationCard />)
    }).not.toThrow()
  })
})
