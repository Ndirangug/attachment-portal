import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StudentCreateArgs>({
  student: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        course: 'String',
        aboutMe: 'String',
        skills: 'String',
        experience: { foo: 'bar' },
        education: { foo: 'bar' },
        user: {
          create: {
            email: 'String2594286',
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
        course: 'String',
        aboutMe: 'String',
        skills: 'String',
        experience: { foo: 'bar' },
        education: { foo: 'bar' },
        user: {
          create: {
            email: 'String4707273',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
