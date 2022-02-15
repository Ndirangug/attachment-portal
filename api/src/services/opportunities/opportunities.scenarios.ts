import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OpportunityCreateArgs>({
  opportunity: {
    one: {
      data: {
        title: 'String',
        compnsation: 913426,
        jobDescription: 'String',
        requirements: 'String',
        details: { foo: 'bar' },
        location: 'String',
        skillsRequired: 'String',
        skillsPrefferred: 'String',
        industry: 'String',
        company: {
          create: {
            name: 'String',
            bio: 'String',
            industry: 'String',
            photo: 'String',
            location: 'String',
            user: {
              create: {
                email: 'String9790966',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        compnsation: 7655751,
        jobDescription: 'String',
        requirements: 'String',
        details: { foo: 'bar' },
        location: 'String',
        skillsRequired: 'String',
        skillsPrefferred: 'String',
        industry: 'String',
        company: {
          create: {
            name: 'String',
            bio: 'String',
            industry: 'String',
            photo: 'String',
            location: 'String',
            user: {
              create: {
                email: 'String5093801',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
