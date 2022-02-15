import {
  industrySupervisors,
  industrySupervisor,
  createIndustrySupervisor,
  updateIndustrySupervisor,
  deleteIndustrySupervisor,
} from './industrySupervisors'
import type { StandardScenario } from './industrySupervisors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('industrySupervisors', () => {
  scenario(
    'returns all industrySupervisors',
    async (scenario: StandardScenario) => {
      const result = await industrySupervisors()

      expect(result.length).toEqual(
        Object.keys(scenario.industrySupervisor).length
      )
    }
  )

  scenario(
    'returns a single industrySupervisor',
    async (scenario: StandardScenario) => {
      const result = await industrySupervisor({
        id: scenario.industrySupervisor.one.id,
      })

      expect(result).toEqual(scenario.industrySupervisor.one)
    }
  )

  scenario(
    'creates a industrySupervisor',
    async (scenario: StandardScenario) => {
      const result = await createIndustrySupervisor({
        input: {
          firstName: 'String',
          lastName: 'String',
          userId: scenario.industrySupervisor.two.userId,
          companyId: scenario.industrySupervisor.two.companyId,
        },
      })

      expect(result.firstName).toEqual('String')
      expect(result.lastName).toEqual('String')
      expect(result.userId).toEqual(scenario.industrySupervisor.two.userId)
      expect(result.companyId).toEqual(
        scenario.industrySupervisor.two.companyId
      )
    }
  )

  scenario(
    'updates a industrySupervisor',
    async (scenario: StandardScenario) => {
      const original = await industrySupervisor({
        id: scenario.industrySupervisor.one.id,
      })
      const result = await updateIndustrySupervisor({
        id: original.id,
        input: { firstName: 'String2' },
      })

      expect(result.firstName).toEqual('String2')
    }
  )

  scenario(
    'deletes a industrySupervisor',
    async (scenario: StandardScenario) => {
      const original = await deleteIndustrySupervisor({
        id: scenario.industrySupervisor.one.id,
      })
      const result = await industrySupervisor({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
