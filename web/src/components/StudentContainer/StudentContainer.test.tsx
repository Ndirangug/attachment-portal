import { render } from '@redwoodjs/testing/web'

import StudentContainer from './StudentContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentContainer />)
    }).not.toThrow()
  })
})
