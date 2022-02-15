import {
  logbookEntries,
  logbookEntry,
  createLogbookEntry,
  updateLogbookEntry,
  deleteLogbookEntry,
} from './logbookEntries'
import type { StandardScenario } from './logbookEntries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('logbookEntries', () => {
  scenario('returns all logbookEntries', async (scenario: StandardScenario) => {
    const result = await logbookEntries()

    expect(result.length).toEqual(Object.keys(scenario.logbookEntry).length)
  })

  scenario(
    'returns a single logbookEntry',
    async (scenario: StandardScenario) => {
      const result = await logbookEntry({ id: scenario.logbookEntry.one.id })

      expect(result).toEqual(scenario.logbookEntry.one)
    }
  )

  scenario('creates a logbookEntry', async (scenario: StandardScenario) => {
    const result = await createLogbookEntry({
      input: {
        studentId: scenario.logbookEntry.two.studentId,
        studentComments: 'String',
        schoolSupervisorComments: 'String',
        industrySupervisorComments: 'String',
        industrySupervisorId: scenario.logbookEntry.two.industrySupervisorId,
        schoolSupervisorId: scenario.logbookEntry.two.schoolSupervisorId,
      },
    })

    expect(result.studentId).toEqual(scenario.logbookEntry.two.studentId)
    expect(result.studentComments).toEqual('String')
    expect(result.schoolSupervisorComments).toEqual('String')
    expect(result.industrySupervisorComments).toEqual('String')
    expect(result.industrySupervisorId).toEqual(
      scenario.logbookEntry.two.industrySupervisorId
    )
    expect(result.schoolSupervisorId).toEqual(
      scenario.logbookEntry.two.schoolSupervisorId
    )
  })

  scenario('updates a logbookEntry', async (scenario: StandardScenario) => {
    const original = await logbookEntry({ id: scenario.logbookEntry.one.id })
    const result = await updateLogbookEntry({
      id: original.id,
      input: { studentComments: 'String2' },
    })

    expect(result.studentComments).toEqual('String2')
  })

  scenario('deletes a logbookEntry', async (scenario: StandardScenario) => {
    const original = await deleteLogbookEntry({
      id: scenario.logbookEntry.one.id,
    })
    const result = await logbookEntry({ id: original.id })

    expect(result).toEqual(null)
  })
})
