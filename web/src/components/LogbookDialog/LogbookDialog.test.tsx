import { render } from '@redwoodjs/testing/web'

import LogbookDialog from './LogbookDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LogbookDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogbookDialog />)
    }).not.toThrow()
  })
})
