import { render } from '@redwoodjs/testing/web'

import ApplicationDetailsDialog from './ApplicationDetailsDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ApplicationDetailsDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationDetailsDialog />)
    }).not.toThrow()
  })
})
