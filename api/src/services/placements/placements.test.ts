import {
  placements,
  placement,
  createPlacement,
  updatePlacement,
  deletePlacement,
} from './placements'
import type { StandardScenario } from './placements.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('placements', () => {
  scenario('returns all placements', async (scenario: StandardScenario) => {
    const result = await placements()

    expect(result.length).toEqual(Object.keys(scenario.placement).length)
  })

  scenario('returns a single placement', async (scenario: StandardScenario) => {
    const result = await placement({ id: scenario.placement.one.id })

    expect(result).toEqual(scenario.placement.one)
  })

  scenario('creates a placement', async (scenario: StandardScenario) => {
    const result = await createPlacement({
      input: { applicationId: scenario.placement.two.applicationId },
    })

    expect(result.applicationId).toEqual(scenario.placement.two.applicationId)
  })

  scenario('updates a placement', async (scenario: StandardScenario) => {
    const original = await placement({ id: scenario.placement.one.id })
    const result = await updatePlacement({
      id: original.id,
      input: { applicationId: scenario.placement.two.applicationId },
    })

    expect(result.applicationId).toEqual(scenario.placement.two.applicationId)
  })

  scenario('deletes a placement', async (scenario: StandardScenario) => {
    const original = await deletePlacement({ id: scenario.placement.one.id })
    const result = await placement({ id: original.id })

    expect(result).toEqual(null)
  })
})
