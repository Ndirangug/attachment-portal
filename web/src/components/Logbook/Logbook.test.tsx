import { render } from '@redwoodjs/testing/web'

import Logbook from './Logbook'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Logbook', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Logbook />)
    }).not.toThrow()
  })
})
