import { render } from '@redwoodjs/testing/web'

import IndustrySupervisorPage from './IndustrySupervisorPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IndustrySupervisorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndustrySupervisorPage />)
    }).not.toThrow()
  })
})
