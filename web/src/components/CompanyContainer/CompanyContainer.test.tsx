import { render } from '@redwoodjs/testing/web'

import CompanyContainer from './CompanyContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CompanyContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompanyContainer />)
    }).not.toThrow()
  })
})
