import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SchoolSupervisorCreateArgs>({
  schoolSupervisor: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        user: {
          create: {
            email: 'String8679146',
            hashedPassword: 'String',
            salt: 'String',
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
            email: 'String6500490',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
