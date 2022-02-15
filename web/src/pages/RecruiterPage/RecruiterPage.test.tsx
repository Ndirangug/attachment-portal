import { render } from '@redwoodjs/testing/web'

import RecruiterPage from './RecruiterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RecruiterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecruiterPage />)
    }).not.toThrow()
  })
})
