import { render } from '@redwoodjs/testing/web'

import PlacedStudentsSchoolView from './PlacedStudentsSchoolView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlacedStudentsSchoolView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlacedStudentsSchoolView />)
    }).not.toThrow()
  })
})
