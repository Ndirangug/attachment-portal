import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IndustrySupervisorCreateArgs>({
  industrySupervisor: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        user: {
          create: {
            email: 'String3725450',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        company: {
          create: {
            name: 'String',
            bio: 'String',
            industry: 'String',
            photo: 'String',
            location: 'String',
            user: {
              create: {
                email: 'String9310979',
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
        firstName: 'String',
        lastName: 'String',
        user: {
          create: {
            email: 'String5269993',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        company: {
          create: {
            name: 'String',
            bio: 'String',
            industry: 'String',
            photo: 'String',
            location: 'String',
            user: {
              create: {
                email: 'String5686532',
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
