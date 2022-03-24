import { render } from '@redwoodjs/testing/web'

import AddEducationExperience from './AddEducationExperience'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddEducationExperience', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddEducationExperience />)
    }).not.toThrow()
  })
})
