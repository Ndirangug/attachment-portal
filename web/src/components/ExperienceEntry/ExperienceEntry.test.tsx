import { render } from '@redwoodjs/testing/web'

import ExperienceEntry from './ExperienceEntry'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ExperienceEntry', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExperienceEntry />)
    }).not.toThrow()
  })
})
