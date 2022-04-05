import { render } from '@redwoodjs/testing/web'

import OpportunitiesListing from './OpportunitiesListing'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OpportunitiesListing', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpportunitiesListing />)
    }).not.toThrow()
  })
})
