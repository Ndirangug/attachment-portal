import { render } from '@redwoodjs/testing/web'

import LogbookEntry from './LogbookEntry'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LogbookEntry', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogbookEntry />)
    }).not.toThrow()
  })
})
