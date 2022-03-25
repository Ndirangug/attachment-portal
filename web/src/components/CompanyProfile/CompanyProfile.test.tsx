import { render } from '@redwoodjs/testing/web'

import CompanyProfile from './CompanyProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CompanyProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompanyProfile />)
    }).not.toThrow()
  })
})
