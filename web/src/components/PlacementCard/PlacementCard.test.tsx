import { render } from '@redwoodjs/testing/web'

import PlacementCard from './PlacementCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlacementCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlacementCard />)
    }).not.toThrow()
  })
})
