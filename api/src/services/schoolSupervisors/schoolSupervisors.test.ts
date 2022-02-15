import {
  schoolSupervisors,
  schoolSupervisor,
  createSchoolSupervisor,
  updateSchoolSupervisor,
  deleteSchoolSupervisor,
} from './schoolSupervisors'
import type { StandardScenario } from './schoolSupervisors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('schoolSupervisors', () => {
  scenario(
    'returns all schoolSupervisors',
    async (scenario: StandardScenario) => {
      const result = await schoolSupervisors()

      expect(result.length).toEqual(
        Object.keys(scenario.schoolSupervisor).length
      )
    }
  )

  scenario(
    'returns a single schoolSupervisor',
    async (scenario: StandardScenario) => {
      const result = await schoolSupervisor({
        id: scenario.schoolSupervisor.one.id,
      })

      expect(result).toEqual(scenario.schoolSupervisor.one)
    }
  )

  scenario('creates a schoolSupervisor', async (scenario: StandardScenario) => {
    const result = await createSchoolSupervisor({
      input: {
        firstName: 'String',
        lastName: 'String',
        userId: scenario.schoolSupervisor.two.userId,
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.userId).toEqual(scenario.schoolSupervisor.two.userId)
  })

  scenario('updates a schoolSupervisor', async (scenario: StandardScenario) => {
    const original = await schoolSupervisor({
      id: scenario.schoolSupervisor.one.id,
    })
    const result = await updateSchoolSupervisor({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a schoolSupervisor', async (scenario: StandardScenario) => {
    const original = await deleteSchoolSupervisor({
      id: scenario.schoolSupervisor.one.id,
    })
    const result = await schoolSupervisor({ id: original.id })

    expect(result).toEqual(null)
  })
})
