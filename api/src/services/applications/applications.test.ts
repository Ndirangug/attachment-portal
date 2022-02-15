import {
  applications,
  application,
  createApplication,
  updateApplication,
  deleteApplication,
} from './applications'
import type { StandardScenario } from './applications.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('applications', () => {
  scenario('returns all applications', async (scenario: StandardScenario) => {
    const result = await applications()

    expect(result.length).toEqual(Object.keys(scenario.application).length)
  })

  scenario(
    'returns a single application',
    async (scenario: StandardScenario) => {
      const result = await application({ id: scenario.application.one.id })

      expect(result).toEqual(scenario.application.one)
    }
  )

  scenario('creates a application', async (scenario: StandardScenario) => {
    const result = await createApplication({
      input: {
        studentId: scenario.application.two.studentId,
        opportunityId: scenario.application.two.opportunityId,
      },
    })

    expect(result.studentId).toEqual(scenario.application.two.studentId)
    expect(result.opportunityId).toEqual(scenario.application.two.opportunityId)
  })

  scenario('updates a application', async (scenario: StandardScenario) => {
    const original = await application({ id: scenario.application.one.id })
    const result = await updateApplication({
      id: original.id,
      input: { studentId: scenario.application.two.studentId },
    })

    expect(result.studentId).toEqual(scenario.application.two.studentId)
  })

  scenario('deletes a application', async (scenario: StandardScenario) => {
    const original = await deleteApplication({
      id: scenario.application.one.id,
    })
    const result = await application({ id: original.id })

    expect(result).toEqual(null)
  })
})
