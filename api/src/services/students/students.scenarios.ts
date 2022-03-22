import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.StudentCreateArgs>({
  student: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        title: 'String',
        course: 'String',
        aboutMe: 'String',
        skills: 'String',
        experience: { foo: 'bar' },
        education: { foo: 'bar' },
        user: {
          create: {
            email: 'String8399244',
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
        title: 'String',
        course: 'String',
        aboutMe: 'String',
        skills: 'String',
        experience: { foo: 'bar' },
        education: { foo: 'bar' },
        user: {
          create: {
            email: 'String9279654',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
