import {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
} from './students'
import type { StandardScenario } from './students.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('students', () => {
  scenario('returns all students', async (scenario: StandardScenario) => {
    const result = await students()

    expect(result.length).toEqual(Object.keys(scenario.student).length)
  })

  scenario('returns a single student', async (scenario: StandardScenario) => {
    const result = await student({ id: scenario.student.one.id })

    expect(result).toEqual(scenario.student.one)
  })

  scenario('creates a student', async (scenario: StandardScenario) => {
    const result = await createStudent({
      input: {
        firstName: 'String',
        lastName: 'String',
        title: 'String',
        course: 'String',
        aboutMe: 'String',
        skills: 'String',
        experience: { foo: 'bar' },
        education: { foo: 'bar' },
        userId: scenario.student.two.userId,
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.course).toEqual('String')
    expect(result.aboutMe).toEqual('String')
    expect(result.skills).toEqual('String')
    expect(result.experience).toEqual({ foo: 'bar' })
    expect(result.education).toEqual({ foo: 'bar' })
    expect(result.userId).toEqual(scenario.student.two.userId)
  })

  scenario('updates a student', async (scenario: StandardScenario) => {
    const original = await student({ id: scenario.student.one.id })
    const result = await updateStudent({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a student', async (scenario: StandardScenario) => {
    const original = await deleteStudent({ id: scenario.student.one.id })
    const result = await student({ id: original.id })

    expect(result).toEqual(null)
  })
})
