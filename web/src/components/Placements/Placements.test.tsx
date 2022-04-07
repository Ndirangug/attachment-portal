import { render } from '@redwoodjs/testing/web'

import Placements from './Placements'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Placements', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Placements />)
    }).not.toThrow()
  })
})
