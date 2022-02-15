import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String',
        bio: 'String',
        industry: 'String',
        photo: 'String',
        location: 'String',
        user: {
          create: {
            email: 'String2881524',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        bio: 'String',
        industry: 'String',
        photo: 'String',
        location: 'String',
        user: {
          create: {
            email: 'String3755467',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
