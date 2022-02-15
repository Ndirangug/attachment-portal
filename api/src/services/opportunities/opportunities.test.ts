import {
  opportunities,
  opportunity,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
} from './opportunities'
import type { StandardScenario } from './opportunities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('opportunities', () => {
  scenario('returns all opportunities', async (scenario: StandardScenario) => {
    const result = await opportunities()

    expect(result.length).toEqual(Object.keys(scenario.opportunity).length)
  })

  scenario(
    'returns a single opportunity',
    async (scenario: StandardScenario) => {
      const result = await opportunity({ id: scenario.opportunity.one.id })

      expect(result).toEqual(scenario.opportunity.one)
    }
  )

  scenario('creates a opportunity', async (scenario: StandardScenario) => {
    const result = await createOpportunity({
      input: {
        title: 'String',
        compnsation: 2120097,
        jobDescription: 'String',
        requirements: 'String',
        details: { foo: 'bar' },
        location: 'String',
        skillsRequired: 'String',
        skillsPrefferred: 'String',
        industry: 'String',
        companyId: scenario.opportunity.two.companyId,
      },
    })

    expect(result.title).toEqual('String')
    expect(result.compnsation).toEqual(2120097)
    expect(result.jobDescription).toEqual('String')
    expect(result.requirements).toEqual('String')
    expect(result.details).toEqual({ foo: 'bar' })
    expect(result.location).toEqual('String')
    expect(result.skillsRequired).toEqual('String')
    expect(result.skillsPrefferred).toEqual('String')
    expect(result.industry).toEqual('String')
    expect(result.companyId).toEqual(scenario.opportunity.two.companyId)
  })

  scenario('updates a opportunity', async (scenario: StandardScenario) => {
    const original = await opportunity({ id: scenario.opportunity.one.id })
    const result = await updateOpportunity({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a opportunity', async (scenario: StandardScenario) => {
    const original = await deleteOpportunity({
      id: scenario.opportunity.one.id,
    })
    const result = await opportunity({ id: original.id })

    expect(result).toEqual(null)
  })
})
