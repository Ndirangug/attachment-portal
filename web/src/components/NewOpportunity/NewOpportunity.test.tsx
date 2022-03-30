import { render } from '@redwoodjs/testing/web'

import NewOpportunity from './NewOpportunity'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewOpportunity', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewOpportunity />)
    }).not.toThrow()
  })
})
