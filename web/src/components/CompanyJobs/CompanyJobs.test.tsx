import { render } from '@redwoodjs/testing/web'

import CompanyJobs from './CompanyJobs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CompanyJobs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompanyJobs />)
    }).not.toThrow()
  })
})
